<template>
  <div>
    <div class="container mx-auto">
      <component
        :is="renderComponent"
        :tData="blocksData"
        :amount="1"
        :blockTitle="'SomeText'"
      ></component>
    </div>
  </div>
</template>

<script>
import BlockSingle from "./BlockSingle.vue";
import BlockWithData from "./BlockWithData.vue";

export default {
  name: "BlocksList",
  props: ["blocksData"],
  components: {
    BlockSingle,
    BlockWithData,
  },
  computed: {
    renderComponent() {
      if (this.blocksData) {
        return BlockWithData;
      } else {
        return BlockSingle;
      }
    },
  },
};
</script>