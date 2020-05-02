<template>
    <section
        class="hero section center-content"
        :class="[
            topOuterDivider && 'has-top-divider',
            bottomOuterDivider && 'has-bottom-divider',
            hasBgColor && 'has-bg-color',
            invertColor && 'invert-color'
        ]">
        <div class="container-sm">
            <div
                class="hero-inner section-inner"
                :class="[
                    topDivider && 'has-top-divider',
                    bottomDivider && 'has-bottom-divider'
                ]">
                <div class="hero-content">
                    <h1 class="mt-0 mb-16 reveal-from-bottom" data-reveal-delay="200">
                        Kubecraft
                    </h1>
                    <div class="container-xs">
                        <p class="m-0 mb-32 reveal-from-bottom" data-reveal-delay="400">
                            Yet another Minecraft Server, but fully open source 🥳!
                        </p>
                        <div class="reveal-from-bottom" data-reveal-delay="600">
                            <c-button tag="a" color="primary" wide-mobile href="#cta">
                                Start Playing Right Now
                            </c-button>
                        </div>
                    </div>
                </div>
                <div class="hero-figure reveal-from-bottom illustration-element-01" data-reveal-value="20px" data-reveal-delay="800">
                    <c-image
                        class="has-shadow"
                        src="https://store-images.s-microsoft.com/image/apps.14.14114766795216147.2000000000007965473.ede3719a-3d90-4149-b100-e7243511ed01?mode=scale&q=90&h=1080&w=1920&background=%23FFFFFF"
                        alt="Minecraft"
                        :width="896"
                        :height="504" />
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import { SectionProps } from '@/utils/SectionProps.js'
import CButton from '@/components/elements/Button.vue'
import CImage from '@/components/elements/Image.vue'

export default {
  name: 'CHeroFull',
  mixins: [SectionProps],
  components: {
    CButton,
    CImage
  }
}
</script>