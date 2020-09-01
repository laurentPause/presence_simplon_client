<template>
  <div>
    <Title titre="Signature" />
    <b-overlay :show="onLoad" rounded="sm">
      <div class="row">
        <b-form>
          <b-form-group
            id="select-group-fiche"
            label="Feuille de presence:"
            label-for="select-fiche"
          >
            <b-form-select id="select-fiche" v-model="form.fiche.selected" :options="form.fiche.options" @change="options()" />
          </b-form-group>
          <b-form-group
            v-if="form.fiche.selected"
            id="select-group-apprenant"
            label="Apprenant :"
            label-for="select-apprenant"
          >
            <b-form-select id="select-apprenant" v-model="form.apprenant.selected" :options="form.apprenant.options" />
          </b-form-group>

          <b-form-group
            v-if="form.apprenant.selected"
            id="select-group-jour"
            label="Jour :"
            label-for="select-jour"
          >
            <b-form-select id="select-jour" v-model="form.jour.selected" :options="form.jour.options" />
          </b-form-group>

          <b-form-group
            v-if="form.jour.selected"
            id="select-group-creneau"
            label="Créneau :"
            label-for="select-creneau"
          >
            <b-form-select id="select-creneau" v-model="form.creneau.selected" :options="form.creneau.options" />
          </b-form-group>

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

export default {
  components: {
    Title
  },
  data () {
    return {
      fiches: Array,
      onLoad: false,
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
      data.forEach((element) => {
        const Value = element._id
        const Text = element.semaine[0] + ' ' + element.section.intitule
        result.push({ value: Value, text: Text })
      })
      return result
    },
    chargement () {
      this.onLoad = true
    },
    options () {
      const optionsapp = [{ value: null, text: 'Selectionner un apprenant' }]
      const optionsjour = [{ value: null, text: 'Selectionner un jour' }]
      if (this.fiches) {
        this.fiches.forEach((fiche) => {
          if (fiche._id === this.form.fiche.selected) {
            fiche.apprenants.forEach((element) => {
              optionsapp.push({ value: element, text: element.nom + ' ' + element.prenom })
            })
            fiche.semaine.forEach((element) => {
              optionsjour.push({ value: element, text: element })
            })
          }
        })
      }
      this.form.apprenant.options = optionsapp
      this.form.jour.options = optionsjour
    }
  }
}
</script>
