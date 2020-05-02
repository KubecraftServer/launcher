<template>
    <component
        :is="tag"
        class="button"
        :class="[
            color && `button-${color}`,
            size && `button-${size}`,
            loading && 'is-loading',
            wide && 'button-block',
            wideMobile && 'button-wide-mobile'
        ]"
        :disabled="disabled"
        @click="handleClick">
        <slot />
    </component>
</template>

<script>
export default {
  name: 'CButton',
  props: {
    tag: {
      type: String,
      default: 'button',
      validator: value => {
        return ['button', 'a', 'input', 'router-link'].indexOf(value) >= 0
      }
    },
    color: {
      type: String,
      default: ''
    },
    size: {
      type: String,
      default: ''
    },
    loading: {
      type: Boolean,
      default: false
    },
    wide: {
      type: Boolean,
      default: false
    },
    wideMobile: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    handleClick(e) {
      this.$emit('click', e)
    }
  }
}
</script>
