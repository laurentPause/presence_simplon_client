<template>
  <div class="bg-gradient-primary">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-xl-10 col-lg-12 col-md-9">
          <NavBar />
          <div class="card o-hidden border-0 shadow-lg my-5">
            <div class="card-body p-0">
              <div class="row">
                <Nuxt />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import NavBar from '~/components/NavBarMobile'

export default {
  components: {
    NavBar
  }
}
</script>

<style>
@import '@/assets/template/admin/vendor/fontawesome-free/css/all.min.css';
@import '@/assets/template/admin/css/sb-admin-2.css';

</style>
