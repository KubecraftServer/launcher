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
            <c-input
              v-model="nickname"
              :hint="downloadingRoot ? 'Downloading Forge and Mods.' : ''"
              label="Nickname"
            />
            <br />
            <c-input v-model="password" type="password" label="Password" />
            <br />
          </h3>
        </div>
        <div @click="start(nickname)" class="cta-action">
          <c-button :loading="loading" id="start" hint="CmdOrCtrl+S to Start">Lets Go! 👾</c-button>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { SectionProps } from "@/utils/SectionProps.js";
import CButton from "@/components/elements/Button.vue";
import CInput from "@/components/elements/Input.vue";
import { ipcRenderer } from "electron";

export default {
  name: "CCta",
  components: {
    CButton,
    CInput
  },
  data() {
    return {
      nickname: localStorage.nickname ? localStorage.nickname : "",
      password: localStorage.password ? localStorage.password : "",
      loading: false,
      downloadingRoot: false
    };
  },
  mounted() {
    if (this.password.length > 0)
      ipcRenderer.send("set-password", this.password);
  },
  methods: {
    start(nickname) {
      if (this.password.length > 0)
        ipcRenderer.send("set-password", this.password);
      this.loading = true;
      this.downloadingRoot = true;
      ipcRenderer.on("ready-to-start", () => {
        this.loading = false;
        this.downloadingRoot = false;
        ipcRenderer.send("launcher", nickname);
      });
      ipcRenderer.send("prepare-to-start");
    }
  },
  watch: {
    nickname(nickname) {
      localStorage.nickname = nickname;
    },
    password(password) {
      localStorage.password = password;
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