<template>
    <div class="timeline-item">
        <div class="timeline-item-inner">
            <div class="timeline-item-header tt-u mb-4 reveal-fade">{{title}}</div>
            <div class="timeline-item-content h4 m-0 reveal-from-side">
                <slot />
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'CTimelineItem',
  props: {
    title: {
      type: String,
      default: ''
    }
  }
}
</script>
