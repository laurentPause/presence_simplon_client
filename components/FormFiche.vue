<template>
  <div>
    <!-- Buttons -->
    <b-button-group class="w-100">
      <b-button variant="success" title="Générer un PDF" @click="generate()">
        <i class="fas fa-file-pdf" />
      </b-button>
      <b-button variant="primary" title="Générer les liens de signature" @click="linkSignature()">
        <i class="fas fa-link" />
      </b-button>
      <b-button variant="info" title="Syncroniser avec le google sheet" @click="synchroniser()">
        <i class="fas fa-sync-alt" />
      </b-button>
      <b-button variant="danger" title="Supprimer" @click="supprimer()">
        <i class="fas fa-trash" />
      </b-button>
    </b-button-group>

    <!-- Modal liens -->
    <b-modal id="modal-liens" hide-footer title="Liens">
      <div class="d-block text-center">
        <ul>
          <li v-for="link in links" :key="link.index">
            <nuxt-link :to="'/fiche/qrcode'+link">
              {{ link }}
            </nuxt-link>
          </li>
        </ul>
      </div>
      <b-button class="mt-3" variant="outline-danger" @click="$bvModal.hide('modal-liens')">
        Fermer
      </b-button>
    </b-modal>

    <!-- PDF en HTML -->
    <div>
      <vue-html2pdf
        ref="pdf"
        :show-layout="false"
        :enable-download="true"
        :paginate-elements-by-height="1400"
        filename="presence"
        :pdf-quality="2"
        :manual-pagination="true"
        pdf-format="a4"
        pdf-orientation="landscape"
        pdf-content-width="100%"
      >
        <section slot="pdf-content">
          <div v-for="page in pages" :key="page.index" :class="'p-5 ' + breakPage(page.index)">
            <b-card
              :img-src="fiche.logo"
              img-alt="Card image"
              img-start
              class=""
              img-height="50px"
              border-variant="light"
            >
              <b-card-text>
                <strong>Feuille d'emargement</strong> <br>
                <strong>Intitulé: {{ fiche.section.intitule }}</strong> <br>
                <strong>Organisme: SIMPLON REUNION</strong>
              </b-card-text>
            </b-card>
            <table id="table-pdf" class="table table-borderless text-center font-weight-bold ">
              <tbody>
                <tr>
                  <td colspan="2" />
                  <td v-for="element in semaine" :key="element.index" colspan="2" class="border border-dark">
                    Le {{ element }}
                  </td>
                </tr>
                <tr>
                  <td colspan="2" class="border border-dark">
                    NOM PRENOM APPRENANT.E
                  </td>
                  <td class="border border-dark">
                    MATIN<br>
                    Durée en h : 4
                  </td>
                  <td class="border border-dark">
                    APRES-MIDI<br>
                    Durée en h : 3
                  </td>
                  <td class="border border-dark">
                    MATIN<br>
                    Durée en h : 4
                  </td>
                  <td class="border border-dark">
                    APRES-MIDI<br>
                    Durée en h : 3
                  </td>
                  <td class="border border-dark">
                    MATIN<br>
                    Durée en h : 4
                  </td>
                  <td class="border border-dark">
                    APRES-MIDI<br>
                    Durée en h : 3
                  </td>
                  <td class="border border-dark">
                    MATIN<br>
                    Durée en h : 4
                  </td>
                  <td class="border border-dark">
                    APRES-MIDI<br>
                    Durée en h : 3
                  </td>
                  <td class="border border-dark">
                    MATIN<br>
                    Durée en h : 4
                  </td>
                  <td class="border border-dark">
                    APRES-MIDI<br>
                    Durée en h : 3
                  </td>
                </tr>
                <tr v-for="element in page.apprenants" :key="element.index" class="border border-dark">
                  <td colspan="2">
                    {{ apprenant(element.code) }}
                  </td>
                  <td v-for="test in element.signatures" :key="test.index" class="border border-dark">
                    <img width="50" :src="test.signature" alt="" srcset="">
                  </td>
                </tr>
                <tr>
                  <td colspan="2" />
                  <td v-for="n in 5" :key="n.index" colspan="2" class="border border-dark">
                    NOM Prénom formateur.rice :
                  </td>
                </tr>
                <tr>
                  <td colspan="2" />
                  <td v-for="element in formateurs" :key="element.index" colspan="2" class="border border-dark">
                    {{ formateur(element) }}
                  </td>
                </tr>
                <tr>
                  <td colspan="2" />
                  <td v-for="n in 5" :key="n.index" colspan="2" class="border border-dark" />
                </tr>
              </tbody>
            </table>
          </div>
        </section>
      </vue-html2pdf>
    </div>
  </div>
</template>

<script>

export default {
  name: 'FormFiche',
  props: {
    // eslint-disable-next-line vue/require-default-prop
    fiche: Object,
    // eslint-disable-next-line vue/require-default-prop
    intitule: String
  },
  data () {
    return {
      form: {
      },
      semaine: this.fiche.semaine,
      formateurs: this.fiche.formateurs,
      formateursReq: [],
      apprenants: [],
      pages: [],
      links: Object
    }
  },
  computed: {
    tabLiens () {
      const result = []
      this.links.forEach((element) => {
        result.push({ liens: element })
      })
      return result
    }
  },
  mounted () {
    this.createPage()
    this.getApprenants()
    this.getFormateurs()
  },
  methods: {
    generate () {
      this.$refs.pdf.generatePdf()
    },
    createPage () {
      let page = 0
      for (let index = 0; index < this.fiche.apprenants.length; index += 5) {
        page++
        const apprenants = this.fiche.apprenants.slice(index, 5 + index)
        this.pages.push({ index: page, apprenants })
      }
    },
    breakPage (index) {
      if (index > 0) {
        return 'html2pdf__page-break'
      } else {
        return ''
      }
    },
    async supprimer () {
      try {
        await this.$axios.$delete('http://localhost:3030/fiche/' + this.fiche._id)
        this.$toast.success('Fiche supprimer !')
        this.$emit('recharge')
      } catch (e) {
        this.$toast.error('Erreur serveur !')
      }
    },
    async synchroniser () {
      try {
        this.$emit('inLoad')
        const sheet = await this.$axios.$get('http://localhost:3030/sheet/' + this.fiche.idSheet)
        const data = {
          id: this.fiche._id,
          semaine: sheet.fiche.semaine,
          apprenants: sheet.fiche.apprenants,
          formateurs: sheet.fiche.formateurs
        }
        await this.$axios.$put('http://localhost:3030/fiche/' + data.id, data)
        this.$toast.success('Fiche syncroniser !')
        this.$emit('recharge')
      } catch (e) {
        this.$toast.error('Erreur serveur !')
      }
    },
    async linkSignature () {
      try {
        const tabLinks = []
        this.fiche.apprenants.forEach((aprenant, indexa) => {
          this.fiche.semaine.forEach((jour, indexb) => {
            tabLinks.push('?aprenant=' + indexa + '&jour=' + indexb + '&creneau=matin' + '&id=' + this.fiche._id)
            tabLinks.push('?aprenant=' + indexa + '&jour=' + indexb + '&creneau=apresmidi' + '&id=' + this.fiche._id)
          })
        })
        const data = {
          idFiche: this.fiche._id,
          links: tabLinks,
          created: new Date()
        }
        const liens = await this.$axios.$post('http://localhost:3030/lien', data)
        this.$toast.success(liens.message)
        this.links = liens.liens.links
        console.log(liens)
        this.$bvModal.show('modal-liens')
      } catch (e) {
        this.$toast.error('Erreur !')
      }
    },
    async getApprenants () {
      try {
        const finds = []
        this.fiche.apprenants.forEach((element) => {
          finds.push({ code: element.code })
        })
        const apprenants = await this.$axios.$post('http://localhost:3030/user/find', { filtre: finds })
        this.apprenants = apprenants.users
      } catch (e) {
        this.$toast.error('Erreur !')
      }
    },
    apprenant (code) {
      const found = this.apprenants.find(element => element.login === code)
      if (found) {
        return found.nom + ' ' + found.prenom
      } else {
        return code
      }
    },
    async getFormateurs () {
      try {
        const finds = []
        this.fiche.formateurs.forEach((element) => {
          finds.push({ code: element })
        })
        const formateurs = await this.$axios.$post('http://localhost:3030/formateur/find', { filtre: finds })
        this.formateursReq = formateurs.results
        console.log(formateurs)
      } catch (e) {
        this.$toast.error('Erreur formateurs !')
      }
    },
    formateur (code) {
      const found = this.formateursReq.find(element => element.code === code)
      if (found) {
        return found.nom + ' ' + found.prenom
      } else {
        return code
      }
    }
  }
}
</script>

<style scoped>
 #table-pdf{
   font-size: 60%;
 }
</style>
