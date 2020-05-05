<template>
  <fragment>
    <c-cta v-if="!hideCta" split />
    <pre style="max-height: 150px; overflow-x: hidden;" v-if="log.length > 0" v-html="log" />
  </fragment>
</template>

<script>
// import layout
import CLayout from "@/layouts/LayoutAlternative.vue";
import CCta from "@/components/sections/Cta.vue";
import { ipcRenderer } from "electron";

export default {
  name: "Launcher",
  components: {
    // CHeroFull,
    // CTestimonial,
    CCta
    // CInput,
    // CModal,
    // CAccordion,
    // CAccordionItem
  },
  data() {
    return { log: "", hideCta: false };
  },
  created() {
    this.$emit("update:layout", CLayout);
  },
  mounted() {
    ipcRenderer.on("log", (_, data) => {
      console.log(data);
      this.log = this.log + "\n" + data;
    });

    ipcRenderer.on("notification", (_, { subtitle, body, silent = true }) => {
      new Notification("Kubecraft", {
        subtitle,
        body,
        silent
      });
    });

    const playStart = () =>
      new Audio(
        "https://gamepedia.cursecdn.com/minecraft_gamepedia/8/8c/Beacon_activate.ogg"
      ).play();

    const playStop = () =>
      new Audio(
        "https://gamepedia.cursecdn.com/minecraft_gamepedia/8/88/Beacon_deactivate.ogg"
      ).play();

    ipcRenderer.on("playStart", () => playStart());
    ipcRenderer.on("playStop", () => playStop());

    ipcRenderer.on("toggleCta", () => {
      this.hideCta = !this.hideCta;
    });

    ipcRenderer.on("start", () =>
      document.querySelector(".cta-action").click()
    );
  }
};
</script>
