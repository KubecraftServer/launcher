<template>
    <fragment>
        <div
            class="carousel-items"
            :class="elClasses"
            ref="carousel"
            v-touch:swipe.left="swipeLeft"
            v-touch:swipe.right="swipeRight">
            <slot />
        </div>
        <div class="carousel-bullets">
            <button
                v-for="n in itemsCount"
                :key="n"
                class="carousel-bullet"
                :class="{'is-active': n - 1 === activeItem}"
                @click="goTo(n - 1, true)"></button>
        </div>
    </fragment>
</template>

<script>
export default {
  name: 'CCarousel',
  props: {
    active: {
      type: Number,
      default: null
    },
    autorotate: {
      type: Boolean,
      default: false
    },
    autorotateTiming: {
      type: Number,
      default: 7000
    }
  },
  data() {
    return {
      items: [],
      activeItem: this.active || 0,
      autorotateInterval: null,
      elClasses: null
    }
  },
  computed: {
    itemsCount: function() {
      return this.items.length
    }
  },
  watch: {
    activeItem() {
      this.itemsClasses()
    }
  },
  methods: {
    itemsClasses() {
      for (let i = 0; i < this.itemsCount; i++) {
        this.items[i].classList.remove('is-active')
      }
      this.items[this.activeItem].classList.add('is-active')
    },
    goTo(n, stop = false) {
      stop && this.stopAutorotate()
      this.activeItem = n
    },
    goToNext(stop = false) {
      let nextItem =
        this.activeItem + 1 >= this.itemsCount ? 0 : this.activeItem + 1
      this.goTo(nextItem, stop)
    },
    goToPrev(stop = false) {
      let prevItem =
        this.activeItem - 1 < 0 ? this.itemsCount - 1 : this.activeItem - 1
      this.goTo(prevItem, stop)
    },
    playAutorotate() {
      if (!this.autorotateInterval && this.autorotate) {
        this.autorotateInterval = setInterval(() => {
          this.goToNext()
        }, this.autorotateTiming)
      }
    },
    stopAutorotate() {
      clearInterval(this.autorotateInterval)
      this.autorotateInterval = null
    },
    heightFix() {
      let taller = 0
      let height
      for (let i = 0; i < this.itemsCount; i++) {
        this.items[i].classList.add('is-loading')
        height = this.items[i].offsetHeight
        this.items[i].classList.remove('is-loading')
        if (height > taller) {
          taller = height
        }
      }
      this.items[0].parentNode.style.minHeight = taller + 'px'
    },
    swipeLeft() {
      this.goToNext(true)
      this.stopAutorotate()
    },
    swipeRight() {
      this.goToPrev(true)
    }
  },
  mounted() {
    this.items = Array.prototype.slice.call(this.$refs.carousel.children)
    this.elClasses = this.$el.className
    this.itemsClasses()
    this.playAutorotate()
    this.heightFix()
    window.addEventListener('resize', this.heightFix)
  }
}
</script>