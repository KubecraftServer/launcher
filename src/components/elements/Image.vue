<template>
    <img
        :src="src"
        :alt="alt"
        :style="circular ? 'border-radius: 50% 50%;' : ''"
        :width="width"
        :height="height" />
</template>

<script>
export default {
  name: 'CImage',
  props: {
    src: {
      type: String,
      default: null,
      required: true
    },
    circular: {
      type: Boolean,
      default: false,
      required: false
    },
    width: {
      type: Number,
      default: null
    },
    height: {
      type: Number,
      default: null
    },
    alt: {
      type: String,
      default: null
    }
  },
  data() {
    return {
      isLoaded: false
    }
  },
  methods: {
    placeholderSrc(w, h) {
      return `data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${w} ${h}"%3E%3C/svg%3E`
    },
    handlePlaceholder(img, placeholder) {
      img.style.display = 'none'
      img.before(placeholder)
      placeholder.src = this.placeholderSrc(
        img.getAttribute('width') || 0,
        img.getAttribute('height') || 0
      )
      placeholder.width = img.getAttribute('width')
      placeholder.height = img.getAttribute('height')
      placeholder.style.opacity = '0'
      img.className && placeholder.classList.add(img.className)

      img.addEventListener('load', () => {
        placeholder.remove()
        img.style.display = ''
        this.isLoaded = true
      })
    }
  },
  mounted() {
    const placeholderImage = document.createElement('img')
    this.handlePlaceholder(this.$el, placeholderImage)
  }
}
</script>
