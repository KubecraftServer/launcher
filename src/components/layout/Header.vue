<template>
    <header class="site-header" :class="bottomOuterDivider && 'has-bottom-divider'">
        <div class="container">
            <div class="site-header-inner" :class="bottomDivider && 'has-bottom-divider'">
                <c-logo />
                Kubecraft Launcher Beta v0.1
<!--                <button-->
<!--                    v-if="!hideNav"-->
<!--                    ref="hamburger"-->
<!--                    class="header-nav-toggle"-->
<!--                    aria-controls="primary-menu"-->
<!--                    :aria-expanded="isActive ? 'true' : 'false'"-->
<!--                    @click="isActive ? closeMenu() : openMenu()">-->
<!--                    <span class="screen-reader">Menu</span>-->
<!--                    <span class="hamburger">-->
<!--                        <span class="hamburger-inner"></span>-->
<!--                    </span>-->
<!--                </button>-->
<!--                <nav-->
<!--                    v-if="!hideNav"-->
<!--                    ref="nav"-->
<!--                    class="header-nav"-->
<!--                    :class="{ 'is-active': isActive }">-->
<!--                    <div class="header-nav-inner">-->
<!--                        <ul-->
<!--                            class="list-reset text-xxs"-->
<!--                            :class="navPosition && `header-nav-${navPosition}`">-->
<!--                            <li>-->
<!--                                <router-link to="/secondary/">Secondary page</router-link>-->
<!--                            </li>-->
<!--                        </ul>-->
<!--                        <ul v-if="!hideSignin" class="list-reset header-nav-right">-->
<!--                            <li>-->
<!--                                <router-link to="/signup/" class="button button-primary button-wide-mobile button-sm">Sign up</router-link>-->
<!--                            </li>-->
<!--                        </ul>-->
<!--                    </div>-->
<!--                </nav>-->
            </div>
        </div>
    </header>
</template>

<script>
import CLogo from '@/components/layout/partials/Logo.vue'

export default {
  name: 'CHeader',
  components: {
    CLogo
  },
  props: {
    active: Boolean,
    navPosition: {
      type: String,
      default: ''
    },
    hideNav: {
      type: Boolean,
      default: false
    },
    hideSignin: {
      type: Boolean,
      default: false
    },
    bottomOuterDivider: {
      type: Boolean,
      default: false
    },    
    bottomDivider: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      isActive: this.active || false
    }
  },
  watch: {
    active(value) {
      this.isActive = value
    }
  },
  methods: {
    openMenu() {
      document.body.classList.add('off-nav-is-active')
      if (this.$refs.nav)
        this.$refs.nav.style.maxHeight = this.$refs.nav.scrollHeight + 'px'
      this.$emit('update:active', true)
      this.isActive = true
    },
    closeMenu() {
      document.body.classList.remove('off-nav-is-active')
      if (this.$refs.nav) this.$refs.nav.style.maxHeight = null
      this.$emit('close')
      this.$emit('update:active', false)
      this.isActive = false
    },
    keyPress() {
      this.isActive && event.keyCode === 27 && this.closeMenu()
    },
    clickOutside(e) {
      if (!this.$refs.nav) return
      if (
        !this.isActive ||
        this.$refs.nav.contains(e.target) ||
        e.target === this.$refs.hamburger
      )
        return
      this.closeMenu()
    }
  },
  mounted() {
    this.active && this.openMenu()
    document.addEventListener('keydown', this.keyPress)
    document.addEventListener('click', this.clickOutside)
  },
  beforeDestroy() {
    document.addEventListener('keydown', this.keyPress)
    document.removeEventListener('click', this.clickOutside)
    this.closeMenu()
  }
}
</script>