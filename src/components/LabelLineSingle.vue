<template>
  <div
    class="
      flex
      w-max
      bg-white
      p-2
      rounded-md
      mr-2
      text-closedText
      relative
      text-sm
      hover:bg-mainColor hover:text-white hover:cursor-pointer
      labelSingle
    "
  >
    <div class="flex items-center">
      <div
        class="
          h-full
          border-l-3 border-green-600
          absolute
          left-0
          top-1/2
          -translate-y-1/2
          rounded-l-md
        "
      ></div>
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