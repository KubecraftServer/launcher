<template>
    <label class="form-switch">
        <input
            type="checkbox"
            v-model="computedValue"
            :name="name"
            :disabled="disabled"
            :required="required"
            :value="value"
            :true-value="trueValue"
            :false-value="falseValue"
            @click.stop />
        <span class="form-switch-icon"></span>
        <span>
            <slot />
        </span>
        <span v-if="rightLabel">
            {{rightLabel}}
        </span>
    </label>
</template>

<script>
export default {
  name: 'CSwitch',
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
      default: undefined
    },
    rightLabel: [String, Number, Boolean, Array],
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
