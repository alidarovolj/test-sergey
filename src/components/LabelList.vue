<template>
  <div class="flex justify-start mb-5">
    <LabelSingle v-for="(item, index) of 3" :key="index" />
  </div>
</template>

<script>
import LabelSingle from "@/components/LabelSingle.vue";

export default {
  name: "LabelList",
  components: {
    LabelSingle,
  },
};
</script>