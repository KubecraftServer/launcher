<template>
  <section
    class="cta section center-content-mobile reveal-from-bottom"
    id="cta"
    :class="[
            topOuterDivider && 'has-top-divider',
            bottomOuterDivider && 'has-bottom-divider',
            hasBgColor && 'has-bg-color',
            invertColor && 'invert-color'
        ]"
  >
    <div class="container">
      <div
        class="cta-inner section-inner"
        :class="[
                    topDivider && 'has-top-divider',
                    bottomDivider && 'has-bottom-divider',
                    split && 'cta-split'
                ]"
      >
        <div class="cta-slogan">
          <h3 class="m-0">
            <c-input v-model="nickname" label="Nickname" />
            <br />
          </h3>
        </div>
        <div @click="start(nickname)" class="cta-action">
          <c-button id="start" hint="CmdOrCtrl+S to Start">Lets Go! 👾</c-button>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { SectionProps } from "@/utils/SectionProps.js";
import CButton from "@/components/elements/Button.vue";
import CInput from "@/components/elements/Input.vue";
const { ipcRenderer } = require("electron");

export default {
  name: "CCta",
  components: {
    CButton,
    CInput
  },
  data() {
    return {
      nickname: localStorage.nickname ? localStorage.nickname : ""
    };
  },
  mounted() {},
  methods: {
    start(nickname) {
      ipcRenderer.send("launcher", nickname);
    }
  },
  watch: {
    nickname(nickname) {
      localStorage.nickname = nickname;
    }
  },
  mixins: [SectionProps],
  props: {
    split: {
      type: Boolean,
      default: false
    }
  }
};
</script>