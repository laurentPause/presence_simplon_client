<template>
  <div class="d-sm-flex align-items-center justify-content-between mb-4">
    <h1 class="h3 mb-0 text-gray-800">
      {{ titre }}
    </h1>
  </div>
</template>
<script>
export default {
  name: 'Title',
  props: {
    titre: String
  }
}
</script>
