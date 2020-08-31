<template>
  <ul id="accordionSidebar" class="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion">
    <!-- Sidebar - Brand -->
    <nuxt-link class="sidebar-brand d-flex align-items-center justify-content-center" to="/">
      <div class="sidebar-brand-icon">
        <img src="~/assets/img/logo_1_white.png" alt="" srcset="">
      </div>
      <div class="sidebar-brand-text mx-3">
        Simplon Présence
      </div>
    </nuxt-link>

    <!-- Divider -->
    <hr class="sidebar-divider my-0">

    <!-- Nav Item - Dashboard -->
    <li class="nav-item">
      <nuxt-link class="nav-link" to="/">
        <i class="fas fa-fw fa-tachometer-alt" />
        <span>Tableau de bord</span>
      </nuxt-link>
    </li>

    <!-- Divider -->
    <hr class="sidebar-divider">

    <!-- Heading -->
    <div class="sidebar-heading">
      Feuille
    </div>

    <!-- Nav Item - Page fiche -->
    <li class="nav-item">
      <nuxt-link class="nav-link" to="/fiche">
        <i class="fas fa-fw fa-tachometer-alt" />
        <span>Voir les feuilles</span>
      </nuxt-link>
    </li>

    <!-- Nav Item - Page fiche -->
    <li class="nav-item">
      <nuxt-link class="nav-link" to="/fiche">
        <i class="fas fa-fw fa-tachometer-alt" />
        <span>Ajouter une feuilles</span>
      </nuxt-link>
    </li>

    <!-- Divider -->
    <hr class="sidebar-divider">

    <!-- Heading -->
    <div class="sidebar-heading">
      Organisme
    </div>

    <!-- Nav Item - Pages Collapse Menu -->
    <li class="nav-item">
      <a v-b-toggle.formateur-side class="nav-link collapsed">
        <i class="fas fa-fw fa-folder" />
        <span>Formateur</span>
      </a>
      <b-collapse id="formateur-side">
        <div class="bg-white py-2 collapse-inner rounded">
          <nuxt-link class="collapse-item" to="/formateur">
            Voir les formateurs
          </nuxt-link>
          <nuxt-link class="collapse-item" to="/formateur/ajouter">
            Ajouter une formateur
          </nuxt-link>
        </div>
      </b-collapse>
    </li>
    <!-- Nav Item - Pages Collapse Menu -->
    <li class="nav-item">
      <a v-b-toggle.apprenant-side class="nav-link collapsed">
        <i class="fas fa-fw fa-folder" />
        <span>Apprenant</span>
      </a>
      <b-collapse id="apprenant-side">
        <div class="bg-white py-2 collapse-inner rounded">
          <nuxt-link class="collapse-item" to="/apprenant">
            Voir les apprenants
          </nuxt-link>
          <nuxt-link class="collapse-item" to="/apprenant/ajouter">
            Ajouter une apprenant
          </nuxt-link>
        </div>
      </b-collapse>
    </li>
    <!-- Nav Item - Pages Collapse Menu -->
    <li class="nav-item">
      <a v-b-toggle.section-side class="nav-link collapsed">
        <i class="fas fa-fw fa-folder" />
        <span>Section</span>
      </a>
      <b-collapse id="section-side">
        <div class="bg-white py-2 collapse-inner rounded">
          <nuxt-link class="collapse-item" to="/section">
            Voir les sections
          </nuxt-link>
          <nuxt-link class="collapse-item" to="/section/ajouter">
            Ajouter une section
          </nuxt-link>
          <nuxt-link class="collapse-item" to="/section/associer">
            Associer
          </nuxt-link>
        </div>
      </b-collapse>
    </li>

    <!-- Divider -->
    <hr class="sidebar-divider d-none d-md-block">

    <!-- Sidebar Toggler (Sidebar) -->
    <!-- <div class="text-center d-none d-md-inline">
      <button id="sidebarToggle" class="rounded-circle border-0" />
    </div> -->
  </ul>
</template>
