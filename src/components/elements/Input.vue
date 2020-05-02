<template>
    <fragment>
        <c-label v-if="label" :label="label" :id="id" :labelHidden="labelHidden"></c-label>
        <div :class="wrapperClasses">
            <input
                v-if="type !== 'textarea'"
                v-model="computedValue"
                class="form-input"
                :name="name"
                :id="id"
                :class="[
					size && `form-input-${size}`,
					status && `form-${status}`
				]"
                :type="type"
                :disabled="disabled"
                :required="required"
                :placeholder="placeholder"
                @input="onInput"
                @blur="onBlur"
                @focus="onFocus" />
            <textarea
                v-else
                v-model="computedValue"
                class="form-input"
                :name="name"
                :id="id"
                :class="[
					size && `form-select-${size}`,
					type && `form-${type}`
				]"
                :disabled="disabled"
                :required="required"
                :placeholder="placeholder"
                :rows="rows"
                @input="onInput"
                @blur="onBlur"
                @focus="onFocus"></textarea>
            <slot />
        </div>
        <c-hint v-if="hint" :status="status" :hint="hint"></c-hint>
    </fragment>
</template>

<script>
import CLabel from '@/components/elements/FormLabel.vue'
import CHint from '@/components/elements/FormHint.vue'

export default {
  name: 'CInput',
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
    type: {
      type: String,
      default: 'text'
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
      type: [String, Number],
      default: ''
    },
    formGroup: {
      type: String,
      default: null
    },
    hasIcon: {
      type: String,
      default: null
    },
    size: {
      type: String,
      default: ''
    },
    placeholder: {
      type: String,
      default: ''
    },
    rows: {
      type: Number,
      default: 3
    },
    hint: {
      type: String,
      default: null
    }
  },
  data() {
    return {
      isFocused: false,
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
    },
    wrapperClasses() {
      return [
        this.formGroup &&
          this.formGroup !== '' &&
          (this.formGroup === 'desktop' ? 'form-group-desktop' : 'form-group'),
        this.hasIcon && this.hasIcon !== '' && 'has-icon-' + this.hasIcon
      ]
    }
  },
  methods: {
    onInput(e) {
      this.$nextTick(() => {
        if (e.target) {
          this.computedValue = e.target.value
        }
      })
    },
    onBlur(e) {
      this.isFocused = false
      this.$emit('blur', e)
    },
    onFocus(e) {
      this.isFocused = true
      this.$emit('focus', e)
    }
  },
  watch: {
    value(value) {
      this.currentValue = value
    }
  }
}
</script>
