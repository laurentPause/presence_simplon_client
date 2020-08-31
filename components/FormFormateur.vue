<template>
  <div>
    <b-form @submit="onSubmit" @reset="onReset">
      <b-form-group
        id="input-group-1"
        label="Email address:"
        label-for="input-1"
      >
        <b-form-input
          id="input-1"
          v-model="form.email"
          type="email"
          required
          placeholder="Enter email"
        />
      </b-form-group>
      <b-button @click="$bvModal.hide('modal-update-formateur' + formateur.code)">
        Close Me
      </b-button>
    </b-form>
  </div>
</template>

<script>
export default {
  name: 'FormFormateur',
  props: {
    formateur: Object
  },
  data () {
    return {
      form: {

      }
    }
  }
}
</script>
