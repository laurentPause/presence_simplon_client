<template>
  <div>
    <canvas id="canvas" @mousedown="startPainting" @mouseup="finishedPainting" @mousemove="draw" />
  </div>
</template>

<script>
export default {
  name: 'Canvas',
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
    // Resize canvas
    this.canvas.height = window.innerHeight
    this.canvas.width = window.innerWidth
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
    },
    draw (e) {
      if (!this.painting) { return }
      this.ctx.lineWidth = 10
      this.ctx.lineCap = 'round'

      this.ctx.lineTo(e.clientX, e.clientY)
      this.ctx.stroke()

      this.ctx.beginPath()
      this.ctx.moveTo(e.clientX, e.clientY)

      this.canvas.isDrawingMode = false
      alert(this.canvas.toSVG())
    }
  }
}
</script>

<style scoped>
    #canvas {
    border: 3px solid black;
    height: 100%;
    width: 100%
}
</style>
