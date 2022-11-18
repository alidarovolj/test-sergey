<template>
  <div class="bg-white">
    <div class="container mx-auto">
      <div class="flex items-center justify-between text-sm">
        <div class="flex">
          <p
            :class="{ 'border-b-3 border-mainColor': index == 2 }"
            class="py-4 mx-3 lg:mx-6"
            v-for="(item, index) of renderContent"
            :key="index"
          >
            Текст
          </p>
        </div>
        <div class="flex items-center hover:cursor-pointer">
          <i class="fa-solid fa-chevron-left"></i>
          <p class="ml-2">Текст</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "chooseBlock",
  props: ["blocksData", "amountOfObjects"],
  computed: {
    renderContent() {
      if (this.blocksData) {
        return this.blocksData;
      } else {
        return this.amountOfObjects;
      }
    },
  },
};
</script>