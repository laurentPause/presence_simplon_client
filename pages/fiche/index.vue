<template>
  <div>
    <h1 class="text-center">
      Fiches de présence
    </h1>
    <div class="row">
      <div v-for="fiche in fiches" :key="fiche.index" class="col">
        <b-card
          :title="fiche.section.intitule"
          :img-src="fiche.logo"
          img-alt="Image"
          img-top
          tag="article"
          style="max-width: 20rem;"
          class="mb-2"
        >
          <b-card-text>
            Semaine du {{ fiche.semaine[0] }} au {{ fiche.semaine[4] }}
          </b-card-text>

          <FormFiche :fiche="fiche" />
        </b-card>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data () {
    return {
      fiches: Array
    }
  },
  computed: {

  },
  mounted () {
    this.getFiches()
  },
  methods: {
    async getFiches () {
      await axios.get('http://localhost:3030/fiche')
        .then((response) => {
          this.fiches = response.data.fiches
          console.log(this.fiches)
        }).catch((e) => {
          this.$toast.error('Erreur !')
        })
    },
    generateOnePDF () {

    }
  }
}
</script>
