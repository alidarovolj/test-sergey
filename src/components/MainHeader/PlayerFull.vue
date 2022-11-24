<template>
  <div
    class="
      hidden
      lg:flex
      items-center
      justify-between
      bg-player
      p-3
      w-full
      rounded-3xl
    "
  >
    <div class="flex items-center text-sm">
      <DotBlock :color="'red'" />
      <p>Разработка панели и еще что-то...</p>
    </div>
    <div class="flex items-center">
      <p class="text-sm">
        00:<span class="text-mainColor font-semibold">05:43</span>
      </p>
      <img class="ml-3" src="@/assets/img/stop-circle.png" alt="" />
    </div>
  </div>
</template>

<script>
import DotBlock from "@/components/DotBlock.vue";

export default {
  name: "PlayerFull",
  components: {
    DotBlock,
  },
};
</script>