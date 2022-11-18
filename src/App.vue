<template>
  <staticHeader />
  <router-view />
</template>

<script>
import staticHeader from "./components/staticHeader.vue";

export default {
  name: "App",
  components: {
    staticHeader,
  },
};
</script>
