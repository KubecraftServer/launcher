<template>
    <fragment>
        <c-label v-if="label" :label="label" :id="id" :labelHidden="labelHidden"></c-label>
        <select
            class="form-select"
            v-model="computedValue"
            :id="id"
            :class="[
                size && `form-select-${size}`,
                status && `form-${status}`
            ]"
            :name="name"
            :disabled="disabled"
            :required="required"
            @blur="$emit('blur', $event)"
            @focus="$emit('focus', $event)">
            <option v-if="placeholder" hidden value="">{{ placeholder }}</option>
            <slot />
        </select>
        <c-hint v-if="hint" :status="status" :hint="hint"></c-hint>
    </fragment>
</template>

<script>
import CLabel from '@/components/elements/FormLabel.vue'
import CHint from '@/components/elements/FormHint.vue'

export default {
  name: 'CSelect',
  components: {
    CLabel,
    CHint
  },
  props: {
    label: {
      type: String,
      default: ''
    },
    labelHidden: {
      type: Boolean,
      default: false
    },
    name: String,
    id: {
      type: String,
      default: null
    },
    status: {
      type: String,
      default: ''
    },
    disabled: {
      type: Boolean,
      default: false
    },
    required: {
      type: Boolean,
      default: false
    },
    value: {
      type: [String, Number, Array],
      default: ''
    },
    size: {
      type: String,
      default: ''
    },
    placeholder: {
      type: String,
      default: ''
    },
    hint: {
      type: String,
      default: null
    }
  },
  data() {
    return {
      selected: this.value
    }
  },
  computed: {
    computedValue: {
      get() {
        return this.selected
      },
      set(value) {
        this.selected = value
        this.$emit('input', value)
      }
    }
  },
  watch: {
    value(value) {
      this.selected = value
    }
  }
}
</script>
