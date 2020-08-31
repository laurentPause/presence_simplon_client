<template>
  <div>
    <h1>Associer une Section à un Formateur</h1>
    <b-form @submit="onSubmit">
      <b-form-group
        id="input-group-section"
        label="Section :"
        label-for="input-section"
      >
        <b-form-select id="input-section" v-model="form.section.selected" :options="form.section.options" />
      </b-form-group>
      <b-form-group
        id="input-group-formateur"
        label="formateur :"
        label-for="input-formateur"
      >
        <b-form-select id="input-formateur" v-model="form.formateur.selected" :options="form.formateur.options" />
      </b-form-group>
      <b-form-group
        id="input-group-role"
        label="role :"
        label-for="input-role"
      >
        <b-form-select id="input-role" v-model="form.role.selected" :options="form.role.options" />
      </b-form-group>

      <b-button type="submit" variant="success">
        Valider
      </b-button>
    </b-form>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data () {
    return {
      form: {
        section: {
          selected: null,
          options: Array
        },
        formateur: {
          selected: null,
          options: Array
        },
        role: {
          selected: null,
          options: [
            { value: '1', text: 'formateur 1' },
            { value: '2', text: 'formateur 2' }
          ]
        }
      }
    }
  },
  mounted () {
    this.getSections()
    this.getFormateurs()
  },
  methods: {
    onSubmit (evt) {
      evt.preventDefault()
      this.assoceFormateurSection()
    },
    async assoceFormateurSection (idSheet) {
      // eslint-disable-next-line new-cap
      await axios.post('http://localhost:3030/section/assoce', {
        section: this.form.section.selected,
        formateur: this.form.formateur.selected,
        role: this.form.role.selected
      })
        .then((response) => {
          this.dataSheet = response.data.fiche
          this.showFormAdd = true

          console.log(this.dataSheet)
        }).catch(function (e) {
          console.log(e)
        })
    },
    async getSections () {
      // eslint-disable-next-line new-cap
      await axios.get('http://localhost:3030/section')
        .then((response) => {
          const sections = response.data.sections
          const result = []
          sections.forEach((element) => {
            result.push({ value: element._id, text: element.intitule })
          })
          this.form.section.options = result
          console.log(this.dataSheet)
        }).catch(function (e) {
          console.log(e)
        })
    },
    async getFormateurs () {
      // eslint-disable-next-line new-cap
      await axios.get('http://localhost:3030/formateur')
        .then((response) => {
          const formateurs = response.data.formateurs
          const result = []
          formateurs.forEach((element) => {
            result.push({ value: element._id, text: element.prenom + ' ' + element.nom })
          })
          this.form.formateur.options = result
          console.log(this.dataSheet)
        }).catch(function (e) {
          console.log(e)
        })
    }
  }
}
</script>
