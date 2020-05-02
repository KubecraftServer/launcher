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
                class="hero-inner section-inner pb-0"
                :class="[
                    topDivider && 'has-top-divider',
                    bottomDivider && 'has-bottom-divider'
                ]">
                <div class="hero-content">
                    <div class="container-xs">
                        <h1 class="m-0 reveal-from-bottom">
                            Engage Your Visitors with a beautiful template
                        </h1>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import { SectionProps } from '@/utils/SectionProps.js'

export default {
  name: 'CHeroFull',
  mixins: [SectionProps]
}
</script>