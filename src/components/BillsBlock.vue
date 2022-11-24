<template>
  <div class="bg-white p-5 h-full rounded-md flex flex-col justify-between">
    <div class="flex items-center justify-between mb-5">
      <div class="flex items-center">
        <img class="mr-4" src="@/assets/img/icons/bills.png" alt="" />
        <p class="text-sm font-semibold text-blockHeader">Счета</p>
      </div>
    </div>
    <div>
      <div
        v-for="(item, index) of 5"
        :key="index"
        class="
          flex
          items-center
          justify-start h-7
          text-blockHeader
          my-4
          text-sm
          setDots
        "
      >
        <p class="w-1/5">No data</p>
        <div class="bg-red-500 bg-opacity-40 w-[20px] h-full rounded-r-md"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "RequestBlock",
};
</script>