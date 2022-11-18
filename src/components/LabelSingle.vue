<template>
  <div
    v-for="(el, ind) of amount"
    :key="ind"
    class="flex bg-player p-2 rounded-md ml-2 text-closedText"
    :class="{ 'ml-0': ind == 0 }"
  >
    <div class="flex items-center">
      <div
        class="p-2 rounded-full mr-2"
        :class="[
          { 'bg-yellow-600': ind == 0 },
          { 'bg-red-600': ind == 1 },
          { 'bg-green-600': ind == 2 },
          { 'bg-orange-600': ind == 3 },
        ]"
      ></div>
      <p>
        Метка {{ ind + 1 }}
        <i class="fa-solid fa-xmark text-xs ml-1 hover:cursor-pointer"></i>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "LabelSingle",
  props: ["amount"],
};
</script>