<template>
  <component style="padding-top: 15px;" :is="layout">
    <Launcher :layout.sync="layout" />
  </component>
</template>

<script>
import Launcher from "@/views/Launcher.vue";

export default {
  name: "App",
  components: {
    Launcher
  },
  data() {
    return {
      layout: "div"
    };
  },
  mounted() {
    document.body.classList.add("is-loaded");
  }
};
</script>
