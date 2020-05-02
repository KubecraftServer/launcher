<template>
    <div
        class="form-hint"
        :class="[
            status && `text-color-${status}`
        ]">{{hint}}</div>
</template>

<script>
export default {
  name: 'CHint',
  props: ['status', 'hint']
}
</script>
