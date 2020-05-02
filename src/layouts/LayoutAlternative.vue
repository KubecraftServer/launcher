<template>
    <fragment>
        <c-header nav-position="right" />
        <main class="site-content">
            <slot />
        </main>
        <c-footer />
    </fragment>
</template>

<script>
import CHeader from '@/components/layout/Header.vue'
import CFooter from '@/components/layout/Footer.vue'
export default {
  components: {
    CHeader,
    CFooter
  }
}
</script>