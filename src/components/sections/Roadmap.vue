<template>
    <section
        class="roadmap section"
        :class="[
            topOuterDivider && 'has-top-divider',
            bottomOuterDivider && 'has-bottom-divider',
            hasBgColor && 'has-bg-color',
            invertColor && 'invert-color'
        ]">
        <div class="container">
            <div
                class="roadmap-inner section-inner"
                :class="[
                    topDivider && 'has-top-divider',
                    bottomDivider && 'has-bottom-divider'
                ]">
                <c-section-header :data="sectionHeader" class="center-content" />
                <c-timeline>
                    <c-timeline-item title="v1.0">
                        Simple Vanilla Minecraft server built on top of Kubernetes.
                    </c-timeline-item>
                    <c-timeline-item title="v2.0">
                        Our Multi-Platform Electron.js Minecraft Launcher.
                    </c-timeline-item>
                    <c-timeline-item title="v3.0">
                        Mods!
                    </c-timeline-item>
                    <c-timeline-item title="v4.0">
                        Players Registration
                    </c-timeline-item>
                    <c-timeline-item title="v5.0">
                        Donation System
                    </c-timeline-item>
                    <c-timeline-item title="v6.0">
                        User Mods submission
                    </c-timeline-item>
                    <c-timeline-item title="v7.0">
                        API for developers!
                    </c-timeline-item>
                </c-timeline>
            </div>
        </div>
    </section>
</template>

<script>
import { SectionProps } from '@/utils/SectionProps.js'
import CSectionHeader from '@/components/sections/partials/SectionHeader.vue'
import CTimeline from '@/components/elements/Timeline.vue'
import CTimelineItem from '@/components/elements/TimelineItem.vue'

export default {
  name: 'CRoadmap',
  components: {
    CSectionHeader,
    CTimeline,
    CTimelineItem
  },  
  mixins: [SectionProps],
  data() {
    return {
      sectionHeader: {
        title: 'Roadmap',
        paragraph:
          'Our plans to improve project.'
      }
    }
  }  
}
</script>