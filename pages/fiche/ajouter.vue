<template>
  <div class="container">
    <b-overlay :show="onLoad" rounded="sm">
      <h1>Ajouter une fiche</h1>
      <div v-if="!showFormAdd">
        <b-form @submit="onSubmit">
          <b-form-group
            id="input-group-idsheet"
            label="Id du google sheet:"
            label-for="input-idsheet"
          >
            <b-form-input
              id="input-idsheet"
              v-model="form.Idsheet"
              type="text"
              required
              placeholder="Entrez l'ID du google sheet"
            />
          </b-form-group>
          <b-form-group
            id="input-group-section"
            label="Section :"
            label-for="input-section"
          >
            <b-form-select id="input-section" v-model="form.section.selected" :options="form.section.options" required />
          </b-form-group>
          <b-form-group
            id="input-group-logo"
            label="Logo :"
            label-for="input-logo"
          >
            <b-form-input
              id="input-logo"
              v-model="form.logo"
              type="text"
              required
              placeholder="link"
            />
          </b-form-group>
          <b-button type="submit" variant="success">
            Valider
          </b-button>
        </b-form>
      </div>
    </b-overlay>
  </div>
</template>

<script>
import axios from 'axios'
import FormFiche from '~/components/FormFiche'

export default {
  components: {
    // eslint-disable-next-line vue/no-unused-components
    FormFiche
  },
  data () {
    return {
      // eslint-disable-next-line no-undef
      dataSheet: Object,
      form: {
        Idsheet: '',
        section: {
          selected: null,
          options: []
        },
        logo: ''
      },
      showFormAdd: false,
      onLoad: false,
      show: Boolean
    }
  },
  mounted () {
    this.getSections()
    this.showFormAdd = false
  },
  methods: {
    onSubmit (evt) {
      evt.preventDefault()
      this.addFiche()
    },
    async getDataSheet () {
      // eslint-disable-next-line new-cap
      await axios.get('http://localhost:3030/sheet/' + this.form.Idsheet)
        .then((response) => {
          this.dataSheet = response.data.fiche
          this.$toast.success('Donnée du sheet récupérer !')
          // this.showFormAdd = true

          console.log(this.dataSheet)
        }).catch(function (e) {
          this.$toast.error('Erreur à la récupération des données du sheet !')
        })
    },
    async addFiche () {
      this.onLoad = true
      // eslint-disable-next-line new-cap
      await this.getDataSheet()
      const data = {
        idSheet: this.form.Idsheet,
        logo: this.form.logo,
        semaine: this.dataSheet.semaine,
        section: this.form.section.selected,
        apprenants: this.dataSheet.apprenants,
        formateurs: this.dataSheet.formateurs
      }
      await axios.post('http://localhost:3030/fiche', data)
        .then((response) => {
          this.$toast.success('Ajout de la fiche de présence !')
          this.$routes.push('/fiche')
        }).catch(function (e) {
          this.$toast.error('Erreur !')
        })
      this.onLoad = false
    },
    async getSections () {
      this.onLoad = true
      // eslint-disable-next-line new-cap
      await axios.get('http://localhost:3030/section')
        .then((response) => {
          const sections = response.data.sections
          const result = []
          sections.forEach((element) => {
            result.push({ value: element._id, text: element.intitule })
          })
          this.form.section.options = result
        }).catch(function (e) {
        })
      this.onLoad = false
    }
  }
}
</script>
