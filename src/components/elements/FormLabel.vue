<template>
    <label
        class="form-label"
        :class="[
            labelHidden && 'screen-reader'
        ]"
        :for="id">{{ label }}</label>
</template>

<script>
export default {
  name: 'CLabel',
  props: ['label', 'id', 'labelHidden']
}
</script>
