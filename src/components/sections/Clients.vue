<template>
  <section
    class="clients section reveal-fade"
    :class="[
            topOuterDivider && 'has-top-divider',
            bottomOuterDivider && 'has-bottom-divider',
            hasBgColor && 'has-bg-color',
            invertColor && 'invert-color'
        ]"
  >
    <div class="container">
      <div
        class="clients-inner section-inner"
        :class="[
                    topDivider && 'has-top-divider',
                    bottomDivider && 'has-bottom-divider'
                ]"
      >
        <ul class="list-reset">
          <li
                  class="reveal-from-bottom"
                  data-reveal-delay="150"
          >
            <c-image
                    :src="require('@/assets/images/minecraft.png')"
                    alt="Node.js"
                    :width="100"
                    :height="40"
            />
          </li>
          <li
            class="reveal-from-bottom"
            data-reveal-delay="150"
          >
            <c-image
              :src="require('@/assets/images/nodejs_logo.svg')"
              alt="Node.js"
              :width="83"
              :height="30"
            />
          </li>
          <li
            class="reveal-from-top"
            data-reveal-delay="300"
          >
            <c-image
              :src="require('@/assets/images/ts_logo.svg')"
              alt="TypeScript"
              :width="125"
              :height="39"
            />
          </li>
          <li
            class="reveal-from-bottom"
            data-reveal-delay="450"
          >
            <c-image
              :src="require('@/assets/images/Kubernetes_logo.svg')"
              alt="Kubernetes"
              :width="150"
              :height="31"
            />
          </li>
          <li
            class="reveal-from-top"
            data-reveal-delay="600"
          >
            <c-image
              :src="require('@/assets/images/AmazonWebservices_Logo.svg')"
              alt="AWS"
              :width="113"
              :height="30"
            />
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script>
import { SectionProps } from '@/utils/SectionProps.js'
import CImage from '@/components/elements/Image.vue'

export default {
  name: 'CClients',
  components: {
    CImage
  },
  mixins: [SectionProps]
}
</script>