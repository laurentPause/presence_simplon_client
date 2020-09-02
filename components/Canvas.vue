<template>
  <div>
    <canvas
      id="canvas"
      width="800"
      height="300"
      @mousedown="startPainting"
      @mouseup="finishedPainting"
      @mousemove="draw"
    />
  </div>
</template>

<script>
export default {
  name: 'Canvas',
  props: {
    effacer: Boolean
  },
  data () {
    return {
      vueCanvas: null,
      painting: false,
      canvas: null,
      ctx: null
    }
  },
  mounted () {
    this.canvas = document.getElementById('canvas')
    this.ctx = this.canvas.getContext('2d')
    if (this.effacer) {
      this.clear()
    }
    // Resize canvas
    // this.canvas.height = window.innerHeight
    // this.canvas.width = window.innerWidth
  },
  methods: {
    startPainting (e) {
      this.painting = true
      console.log(this.painting)
      this.draw(e)
    },
    finishedPainting () {
      this.painting = false
      console.log(this.painting)
      this.ctx.beginPath()
      this.$emit('signature', this.canvas.toDataURL())
    },
    draw (e) {
      if (!this.painting) { return }
      this.ctx.lineWidth = 5
      this.ctx.lineCap = 'round'

      this.ctx.lineTo(e.clientX - 270, e.clientY - 100)
      console.log(e.clientY)
      this.ctx.stroke()

      this.ctx.beginPath()
      this.ctx.moveTo(e.clientX - 270, e.clientY - 100)

      this.canvas.isDrawingMode = false
    },
    clear () {
      this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)
    }
  }
}
</script>

<style scoped>
    #canvas {
    border: 1px solid black;
    padding: 0px !important;
    margin: 0px !important;
}
</style>
