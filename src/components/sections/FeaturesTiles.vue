<template>
    <section
        class="features-tiles section"
        :class="[
            topOuterDivider && 'has-top-divider',
            bottomOuterDivider && 'has-bottom-divider',
            hasBgColor && 'has-bg-color',
            invertColor && 'invert-color'
        ]">
        <div class="container">
            <div
                class="features-tiles-inner section-inner"
                :class="[
                    topDivider && 'has-top-divider',
                    bottomDivider && 'has-bottom-divider'
                ]">
                <c-section-header :data="sectionHeader" class="center-content" />
                <div
                    class="tiles-wrap"
                    :class="[
                        pushLeft && 'push-left',
                    ]">
                    <div class="tiles-item reveal-from-bottom">
                        <div class="tiles-item-inner">
                            <div class="features-tiles-item-header">
                                <div class="features-tiles-item-image mb-16">
                                    <c-image
                                        :src="require('@/assets/images/feature-tile-icon-01.svg')"
                                        :width="64"
                                        :height="64" />
                                </div>
                            </div>
                            <div class="features-tiles-item-content">
                                <h4 class="mt-0 mb-8">
                                    Stable
                                </h4>
                                <p class="m-0 text-sm">
                                    Stable connection, and minimal ping.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div class="tiles-item reveal-from-bottom" data-reveal-delay="200">
                        <div class="tiles-item-inner">
                            <div class="features-tiles-item-header">
                                <div class="features-tiles-item-image mb-16">
                                    <c-image
                                        :src="require('@/assets/images/feature-tile-icon-02.svg')"
                                        :width="64"
                                        :height="64" />
                                </div>
                            </div>
                            <div class="features-tiles-item-content">
                                <h4 class="mt-0 mb-8">
                                    Free Creative
                                </h4>
                                <p class="m-0 text-sm">
                                    Absolute Free Creative mode.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div class="tiles-item reveal-from-bottom" data-reveal-delay="400">
                        <div class="tiles-item-inner">
                            <div class="features-tiles-item-header">
                                <div class="features-tiles-item-image mb-16">
                                    <c-image
                                        :src="require('@/assets/images/feature-tile-icon-03.svg')"
                                        :width="64"
                                        :height="64" />
                                </div>
                            </div>
                            <div class="features-tiles-item-content">
                                <h4 class="mt-0 mb-8">
                                    Free Administrator (OP) rank
                                </h4>
                                <p class="m-0 text-sm">
                                    Administrator Priveleges for Free to all of our users
                                </p>
                            </div>
                        </div>
                    </div>

                    <div class="tiles-item reveal-from-bottom">
                        <div class="tiles-item-inner">
                            <div class="features-tiles-item-header">
                                <div class="features-tiles-item-image mb-16">
                                    <c-image
                                        :src="require('@/assets/images/feature-tile-icon-04.svg')"
                                        :width="64"
                                        :height="64" />
                                </div>
                            </div>
                            <div class="features-tiles-item-content">
                                <h4 class="mt-0 mb-8">
                                    Multiverse
                                </h4>
                                <p class="m-0 text-sm">
                                    Freedom of your actions, create worlds, enjoy multi world experience!
                                </p>
                            </div>
                        </div>
                    </div>

                    <div class="tiles-item reveal-from-bottom" data-reveal-delay="200">
                        <a style="text-decoration: none" href="https://discord.gg/bK8s634" class="tiles-item-inner">
                            <div class="features-tiles-item-header">
                                <div class="features-tiles-item-image mb-16">
                                    <c-image
                                        :src="require('@/assets/images/feature-tile-icon-05.svg')"
                                        :width="64"
                                        :height="64" />
                                </div>
                            </div>
                            <div class="features-tiles-item-content">
                                <h4 class="mt-0 mb-8">
                                    Join the community
                                </h4>
                                <p class="m-0 text-sm">
                                    We have discord server.
                                </p>
                            </div>
                        </a>
                    </div>

                    <div class="tiles-item reveal-from-bottom" data-reveal-delay="400">
                        <div class="tiles-item-inner">
                            <div class="features-tiles-item-header">
                                <div class="features-tiles-item-image mb-16">
                                    <c-image
                                        :src="require('@/assets/images/feature-tile-icon-06.svg')"
                                        :width="64"
                                        :height="64" />
                                </div>
                            </div>
                            <div class="features-tiles-item-content">
                                <h4 class="mt-0 mb-8">
                                    Join the system
                                </h4>
                                <p class="m-0 text-sm">
                                    In future we will have API for developers.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import { SectionTilesProps } from '@/utils/SectionProps.js'
import CSectionHeader from '@/components/sections/partials/SectionHeader.vue'
import CImage from '@/components/elements/Image.vue'

export default {
  name: 'CFeaturesTiles',
  components: {
    CSectionHeader,
    CImage
  },
  mixins: [SectionTilesProps],
  data() {
    return {
      sectionHeader: {
        title: '',
        paragraph: ''
      }
    }
  }
}
</script>