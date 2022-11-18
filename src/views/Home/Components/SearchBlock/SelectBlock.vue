<template>
  <select class="w-full lg:w-1/3 p-3 text-sm rounded-md mr-3" name="" id="">
    <option value="" v-for="(item, index) of tData" :key="index">
      <span v-if="item.title">{{ item.title }}</span>
      <span v-else>{{ item }}</span>
    </option>
  </select>
</template>

<script>
export default {
  name: "SelectBlock",
  props: ["tData"],
};
</script>