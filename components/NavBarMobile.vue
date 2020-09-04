<template>
  <nav class="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">
    <!-- Topbar Navbar -->
    <ul class="navbar-nav ml-auto">
      <li class="nav-item">
        <NotifEmargement />
      </li>
      <div class="topbar-divider d-none d-sm-block" />
      <li class="nav-item">
        <b-dropdown size="lg" variant="link" toggle-class="text-decoration-none" no-caret>
          <template v-slot:button-content>
            <a
              id="userDropdown"
              class="nav-link dropdown-toggle"
              href="#"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <span class="mr-2 d-none d-lg-inline text-gray-600 small">Users</span>
              <img class="img-profile rounded-circle" src="https://source.unsplash.com/QAB-WJcbgJk/60x60">
            </a>
          </template>
          <b-dropdown-item href="#">
            <i class="fas fa-user fa-sm fa-fw mr-2 text-gray-400" />
            Profile
          </b-dropdown-item>
          <b-dropdown-item href="#">
            <i class="fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400" />
            Logout
          </b-dropdown-item>
        </b-dropdown>
      </li>
    </ul>
  </nav>
</template>

<script>
import NotifEmargement from '~/components/NotifEmargement'

export default {
  name: 'NavBarMobile',
  components: {
    NotifEmargement
  }
}
</script>
