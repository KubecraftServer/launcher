<template>
    <section
        class="news section"
        :class="[
            topOuterDivider && 'has-top-divider',
            bottomOuterDivider && 'has-bottom-divider',
            hasBgColor && 'has-bg-color',
            invertColor && 'invert-color'
        ]">
        <div class="container">
            <div
                class="news-inner section-inner"
                :class="[
                    topDivider && 'has-top-divider',
                    bottomDivider && 'has-bottom-divider'
                ]">
                <c-section-header :data="sectionHeader" class="center-content reveal-from-bottom" />
                <div
                    class="tiles-wrap"
                    :class="[
                        pushLeft && 'push-left',
                    ]">
                    <div class="tiles-item reveal-from-bottom">
                        <div class="tiles-item-inner has-shadow">
                            <figure class="news-item-image m-0">
                                <c-image
                                    :src="require('@/assets/images/news-image-01.jpg')"
                                    alt="News 01"
                                    :width="344"
                                    :height="194" />
                            </figure>
                            <div class="news-item-content">
                                <div class="news-item-body">
                                    <h3 class="news-item-title h4 mt-0 mb-8">
                                        <a href="#">How to build anything</a>
                                    </h3>
                                    <p class="mb-16 text-sm">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex.
                                    </p>
                                </div>
                                <div class="news-item-more text-xs mb-8">
                                    <a href="#">Read more</a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="tiles-item reveal-from-bottom" data-reveal-delay="200">
                        <div class="tiles-item-inner has-shadow">
                            <figure class="news-item-image m-0">
                                <c-image
                                    :src="require('@/assets/images/news-image-02.jpg')"
                                    alt="News 02"
                                    :width="344"
                                    :height="194" />
                            </figure>
                            <div class="news-item-content">
                                <div class="news-item-body">
                                    <h3 class="news-item-title h4 mt-0 mb-8">
                                        <a href="#">How to build anything</a>
                                    </h3>
                                    <p class="mb-16 text-sm">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex.
                                    </p>
                                </div>
                                <div class="news-item-more text-xs mb-8">
                                    <a href="#">Read more</a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="tiles-item reveal-from-bottom" data-reveal-delay="400">
                        <div class="tiles-item-inner has-shadow">
                            <figure class="news-item-image m-0">
                                <c-image
                                    :src="require('@/assets/images/news-image-03.jpg')"
                                    alt="News 03"
                                    :width="344"
                                    :height="194" />
                            </figure>
                            <div class="news-item-content">
                                <div class="news-item-body">
                                    <h3 class="news-item-title h4 mt-0 mb-8">
                                        <a href="#">How to build anything</a>
                                    </h3>
                                    <p class="mb-16 text-sm">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex.
                                    </p>
                                </div>
                                <div class="news-item-more text-xs mb-8">
                                    <a href="#">Read more</a>
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
import { SectionTilesProps } from '@/utils/SectionProps.js'
import CSectionHeader from '@/components/sections/partials/SectionHeader.vue'
import CImage from '@/components/elements/Image.vue'

export default {
  name: 'CNews',
  components: {
    CSectionHeader,
    CImage
  },
  mixins: [SectionTilesProps],
  data() {
    return {
      sectionHeader: {
        title: 'Product news and updates',
        paragraph:
          'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum consequat.'
      }
    }
  }
}
</script>
