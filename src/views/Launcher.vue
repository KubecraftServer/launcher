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

    ipcRenderer.on("toggleCta", () => {
      this.hideCta = !this.hideCta;
    });

    ipcRenderer.on("start", () =>
      document.querySelector(".cta-action").click()
    );
  }
};
</script>
