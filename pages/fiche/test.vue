<template>
  <div>
    <Title titre="Qrcode" />
    <qrcode :background="background" :size="size" :cls="qrCls" :value="qrText" />
    <div>
      <p>Lien :</p>
      <nuxt-link :to="link">
        Signe
      </nuxt-link>
    </div>
  </div>
</template>

<script>
import Qrcode from 'v-qrcode/src/index'
import Title from '~/components/Title'

export default {
  components: {
    Title,
    Qrcode
  },
  data () {
    return {
      fiches: Array,
      qrCls: 'qrcode',
      qrText: 'Read VueJS Feed daily',
      size: 300,
      background: 'white',
      urlParams: Object,
      link: ''

    }
  },
  computed: {
  },
  mounted () {
    const queryString = window.location.search
    const site = window.location.protocol + '//' + window.location.host
    console.log(queryString)
    this.link = 'signe' + queryString
    this.qrText = site + '/' + queryString
  }
}
</script>
