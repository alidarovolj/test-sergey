<template>
  <div class="bg-white p-5 h-full rounded-md flex flex-col justify-between">
    <div class="flex items-center mb-5">
      <div class="flex items-center w-1/2">
        <img class="mr-4" src="@/assets/img/icons/projects.png" alt="" />
        <p class="text-sm font-semibold text-blockHeader">Проекты</p>
      </div>
    </div>
    <div>
      <div
        v-for="(item, index) of 5"
        :key="index"
        class="
          flex
          items-center
          justify-between
          text-blockHeader
          my-4
          text-sm
          setDots
        "
      >
        <div class="w-1/2 flex items-center">
          <DotBlock :color="'red'" />
          <p>Проект {{ index + 1 }}</p>
        </div>
        <div class="w-1/2 flex justify-end text-center">
          <p class="w-max text-mainColor mx-2">195:00</p>
          <div class="w-full border-b-2 border-mainColor"></div>
          <p class="w-max text-black mx-2">195:00</p>
        </div>
      </div>
    </div>
    <div class="w-full flex items-center justify-between">
      <p class="text-mainColor text-xs">Ещё 12</p>
      <p class="text-lg"><i class="fa-solid fa-ellipsis text-ellipsis"></i></p>
    </div>
  </div>
</template>

<script>
import DotBlock from "@/components/DotBlock.vue";

export default {
  name: "RequestBlock",
  components: {
    DotBlock,
  },
};
</script>