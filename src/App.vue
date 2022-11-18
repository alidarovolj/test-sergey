<template>
  <StaticHeader />
  <router-view />
</template>

<script>
import StaticHeader from "./components/StaticHeader.vue";

export default {
  name: "App",
  components: {
    StaticHeader,
  },
};
</script>
