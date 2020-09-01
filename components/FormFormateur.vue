<template>
  <div>
    <b-button-group class="w-100">
      <b-button variant="info" title="Syncroniser avec le google sheet" @click="$bvModal.show('modal-update-formateur' + formateur.code)">
        <i class="fas fa-user-edit" />
      </b-button>
      <b-button variant="danger" title="Supprimer" @click="supprimer()">
        <i class="fas fa-user-times" />
      </b-button>
    </b-button-group>

    <!-- Modals update -->
    <b-modal :id="'modal-update-formateur' + formateur.code" hide-footer :title="'Modifier ' + formateur.code">
      <div class="d-block text-center">
        <b-form @submit="onSubmit">
          <b-form-group
            id="input-group-nom"
            label="Nom :"
            label-for="input-nom"
          >
            <b-form-input
              id="input-nom"
              v-model="form.nom"
              type="text"
              required
              placeholder="Modifier le nom"
            />
          </b-form-group>
          <b-form-group
            id="input-group-prenom"
            label="Prenom :"
            label-for="input-prenom"
          >
            <b-form-input
              id="input-prenom"
              v-model="form.prenom"
              type="text"
              required
              placeholder="Modifier le prenom"
            />
          </b-form-group>
          <b-form-group
            id="input-group-code"
            label="Code :"
            label-for="input-code"
          >
            <b-form-input
              id="input-code"
              v-model="form.code"
              type="text"
              required
              placeholder="Modifier le code"
            />
          </b-form-group>
          <b-button variant="primary" type="submit" @click="$bvModal.hide('modal-update-formateur' + formateur.code)">
            Modifier
          </b-button>
          <b-button @click="$bvModal.hide('modal-update-formateur' + formateur.code)">
            Annuler
          </b-button>
        </b-form>
      </div>
    </b-modal>
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
        nom: this.formateur.nom,
        prenom: this.formateur.prenom,
        code: this.formateur.code
      }
    }
  }
}
</script>
