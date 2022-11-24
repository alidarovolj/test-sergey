<template>
  <div class="container mx-auto">
    <LabelLineList />
    <div class="grid auto-rows-max gap-4 grid-cols-2">
      <WidgetBlock :comp="'AboutCompanyBlock'" />
      <WidgetBlock :comp="'RequestBlock'" />
      <WidgetBlock :comp="'MailForumBlock'" />
      <WidgetBlock :comp="'PartnersBlock'" />
      <WidgetBlock :comp="'StockBlock'" />
      <WidgetBlock :comp="'BillsBlock'" />
      <WidgetBlock :comp="'TemplatesBlock'" />
      <WidgetBlock :comp="'TemplatesByGroupsBlock'" />
      <WidgetBlock :comp="'ProjectsBlock'" />
      <CreateBlock />
    </div>
  </div>
</template>

<script>
import WidgetBlock from "@/components/WidgetBlock.vue";
import CreateBlock from "@/components/CreateBlock.vue";
import LabelLineList from "@/components/LabelLineList.vue";

export default {
  name: "MainView",
  components: {
    WidgetBlock,
    CreateBlock,
    LabelLineList,
  },
};
</script>