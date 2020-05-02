<template>
    <label class="form-radio">
        <input
            type="radio"
            v-model="computedValue"
            :name="name"
            :disabled="disabled"
            :required="required"
            :value="label"
            @click.stop />
        <slot />
    </label>
</template>

<script>
export default {
  name: 'CRadio',
  props: {
    type: String,
    name: String,
    disabled: {
      type: Boolean,
      default: false
    },
    required: {
      type: Boolean,
      default: false
    },
    value: {
      type: [String, Number, Boolean, Array],
      default: false
    },
    label: [String, Number, Boolean, Array]
  },
  data() {
    return {
      currentValue: this.value
    }
  },
  computed: {
    computedValue: {
      get() {
        return this.currentValue
      },
      set(value) {
        this.currentValue = value
        this.$emit('input', value)
      }
    }
  },
  watch: {
    value(value) {
      this.currentValue = value
    }
  }
}
</script>
