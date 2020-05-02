<template>
    <footer class="site-footer center-content-mobile" :class="topOuterDivider && 'has-top-divider'">
        <div class="container">
            <div class="site-footer-inner" :class="topDivider && 'has-top-divider'">
                <div class="footer-top space-between text-xxs">
                    <c-logo />
<!--                    <c-footer-social />-->
                </div>
                <div class="footer-bottom space-between text-xxs invert-order-desktop">
                    <c-footer-nav />
                    <div class="footer-copyright">&copy; 2020 <a href="https://0x77.page">Mikhail Marynenko</a> and <a href="https://github.com/orgs/kubecraftserver/people">Kubecraft Team</a>, all rights reserved</div>
                </div>

            </div>
        </div>
    </footer>
</template>

<script>
import CLogo from '@/components/layout/partials/Logo.vue'
import CFooterNav from '@/components/layout/partials/FooterNav.vue'
// import CFooterSocial from '@/components/layout/partials/FooterSocial.vue'

export default {
  name: 'CFooter',
  components: {
    CLogo,
    CFooterNav,
    // CFooterSocial
  },
  props: {
    topOuterDivider: {
      type: Boolean,
      default: false
    },      
    topDivider: {
      type: Boolean,
      default: false
    }
  }
}
</script>