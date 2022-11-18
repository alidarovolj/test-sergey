<template>
  <chooseBlock />
  <searchBlock />
  <blocksList />
</template>

<script>
import chooseBlock from "@/components/chooseBlock.vue";
import searchBlock from "@/components/searchBlock.vue";
import blocksList from "@/components/blocksList.vue";

export default {
  name: "MainView",
  components: {
    chooseBlock,
    searchBlock,
    blocksList,
  },
};
</script>