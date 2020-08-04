<template>
  <div class="container">
    <h1>Login</h1>
    <b-form @submit="onSubmit">
      <b-form-group
        id="input-group-email"
        label="Email:"
        label-for="input-email"
      >
        <b-form-input
          id="input-email"
          v-model="form.email"
          type="email"
          required
          placeholder="Entrez votre email"
        />
      </b-form-group>

      <b-form-group
        id="input-group-pass"
        label="Mot de passe:"
        label-for="input-pass"
      >
        <b-form-input
          id="input-pass"
          v-model="form.pass"
          type="password"
          required
          placeholder="Entrez votre mot de passe"
        />
      </b-form-group>

      <b-button type="submit" variant="success">
        Se connecter
      </b-button>
    </b-form>
  </div>
</template>

<script>
// eslint-disable-next-line no-unused-vars
import axios from 'axios'

export default {
  data () {
    return {
      form: {
        email: '',
        pass: ''
      }
    }
  },
  methods: {
    onSubmit (evt) {
      evt.preventDefault()
      console.warn(evt)
      this.$router.push('/')
      this.loginUser()
    },
    async loginUser () {
      console.warn('test')
      const user = {
        email: this.form.email,
        pass: this.form.pass
      }
      await this.$auth.loginWith('local', {
        data: user
      })
      console.warn(this.$auth.loggedIn)
    }
  }
}
</script>
