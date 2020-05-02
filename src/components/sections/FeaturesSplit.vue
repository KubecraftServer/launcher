<template>
    <section
        class="features-split section"
        :class="[
            topOuterDivider && 'has-top-divider',
            bottomOuterDivider && 'has-bottom-divider',
            hasBgColor && 'has-bg-color',
            invertColor && 'invert-color'
        ]">
        <div class="container">
            <div
                class="features-split-inner section-inner"
                :class="[
                    topDivider && 'has-top-divider',
                    bottomDivider && 'has-bottom-divider'
                ]">
                <c-section-header :data="sectionHeader" class="center-content" />
                <div
                    class="split-wrap"
                    :class="[
                        invertMobile && 'invert-mobile',
                        invertDesktop && 'invert-desktop',
                        alignTop && 'align-top'
                    ]">
                    <div class="split-item">
                        <div class="split-item-content center-content-mobile reveal-from-left" data-reveal-container=".split-item">
                            <h3 class="mt-0 mb-12">
                                Elements Management
                            </h3>
                            <p class="m-0">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua — Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                            </p>
                        </div>
                        <div
                            class="split-item-image reveal-from-bottom" data-reveal-container=".split-item"
                            :class="imageFill && 'split-item-image-fill'">
                            <c-image
                                class="has-shadow"
                                :src="require('@/assets/images/features-split-image-01.png')"
                                alt="Features split image 01"
                                :width="528"
                                :height="396" />
                        </div>
                    </div>

                    <div class="split-item">
                        <div class="split-item-content center-content-mobile reveal-from-right" data-reveal-container=".split-item">
                            <h3 class="mt-0 mb-12">
                                Elements Management
                            </h3>
                            <p class="m-0">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua — Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                            </p>
                        </div>
                        <div
                            class="split-item-image reveal-from-bottom" data-reveal-container=".split-item"
                            :class="imageFill && 'split-item-image-fill'">
                            <c-image
                                class="has-shadow"
                                :src="require('@/assets/images/features-split-image-02.png')"
                                alt="Features split image 02"
                                :width="528"
                                :height="396" />
                        </div>
                    </div>

                    <div class="split-item">
                        <div class="split-item-content center-content-mobile reveal-from-left" data-reveal-container=".split-item">
                            <h3 class="mt-0 mb-12">
                                Elements Management
                            </h3>
                            <p class="m-0">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua — Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                            </p>
                        </div>
                        <div
                            class="split-item-image reveal-from-bottom" data-reveal-container=".split-item"
                            :class="imageFill && 'split-item-image-fill'">
                            <c-image
                                class="has-shadow"
                                :src="require('@/assets/images/features-split-image-03.png')"
                                alt="Features split image 03"
                                :width="528"
                                :height="396" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import { SectionSplitProps } from '@/utils/SectionProps.js'
import CSectionHeader from '@/components/sections/partials/SectionHeader.vue'
import CImage from '@/components/elements/Image.vue'

export default {
  name: 'CFeaturesSplit',
  components: {
    CSectionHeader,
    CImage
  },
  mixins: [SectionSplitProps],
  data() {
    return {
      sectionHeader: {
        title: 'Built for your workflow',
        paragraph: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur excepteur sint — occaecat cupidatat non proident, sunt in culpa qui.'
      }
    }
  }
}
</script>