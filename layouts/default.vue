<template>
  <div class="h-100">
    <NavBar />
    <div class="row h-100">
      <SideBar class="col-2" />
      <Nuxt />
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
html,body,#__nuxt,#__layout{
  height: 100%;
}
</style>
