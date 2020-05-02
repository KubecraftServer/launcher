<template>
    <div
        v-if="isActive"
        class="modal is-active"
        :class="{ 'modal-video': video }"
        @click="closeModal">
        <div class="modal-inner" @click.stop>
            <div v-if="video" class="responsive-video">
                <iframe
                    v-if="videoTag === 'iframe'"
                    :src="video"
                    frameborder="0"
                    webkitAllowFullScreen
                    mozallowfullscreen
                    allowfullscreen></iframe>
                <video v-else controls :src="video"></video>
            </div>
            <fragment v-else>
                <button
                    v-if="!closeHidden"
                    class="modal-close"
                    aria-label="close"
                    @click="closeModal"></button>
                <div class="modal-content">
                    <slot />
                </div>
            </fragment>
        </div>
    </div>
</template>

<script>
export default {
  name: 'CModal',
  props: {
    active: Boolean,
    closeHidden: {
      type: Boolean,
      default: false
    },
    video: {
      type: String,
      default: ''
    },
    videoTag: {
      type: String,
      default: 'iframe',
      validator: value => {
        return ['iframe', 'video'].indexOf(value) >= 0
      }
    }
  },
  data() {
    return {
      isActive: this.active || false
    }
  },
  watch: {
    active(value) {
      this.isActive = value
    },
    isActive() {
      this.isActive && this.openModal()
    }
  },
  methods: {
    openModal() {
      document.body.classList.add('modal-is-active')
    },
    closeModal() {
      document.body.classList.remove('modal-is-active')
      this.$emit('close')
      this.$emit('update:active', false)
      this.isActive = false
    },
    keyPress() {
      this.isActive && event.keyCode === 27 && this.closeModal()
    }
  },
  created() {
    document.addEventListener('keydown', this.keyPress)
  },
  beforeDestroy() {
    document.removeEventListener('keydown', this.keyPress)
    this.closeModal()
  }
}
</script>
