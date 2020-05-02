<template>
  <div class="brand">
    <h1 class="m-0">
      <c-image :src="require('@/assets/images/logo.svg')" alt="Kubecraft" :width="32" :height="32" />
    </h1>
  </div>
</template>

<script>
import CImage from "@/components/elements/Image.vue";

export default {
  name: "CLogo",
  components: {
    CImage
  }
};
</script>

