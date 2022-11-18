<template>
  <ChooseBlock :blocksData="blocks" :amountOfObjects="amount" />
  <SearchBlock :searchRange="blocks" :amountOfObjects="amount" />
  <BlocksList :blocksData="blocks" :amountOfObjects="amount" />
</template>

<script>
import ChooseBlock from "./Components/ChooseBlock/index.vue";
import SearchBlock from "./Components/SearchBlock/index.vue";
import BlocksList from "./Components/BlockList/index.vue";

export default {
  name: "MainView",
  data() {
    return {
      blocks: [
        {
          id: 1,
          title: "Some Text",
          number: "42",
          totalPrice: "3000,0",
          labelCount: 3,
          coloredText: {
            text: "Another Text",
            color: "green",
          },
        },
        {
          id: 2,
          title: "Some Text 2",
          number: "42",
          totalPrice: "3000,0",
          labelCount: 3,
          coloredText: {
            text: "Another Text",
            color: "green",
          },
        },
      ],
      amount: 4,
    };
  },
  components: {
    ChooseBlock,
    SearchBlock,
    BlocksList,
  },
};
</script>