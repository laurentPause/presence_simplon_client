<template>
  <div>
    <b-navbar toggleable="lg" type="dark" variant="info" show >
      <b-navbar-brand href="#">
        <nuxt-link to="/" class="text-light">
          Simplon présence
        </nuxt-link>
      </b-navbar-brand>

      <b-navbar-toggle target="nav-collapse" />

      <b-collapse id="nav-collapse" is-nav>
        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <b-nav-item>
            <nuxt-link to="/login" class="text-light ">
              Connexion
            </nuxt-link>
          </b-nav-item>
          <b-nav-item class="ml-2">
            <nuxt-link to="/register" class="text-light ">
              Inscription
            </nuxt-link>
          </b-nav-item>
        </b-navbar-nav>

        <b-navbar-nav class="ml-auto">
          <b-nav-item>
            <nuxt-link to="/profile">
              <!-- {{ $auth.user.email }} -->
            </nuxt-link>
          </b-nav-item>
          <b-nav-item @click="deconnexion()">
            Déconnexion
          </b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
export default {
  name: 'NavBar'
}
</script>
