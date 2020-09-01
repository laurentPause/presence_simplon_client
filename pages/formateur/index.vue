<template>
  <div>
    <Title titre="Formateurs" />
    <b-overlay :show="onLoad" rounded="sm">
      <div class="row">
        <!-- Cards formateurs -->
        <div v-for="formateur in formateurs" :key="formateur.index" class="col-xl-3 col-md-6 mb-4">
          <div class="card border-left-primary shadow h-100 py-2">
            <div class="card-body">
              <div class="row no-gutters align-items-center">
                <div class="col mr-2">
                  <div class="text-xs font-weight-bold text-primary mb-1">
                    {{ formateur.code }}
                  </div>
                  <div class="mb-2 text-gray-800">
                    Nom : {{ formateur.nom }} <br>
                    Prénom : {{ formateur.prenom }}
                  </div>
                  <FormFormateur :formateur="formateur" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </b-overlay>
  </div>
</template>

<script>
import axios from 'axios'
import Title from '~/components/Title'
import FormFormateur from '~/components/FormFormateur'

export default {
  components: {
    Title,
    FormFormateur
  },
  data () {
    return {
      formateurs: Array,
      onLoad: false
    }
  },
  mounted () {
    this.getFormateurs()
  },
  methods: {
    async getFormateurs () {
      this.onLoad = true
      await axios.get('http://localhost:3030/formateur')
        .then((response) => {
          this.formateurs = response.data.formateurs
          console.log(this.formateurs)
        }).catch((e) => {
          this.$toast.error('Erreur !')
        })
      this.onLoad = false
    },
    chargement () {
      this.onLoad = true
    }
  }
}
</script>
