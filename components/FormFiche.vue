<template>
  <table class="table">
    <tbody>
      <tr>
        <td colspan="2" />
        <td v-for="element in fiche.semaine" :key="element.index" colspan="2">
          Le {{ element }}
        </td>
      </tr>
      <tr v-for="element in fiche.apprenants" :key="element.index">
        <td>
          {{ element.nom }}
        </td>
        <td>
          {{ element.prenom }}
        </td>
      </tr>
      <tr>
        <td colspan="2" />
        <td v-for="element in fiche.formateurs" :key="element.index" colspan="2">
          {{ element }}
        </td>
      </tr>
    </tbody>
  </table>
  </div>
</template>

<script>
export default {
  name: 'FormFiche',
  props: {
    fiche: Object
  },
  data () {
    return {
      form: {
      },
      items: Array
    }
  }
}
</script>
