<template>
  <div class="container mx-auto mt-8 mb-5">
    <div class="block lg:flex justify-between w-full">
      <SelectBlock :tData="renderData" />
      <div class="mt-3 lg:mt-0 w-full lg:w-2/3 block lg:flex">
        <div class="relative w-full flex">
          <input
            type="text"
            class="p-3 w-full text-sm rounded-md"
            placeholder="Текст"
          />
          <img
            class="
              absolute
              right-3
              top-1/2
              -translate-y-1/2
              hover:cursor-pointer
            "
            src="@/assets/img/sliders.png"
            alt=""
          />
        </div>
        <div
          class="flex items-center justify-center lg:justify-start mt-3 lg:mt-0"
        >
          <ButtonSearch />
          <div class="bg-player flex items-center">
            <i
              class="
                fa-solid fa-ellipsis-vertical
                px-3
                py-2
                text-mainColor
                rounded-md
                ml-3
                hover:cursor-pointer
              "
            ></i>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ButtonSearch from "@/components/ButtonSearch.vue";
import SelectBlock from "./SelectBlock.vue";

export default {
  name: "SearchBlock",
  props: ["searchRange", "amountOfObjects"],
  components: {
    ButtonSearch,
    SelectBlock,
  },
  computed: {
    renderData() {
      if (this.searchRange) {
        return this.searchRange;
      } else {
        return this.amountOfObjects;
      }
    },
  },
};
</script>