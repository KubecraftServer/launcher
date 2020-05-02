<template>
    <section
        class="team section center-content"
        :class="[
            topOuterDivider && 'has-top-divider',
            bottomOuterDivider && 'has-bottom-divider',
            hasBgColor && 'has-bg-color',
            invertColor && 'invert-color'
        ]">
        <div class="container">
            <div
                class="team-inner section-inner"
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
                        <div class="tiles-item-inner">
                            <div class="team-item-header">
                                <div class="team-item-image mb-24">
                                    <c-image
                                        :circular="true"
                                        src="https://www.gravatar.com/avatar/206b5748952aa99684a43080ba90c547"
                                        :width="128"
                                        :height="128" />
                                </div>
                            </div>
                            <div class="team-item-content">
                                <h5 class="team-item-name mt-0 mb-4">
                                    Mikhail Marynenko
                                </h5>
                                <div class="team-item-role text-xxs fw-500 tt-u text-color-primary mb-8">
                                    Creator, Developer, DevOps.
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="tiles-item reveal-from-bottom" data-reveal-delay="200">
                        <div class="tiles-item-inner">
                            <div class="team-item-header">
                                <div class="team-item-image mb-24">
                                    <c-image
                                        :circular="true"
                                        src="https://avatars3.githubusercontent.com/u/38364731?s=460&u=22cf532d2788de3e8e445889ce1371492c09aaa4&v=4"
                                        :width="128"
                                        :height="128" />
                                </div>
                            </div>
                            <div class="team-item-content">
                                <h5 class="team-item-name mt-0 mb-4">
                                    Arsenii Galushkin
                                </h5>
                                <div class="team-item-role text-xxs fw-500 tt-u text-color-primary mb-8">
                                    So-Creator
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="tiles-item reveal-from-bottom" data-reveal-delay="400">
                        <div class="tiles-item-inner">
                            <div class="team-item-header">
                                <div class="team-item-image mb-24">
                                    <c-image
                                        :circular="true"
                                        src="https://avatars0.githubusercontent.com/u/37489286?s=460&u=ff26c2fa69465d5e90d4ecd37ab436122f2b86ec&v=4"
                                        :width="128"
                                        :height="128" />
                                </div>
                            </div>
                            <div class="team-item-content">
                                <h5 class="team-item-name mt-0 mb-4">
                                    Dmitry Borisenko
                                </h5>
                                <div class="team-item-role text-xxs fw-500 tt-u text-color-primary mb-8">
                                    So-Creator
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- <div class="tiles-item reveal-from-bottom">
                        <div class="tiles-item-inner">
                            <div class="team-item-header">
                                <div class="team-item-image mb-24">
                                    <c-image
                                        :src="require('@/assets/images/team-member-04.jpg')"
                                        alt="Team member 01"
                                        :width="180"
                                        :height="180" />
                                </div>
                            </div>
                            <div class="team-item-content">
                                <h5 class="team-item-name mt-0 mb-4">
                                    Marika Savitskiy
                                </h5>
                                <div class="team-item-role text-xxs fw-500 tt-u text-color-primary mb-8">
                                    CEO & Co-Founder
                                </div>
                                <p class="m-0 text-sm">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div class="tiles-item reveal-from-bottom" data-reveal-delay="200">
                        <div class="tiles-item-inner">
                            <div class="team-item-header">
                                <div class="team-item-image mb-24">
                                    <c-image
                                        :src="require('@/assets/images/team-member-05.jpg')"
                                        alt="Team member 05"
                                        :width="180"
                                        :height="180" />
                                </div>
                            </div>
                            <div class="team-item-content">
                                <h5 class="team-item-name mt-0 mb-4">
                                    Marika Savitskiy
                                </h5>
                                <div class="team-item-role text-xxs fw-500 tt-u text-color-primary mb-8">
                                    CEO & Co-Founder
                                </div>
                                <p class="m-0 text-sm">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div class="tiles-item reveal-from-bottom" data-reveal-delay="400">
                        <div class="tiles-item-inner">
                            <div class="team-item-header">
                                <div class="team-item-image mb-24">
                                    <c-image
                                        :src="require('@/assets/images/team-member-06.jpg')"
                                        alt="Team member 06"
                                        :width="180"
                                        :height="180" />
                                </div>
                            </div>
                            <div class="team-item-content">
                                <h5 class="team-item-name mt-0 mb-4">
                                    Marika Savitskiy
                                </h5>
                                <div class="team-item-role text-xxs fw-500 tt-u text-color-primary mb-8">
                                    CEO & Co-Founder
                                </div>
                                <p class="m-0 text-sm">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.
                                </p>
                            </div>
                        </div>
                    </div> -->
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
  name: 'CTeam',
  components: {
    CSectionHeader,
    CImage
  },
  mixins: [SectionTilesProps],
  data() {
    return {
      sectionHeader: {
        title: 'Meet the team.',
        paragraph:
          'This people are working on this project.'
      }
    }
  }
}
</script>
<style>
.team-item-image{
    border-radius: 50% 50%;
}
</style>
