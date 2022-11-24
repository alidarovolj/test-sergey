<template>
  <div class="bg-white p-5 h-full rounded-md flex flex-col justify-between">
    <div class="flex items-center justify-between mb-5">
      <div class="flex items-center w-1/2">
        <img class="mr-4" src="@/assets/img/icons/mail_forum.png" alt="" />
        <p class="text-sm font-semibold text-blockHeader">Мейл форум</p>
      </div>
      <div class="flex items-center justify-between w-1/2">
        <p class="text-sm font-semibold text-blockHeader w-full text-center">
          Не прочитано
        </p>
        <p class="text-sm font-semibold text-blockHeader w-full text-center">
          К исполнению
        </p>
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
          <div class="w-2 h-2 bg-red-500 rounded-full mr-3"></div>
          <p>info@rennord.com</p>
        </div>
        <div class="w-1/2 flex items-center justify-between text-center">
          <p class="w-full">35</p>
          <p class="w-full">10</p>
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
export default {
  name: "RequestBlock",
};
</script>