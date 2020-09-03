<template>
  <div>
    <h1>Ajouter un apprenant</h1>
    <b-form @submit="onSubmit">
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
          placeholder="Code de l'apprenant"
        />
      </b-form-group>
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
          placeholder="Nom de l'apprenant"
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
          placeholder="Prénom de l'apprenant"
        />
      </b-form-group>

      <b-form-group
        id="input-group-email"
        label="Email :"
        label-for="input-email"
      >
        <b-form-input
          id="input-email"
          v-model="form.email"
          type="email"
          required
          placeholder="E-mail de l'apprenant"
        />
      </b-form-group>

      <b-button type="submit" variant="success">
        Valider
      </b-button>
    </b-form>
  </div>
</template>

<script>

export default {
  data () {
    return {
      form: {
        nom: '',
        prenom: '',
        code: '',
        email: ''
      }
    }
  },
  methods: {
    onSubmit (evt) {
      evt.preventDefault()
      this.addUser()
    },
    async addUser () {
      try {
        const apprenant = await this.$axios.$post('http://localhost:3030/user/', this.form)
        this.$toast.success(apprenant.message)
      } catch (e) {
        console.log(e)
        this.$toast.error('Erreur')
      }
    }
  }
}
</script>
