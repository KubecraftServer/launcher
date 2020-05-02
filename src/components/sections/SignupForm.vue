<template>
    <section
        class="signin section"
        :class="[
            topOuterDivider && 'has-top-divider',
            bottomOuterDivider && 'has-bottom-divider',
            hasBgColor && 'has-bg-color',
            invertColor && 'invert-color'
        ]">
        <div class="container">
            <div
                class="signin-inner section-inner"
                :class="[
                    topDivider && 'has-top-divider',
                    bottomDivider && 'has-bottom-divider'
                ]">
                <c-section-header tag="h1" :data="sectionHeader" class="center-content" />
                <div class="tiles-wrap">
                    <div class="tiles-item">
                        <div class="tiles-item-inner">
                            <form>
                                <fieldset>
                                    <div class="mb-12">
                                        <c-input
                                            label="Full name"
                                            placeholder="Full name"
                                            label-hidden
                                            required />
                                    </div>
                                    <div class="mb-12">
                                        <c-input
                                            type="email"
                                            label="Email"
                                            placeholder="Email"
                                            label-hidden
                                            required />
                                    </div>
                                    <div class="mb-12">
                                        <c-input
                                            type="password"
                                            label="Password"
                                            placeholder="Password"
                                            label-hidden
                                            required />
                                    </div>
                                    <div class="mt-24 mb-32">
                                        <c-button color="primary" wide>Sign up</c-button>
                                    </div>
                                </fieldset>
                            </form>
                            <div class="signin-bottom has-top-divider">
                                <div class="pt-32 text-xs center-content text-color-low">
                                    Already have an account? <router-link to="/login/" class="func-link">Login</router-link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import { SectionProps } from '@/utils/SectionProps.js'
import CSectionHeader from '@/components/sections/partials/SectionHeader.vue'
import CInput from '@/components/elements/Input.vue'
import CButton from '@/components/elements/Button.vue'

export default {
  name: 'CSignupForm',
  components: {
    CSectionHeader,
    CInput,
    CButton
  },
  mixins: [SectionProps],
  data() {
    return {
      sectionHeader: {
        title: 'Welcome. We exist to make entrepreneurship easier.'
      }
    }
  }
}
</script>