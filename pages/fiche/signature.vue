<template>
  <div>
    <Title titre="Signature" />
    <b-overlay :show="onLoad" rounded="sm">
      <div class="row">
        <b-form @submit="onSubmit" @reset="onReset">
          <b-form-group
            id="select-group-fiche"
            label="Feuille de presence:"
            label-for="select-fiche"
          >
            <b-form-select id="select-fiche" v-model="form.fiche.selected" :options="form.fiche.options" @change="options()" />
          </b-form-group>
          <b-form-group
            v-if="form.fiche.selected != null"
            id="select-group-apprenant"
            label="Apprenant :"
            label-for="select-apprenant"
          >
            <b-form-select id="select-apprenant" v-model="form.apprenant.selected" :options="form.apprenant.options" />
          </b-form-group>

          <b-form-group
            v-if="form.apprenant.selected != null"
            id="select-group-jour"
            label="Jour :"
            label-for="select-jour"
          >
            <b-form-select id="select-jour" v-model="form.jour.selected" :options="form.jour.options" />
          </b-form-group>

          <b-form-group
            v-if="form.jour.selected != null"
            id="select-group-creneau"
            label="Créneau :"
            label-for="select-creneau"
          >
            <b-form-select id="select-creneau" v-model="form.creneau.selected" :options="form.creneau.options" />
          </b-form-group>
          <b-form-group
            v-if="form.creneau.selected != null"
            id="canvas-group-signature"
            label="Signature :"
          />
          <Canvas v-if="form.creneau.selected != null" ref="canvas" :effacer="reset" @signature="signature = $event" />

          <b-button type="submit" variant="primary">
            Submit
          </b-button>
          <b-button type="reset" variant="danger">
            Reset
          </b-button>
        </b-form>
      </div>
    </b-overlay>
  </div>
</template>

<script>
import axios from 'axios'
import Title from '~/components/Title'
import Canvas from '~/components/Canvas'

export default {
  components: {
    Title,
    Canvas
  },
  data () {
    return {
      fiches: Array,
      onLoad: false,
      signature: '',
      reset: false,
      form: {
        fiche: {
          selected: null,
          options: []
        },
        apprenant: {
          selected: null,
          options: []
        },
        jour: {
          selected: null,
          options: []
        },
        creneau: {
          selected: null,
          options: [
            { value: null, text: 'Selectionner un créneau' },
            { value: 'matin', text: 'Matin' },
            { value: 'apres', text: 'Aprés-Midi' }
          ]
        }
      }
    }
  },
  computed: {
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
          this.form.fiche.options = this.optionsFiche(response.data.fiches)
          console.log(this.form.fiche.options)
        }).catch((e) => {
          this.$toast.error('Erreur !')
        })
      this.onLoad = false
    },
    optionsFiche (data) {
      const result = [{ value: null, text: 'Selectionner une feuille' }]
      data.forEach((element, index) => {
        const Text = element.semaine[0] + ' ' + element.section.intitule
        result.push({ value: index, text: Text })
      })
      return result
    },
    chargement () {
      this.onLoad = true
    },
    options () {
      const optionsapp = [{ value: null, text: 'Selectionner un apprenant' }]
      const optionsjour = [{ value: null, text: 'Selectionner un jour' }]
      const ficheindex = this.form.fiche.selected
      if (this.fiches) {
        this.fiches[ficheindex].apprenants.forEach((element, index) => {
          optionsapp.push({ value: index, text: element.nom + ' ' + element.prenom })
        })
        this.fiches[ficheindex].semaine.forEach((element, index) => {
          optionsjour.push({ value: index, text: element })
        })
      }
      this.form.apprenant.options = optionsapp
      this.form.jour.options = optionsjour
    },
    // eslint-disable-next-line require-await
    async onSubmit (evt) {
      evt.preventDefault()
      switch (this.form.jour.selected) {
        case 0:
          if (this.form.creneau.selected === 'matin') {
            this.fiches[this.form.fiche.selected].apprenants[this.form.apprenant.selected].signatures[0].signature = this.signature
          } else {
            this.fiches[this.form.fiche.selected].apprenants[this.form.apprenant.selected].signatures[1].signature = this.signature
          }
          break
        case 1:
          if (this.form.creneau.selected === 'matin') {
            this.fiches[this.form.fiche.selected].apprenants[this.form.apprenant.selected].signatures[2].signature = this.signature
          } else {
            this.fiches[this.form.fiche.selected].apprenants[this.form.apprenant.selected].signatures[3].signature = this.signature
          }
          break
        case 2:
          if (this.form.creneau.selected === 'matin') {
            this.fiches[this.form.fiche.selected].apprenants[this.form.apprenant.selected].signatures[4].signature = this.signature
          } else {
            this.fiches[this.form.fiche.selected].apprenants[this.form.apprenant.selected].signatures[5].signature = this.signature
          }
          break
        case 3:
          if (this.form.creneau.selected === 'matin') {
            this.fiches[this.form.fiche.selected].apprenants[this.form.apprenant.selected].signatures[6].signature = this.signature
          } else {
            this.fiches[this.form.fiche.selected].apprenants[this.form.apprenant.selected].signatures[7].signature = this.signature
          }
          break
        case 4:
          if (this.form.creneau.selected === 'matin') {
            this.fiches[this.form.fiche.selected].apprenants[this.form.apprenant.selected].signatures[8].signature = this.signature
          } else {
            this.fiches[this.form.fiche.selected].apprenants[this.form.apprenant.selected].signatures[9].signature = this.signature
          }
          break
      }
      const data = {
        id: this.fiches[this.form.fiche.selected]._id,
        apprenants: this.fiches[this.form.fiche.selected].apprenants
      }
      try {
        // eslint-disable-next-line no-unused-vars
        const Signature = await this.$axios.$put('http://localhost:3030/signature', data)
        this.$toast.success('Signé !')
        this.onReset()
      } catch (e) {
        this.$toast.error('Erreur !')
      }
    },
    onReset () {
      this.form.fiche.selected = null
      this.form.apprenant.selected = null
      this.form.jour.selected = null
      this.form.creneau.selected = null
      if (this.$refs.canvas) {
        this.$refs.canvas.clear()
      }
    }

  }
}
</script>
