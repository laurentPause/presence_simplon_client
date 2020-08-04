<template>
  <div class="container">
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

        <b-button type="submit" variant="success">
          Valider
        </b-button>
      </b-form>
    </div>
    <FormFiche v-else :fiche="dataSheet" />
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
        Idsheet: ''
      },
      showFormAdd: false
    }
  },
  methods: {
    onSubmit (evt) {
      evt.preventDefault()
      this.getDataSheet()
    },
    async getDataSheet (idSheet) {
      await axios.get('http://localhost:3030/sheet/' + this.form.Idsheet)
        .then((response) => {
          this.dataSheet = response.data.fiche
          this.showFormAdd = true
          console.log(this.dataSheet)
        }).catch(function (e) {
          console.log(e)
        })
    }
  }
}
</script>
