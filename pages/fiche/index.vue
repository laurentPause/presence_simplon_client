<template>
  <div>
    <Title titre="Feuille de présence" />
    <b-overlay :show="onLoad" rounded="sm">
      <div class="row">
        <div v-for="fiche in fiches" :key="fiche.index" class="col-xl-3 col-md-6 mb-4">
          <div class="card border-left-primary shadow h-100 py-2">
            <div class="card-body">
              <div class="row no-gutters align-items-center">
                <div class="col-auto">
                  <img :src="fiche.logo" alt="logo" class="img-thumbnail float-left">
                </div>
                <div class="col mr-2">
                  <div class="text-xs font-weight-bold text-primary text-uppercase mb-1">
                    {{ fiche.section.intitule }}
                  </div>
                  <div class="mb-2 text-gray-800">
                    Du {{ fiche.semaine[0] }} au {{ fiche.semaine[4] }}
                  </div>
                  <FormFiche :fiche="fiche" @recharge="getFiches()" @inLoad="chargement()" />
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

export default {
  components: {
    Title
  },
  data () {
    return {
      fiches: Array,
      onLoad: false
    }
  },
  mounted () {
    this.getFiches()
  },
  methods: {
    async getFiches () {
      this.onLoad = true
      await axios.get('http://localhost:3030/fiche')
        .then((response) => {
          this.fiches = response.data.fiches
          console.log(this.fiches)
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
