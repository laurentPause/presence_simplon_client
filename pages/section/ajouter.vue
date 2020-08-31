<template>
  <div>
    <h1>Ajouter une Section</h1>
    <b-form @submit="onSubmit">
      <b-form-group
        id="input-group-intitule"
        label="Intitulé"
        label-for="input-intitule"
      >
        <b-form-input
          id="input-intitule"
          v-model="form.intitule"
          type="text"
          required
          placeholder="Entrez l'intitulé de la section"
        />
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
        intitule: ''
      },
      showFormAdd: false
    }
  },
  methods: {
    onSubmit (evt) {
      evt.preventDefault()
      this.addSection()
    },
    async addSection (idSheet) {
      // eslint-disable-next-line new-cap
      await axios.post('http://localhost:3030/section/', this.form)
        .then((response) => {
          console.log('OK')

          console.log(this.dataSheet)
        }).catch(function (e) {
          console.log(e)
        })
    }
  }
}
</script>
