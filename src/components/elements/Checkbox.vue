<template>
    <label class="form-checkbox">
        <input
            type="checkbox"
            v-model="computedValue"
            :name="name"
            :disabled="disabled"
            :required="required"
            :value="label"
            :true-value="trueValue"
            :false-value="falseValue"
            @click.stop />
        <slot />
    </label>
</template>

<script>
export default {
  name: 'CCheckbox',
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
    label: [String, Number, Boolean, Array],
    trueValue: {
      type: [String, Number, Boolean, Array],
      default: true
    },
    falseValue: {
      type: [String, Number, Boolean, Array],
      default: false
    }
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
