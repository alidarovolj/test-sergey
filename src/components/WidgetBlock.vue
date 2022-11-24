<template>
  <div class="w-full">
    <component :is="renderComponent"></component>
  </div>
</template>

<script>
import ChartBlock from "@/components/ChartBlock.vue";
import RequestBlock from "@/components/RequestBlock.vue";
import MailForumBlock from "@/components/MailForumBlock.vue";
import AboutCompanyBlock from "@/components/AboutCompanyBlock.vue";
import PartnersBlock from "@/components/PartnersBlock.vue";
import StockBlock from "@/components/StockBlock.vue";
import BillsBlock from "@/components/BillsBlock.vue";
import TemplatesBlock from "@/components/TemplatesBlock.vue";
import TemplatesByGroupsBlock from "@/components/TemplatesByGroupsBlock.vue";
import ProjectsBlock from "@/components/ProjectsBlock.vue";

export default {
  name: "WidgetBlock",
  components: {
    ChartBlock,
    RequestBlock,
    MailForumBlock,
    AboutCompanyBlock,
    PartnersBlock,
    StockBlock,
    BillsBlock,
    TemplatesBlock,
    TemplatesByGroupsBlock,
    ProjectsBlock,
  },
  props: ["tData", "comp", "request"],
  computed: {
    renderComponent() {
      return this.comp.toString();
    },
  },
};
</script>