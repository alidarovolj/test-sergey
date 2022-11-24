<template>
  <div :class="`w-2 h-2 bg-${color}-500 rounded-full mr-3`"></div>
</template>

<script>
export default {
  name: "DotBlock",
  props: ["color"],
};
</script>