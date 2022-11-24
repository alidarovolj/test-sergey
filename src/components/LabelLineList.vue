<template>
  <div class="flex justify-start mb-5">
    <LabelLineSingle v-for="(item, index) of 3" :key="index" />
  </div>
</template>

<script>
import LabelLineSingle from "@/components/LabelLineSingle.vue";

export default {
  name: "LabelList",
  components: {
    LabelLineSingle,
  },
};
</script>