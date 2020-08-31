<template>
  <div id="page-top">
    <div id="wrapper">
      <SideBar class="col-2" />
      <div id="content-wrapper" class="d-flex flex-column">
        <div id="content">
          <NavBar />
          <div class="container-fluid">
            <Nuxt />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import NavBar from '~/components/NavBar'
import SideBar from '~/components/SideBar'

export default {
  components: {
    NavBar,
    SideBar
  }
}
</script>

<style>

@import '@/assets/template/admin/vendor/fontawesome-free/css/all.min.css';
@import '@/assets/template/admin/css/sb-admin-2.css';
</style>
