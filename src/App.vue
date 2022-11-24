<template>
  <MainHeader />
  <BreadCrumbs />
  <router-view class="py-8" />
</template>

<script>
import MainHeader from "@/components/MainHeader";
import BreadCrumbs from "@/components/BreadCrumbs.vue";

export default {
  name: "App",
  components: {
    MainHeader,
    BreadCrumbs,
  },
};
</script>
