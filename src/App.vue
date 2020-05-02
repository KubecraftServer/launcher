<template>
    <component :is="layout">
        <router-view :layout.sync="layout" />
    </component>
</template>

<script>
import { ScrollReveal } from '@/utils/ScrollReveal.js'

export default {
  name: 'App',
  mixins: [ScrollReveal],
  data() {
    return {
      layout: 'div'
    }
  },
  mounted() {
    document.body.classList.add('is-loaded')
  }
}
</script>
