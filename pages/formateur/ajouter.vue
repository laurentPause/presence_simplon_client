<template>
  <div>
    <h1>Ajouter un Formateur</h1>
    <b-form @submit="onSubmit">
      <b-form-group
        id="input-group-nom"
        label="Nom"
        label-for="input-nom"
      >
        <b-form-input
          id="input-nom"
          v-model="form.nom"
          type="text"
          required
          placeholder="Nom du formateur"
        />
      </b-form-group>
      <b-form-group
        id="input-group-prenom"
        label="Prénom"
        label-for="input-prenom"
      >
        <b-form-input
          id="input-prenom"
          v-model="form.prenom"
          type="text"
          required
          placeholder="Prénom du formateur"
        />
      </b-form-group>

      <b-form-group
        id="input-group-code"
        label="Code :"
        label-for="input-code"
      >
        <b-form-input
          id="input-code"
          v-model="form.code"
          type="text"
          required
          placeholder="Code du formateur"
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
        nom: '',
        prenom: '',
        code: ''
      }
    }
  },
  methods: {
    onSubmit (evt) {
      evt.preventDefault()
      this.addFormateur()
    },
    async addFormateur () {
      // eslint-disable-next-line new-cap
      await axios.post('http://localhost:3030/formateur/', this.form)
        .then((response) => {
          if (response.data.message === 'OK') {
            this.$toast.success('Formateur ajouter')
          } else {
            switch (response.data.erreur) {
              case '0':
                this.$toast.error('Formateur existe !')
                break
              case '1':
                this.$toast.error('Code existe !')
                break
            }
          }
        }).catch((e) => {
          this.$toast.error('Erreur serveur !')
        })
    }
  }
}
</script>
