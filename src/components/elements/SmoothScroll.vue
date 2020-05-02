<template>
    <a
        :href="`#${to}`"
        @click="smoothScroll">
        <slot />
    </a>
</template>

<script>
export default {
  name: 'CSmoothScroll',
  props: {
    to: {
      type: String,
      default: '',
      required: true
    },
    duration: {
      type: Number,
      default: 1000
    }
  },
  methods: {
    easeInOutQuad(t) {
      return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t
    },
    scrollToEl(
      startTime,
      currentTime,
      duration,
      scrollEndElemTop,
      startScrollOffset
    ) {
      const runtime = currentTime - startTime
      let progress = runtime / duration

      progress = Math.min(progress, 1)

      const ease = this.easeInOutQuad(progress)

      window.scroll(0, startScrollOffset + scrollEndElemTop * ease)
      if (runtime < duration) {
        window.requestAnimationFrame(timestamp => {
          const currentTime = timestamp || new Date().getTime()
          this.scrollToEl(
            startTime,
            currentTime,
            duration,
            scrollEndElemTop,
            startScrollOffset
          )
        })
      }
    },
    smoothScroll(e) {
      e.preventDefault()

      const targetId = this.to
      const target = document.getElementById(targetId)
      const duration = this.duration || 1000

      if (!target) return

      this.$emit('onLinkClick')

      window.requestAnimationFrame(timestamp => {
        const stamp = timestamp || new Date().getTime()
        const start = stamp

        const startScrollOffset = window.pageYOffset
        const scrollEndElemTop = target.getBoundingClientRect().top

        this.scrollToEl(
          start,
          stamp,
          duration,
          scrollEndElemTop,
          startScrollOffset
        )
      })
    }
  }
}
</script>
