<template>
  <div>
    <!-- <div class="row">
      <div class="col">
        <img :src="fiche.logo" alt="" srcset="" width="300px">
      </div>
      <div class="col">
        <h1>Feuille d'emargement</h1>
        <h2>Intitulé: {{ fiche.section.intitule }}</h2>
      </div>
    </div>
    <table class="table table-bordered">
      <tbody>
        <tr>
          <td colspan="2" />
          <td v-for="element in fiche.semaine" :key="element.index" colspan="2">
            Le {{ element }}
          </td>
        </tr>
        <tr>
          <td colspan="2">
            NOM PRENOM APPRENANT.E
          </td>
          <td>
            MATIN
            Durée en h : 4
          </td>
          <td>
            APRES-MIDI
            Durée en h : 3
          </td>
          <td>
            MATIN
            Durée en h : 4
          </td>
          <td>
            APRES-MIDI
            Durée en h : 3
          </td>
          <td>
            MATIN
            Durée en h : 4
          </td>
          <td>
            APRES-MIDI
            Durée en h : 3
          </td>
          <td>
            MATIN
            Durée en h : 4
          </td>
          <td>
            APRES-MIDI
            Durée en h : 3
          </td>
          <td>
            MATIN
            Durée en h : 4
          </td>
          <td>
            APRES-MIDI
            Durée en h : 3
          </td>
        </tr>
        <tr v-for="element in fiche.apprenants" :key="element.index">
          <td>
            {{ element.nom }}
          </td>
          <td>
            {{ element.prenom }}
          </td>
          <td v-for="n in 10" :key="n.index" />
        </tr>
        <tr>
          <td colspan="2" />
          <td v-for="n in 5" :key="n.index" colspan="2">
            NOM Prénom formateur.rice :
          </td>
        </tr>
        <tr>
          <td colspan="2" />
          <td v-for="element in fiche.formateurs" :key="element.index" colspan="2">
            {{ element }}
          </td>
        </tr>
      </tbody>
    </table> -->
    <b-button-group class="w-100">
      <b-button variant="success" title="Générer un PDF" @click="generate()">
        <i class="fas fa-file-pdf" />
      </b-button>
      <b-button variant="info" title="Syncroniser avec le google sheet" @click="synchroniser()">
        <i class="fas fa-sync-alt" />
      </b-button>
      <b-button variant="danger" title="Supprimer" @click="supprimer()">
        <i class="fas fa-trash" />
      </b-button>
    </b-button-group>

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
                  <td>
                    {{ element.nom }}
                  </td>
                  <td>
                    {{ element.prenom }}
                  </td>
                  <td v-for="n in 10" :key="n.index" class="border border-dark">
                    Test
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
                    {{ element }}
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
      pages: []
    }
  },
  mounted () {
    this.createPage()
    console.log('formateur : ', this.formateurs)
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
    }
  }
}
</script>

<style scoped>
 #table-pdf{
   font-size: 60%;
 }
</style>
