<template>
  <div>
    <b-dropdown size="lg" variant="link" toggle-class="text-decoration-none" no-caret>
      <b-dropdown-header id="dropdown-header-notif">
        Emargement
      </b-dropdown-header>
      <template v-slot:button-content>
        <a
          id="alertDropdown"
          class="nav-link dropdown-toggle"
          href="#"
          role="button"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        >
          <i class="fas fa-bell fa-fw" />
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
  </div>
</template>

<script>
export default {
  name: 'NotifEmargement'
}
</script>
