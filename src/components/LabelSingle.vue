<template>
  <div class="flex w-max bg-player p-2 rounded-md mr-2 text-closedText">
    <div class="flex items-center">
      <div class="p-2 rounded-full mr-2 bg-green-600"></div>
      <p>
        Метка
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