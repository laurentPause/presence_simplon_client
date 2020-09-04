<template>
  <div>
    <Title titre="Signature" />
    <b-overlay :show="onLoad" rounded="sm">
      <div class="row">
        <b-form @submit="onSubmit">
          <!-- section -->
          <b-form-group
            id="input-group-section"
            label="Section :"
            label-for="input-section"
          >
            <b-form-input
              id="input-section"
              v-model="form.section"
              type="text"
              readonly
            />
          </b-form-group>
          <!-- Apprenant -->
          <b-form-group
            id="input-group-apprenant"
            label="Apprenant :"
            label-for="input-apprenant"
          >
            <b-form-input
              id="input-1"
              v-model="form.apprenant"
              type="text"
              readonly
            />
          </b-form-group>
          <!-- Jour -->
          <b-form-group
            id="input-group-jour"
            label="Jour :"
            label-for="input-jour"
          >
            <b-form-input
              id="input-jour"
              v-model="form.jour"
              type="text"
              readonly
            />
          </b-form-group>
          <!-- Creneau -->
          <b-form-group
            id="input-group-creneau"
            label="Créneau :"
            label-for="input-creneau"
          >
            <b-form-input
              id="input-creneau"
              v-model="form.creneau"
              type="text"
              readonly
            />
          </b-form-group>
          <!-- Signature -->
          <b-form-group
            id="canvas-group-signature"
            label="Signature :"
          />
          <Canvas ref="canvas" :effacer="reset" @signature="signature = $event" />

          <b-button type="submit" variant="primary">
            Signer
          </b-button>
          <b-button type="button" variant="danger" @click="onReset">
            Reset
          </b-button>
        </b-form>
      </div>
    </b-overlay>
  </div>
</template>

<script>
import Title from '~/components/Title'
import Canvas from '~/components/Canvas'

export default {
  components: {
    Title,
    Canvas
  },
  data () {
    return {
      fiche: Array,
      onLoad: false,
      reset: false,
      signature: '',
      form: {
        section: '',
        apprenant: '',
        jour: '',
        creneau: ''
      },
      params: {
        fiche: '',
        apprenant: '',
        jour: '',
        creneau: ''
      }
    }
  },
  computed: {
  },
  mounted () {
    this.getParams()
    this.getFiche()
  },
  methods: {
    // eslint-disable-next-line require-await
    async getFiche () {
      this.onLoad = true
      try {
        const fiche = await this.$axios.$get('http://localhost:3030/fiche/' + this.params.fiche)
        this.form.section = fiche.fiches.section.intitule
        this.form.apprenant = fiche.fiches.apprenants[this.params.apprenant].nom + ' ' + fiche.fiches.apprenants[this.params.apprenant].prenom
        this.form.jour = fiche.fiches.semaine[this.params.jour]
        this.form.creneau = this.params.creneau
        this.ctrTime()
      } catch (e) {
        this.$toast.error('Erreur !')
      }
      this.onLoad = false
    },
    getParams () {
      const queryString = window.location.search
      const urlParams = new URLSearchParams(queryString)
      this.params.fiche = urlParams.get('id')
      this.params.apprenant = urlParams.get('aprenant')
      this.params.jour = urlParams.get('jour')
      this.params.creneau = urlParams.get('creneau')
    },
    onReset () {
      if (this.$refs.canvas) {
        this.$refs.canvas.clear()
      }
    },
    async onSubmit (evt) {
      evt.preventDefault()
      let indexSignature
      switch (this.params.jour) {
        case '0':
          console.log('test :', this.params.creneau)
          if (this.params.creneau === 'matin') {
            indexSignature = 0
          } else {
            indexSignature = 1
          }
          break
        case '1':
          if (this.params.creneau === 'matin') {
            indexSignature = 2
          } else {
            indexSignature = 3
          }
          break
        case '2':
          if (this.params.creneau === 'matin') {
            indexSignature = 4
          } else {
            indexSignature = 5
          }
          break
        case '3':
          if (this.params.creneau === 'matin') {
            indexSignature = 6
          } else {
            indexSignature = 7
          }
          break
        case '4':
          if (this.params.creneau === 'matin') {
            indexSignature = 8
          } else {
            indexSignature = 9
          }
          break
      }
      const data = {
        id: this.params.fiche,
        apprenant: this.params.apprenant,
        index: indexSignature,
        signature: this.signature
      }
      try {
        const Signature = await this.$axios.$put('http://localhost:3030/signature', data)
        this.$toast.success(Signature.message)
      } catch (e) {
        this.$toast.error('Erreur !')
      }
    },
    ctrTime () {
      const arrayJour = this.form.jour.split('/').reverse()
      const stringJour = arrayJour.join('-')
      const creneau = this.params.creneau
      let heure
      if (creneau === 'matin') {
        heure = 'T08:00:00'
      } else {
        heure = 'T13:00:00'
      }
      const dateEmargment = this.$moment(stringJour + heure)
      const here = this.$moment()
      const limit = this.$moment(dateEmargment).add('minute', 10)
      if (here > limit) {
        this.$toast.error('Date d\'émargement dépasser !')
      } else if (here < dateEmargment) {
        this.$toast.error('Date d\'émargement à venir !')
      } else {
        this.$toast.success('Veuillez signer au plus vite !')
      }
    }

  }
}
</script>
