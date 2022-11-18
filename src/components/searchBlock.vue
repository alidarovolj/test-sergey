<template>
  <div class="container mx-auto mt-8 mb-5">
    <div class="block lg:flex justify-between w-full">
      <select class="w-full lg:w-1/3 p-3 text-sm rounded-md mr-3" name="" id="">
        <option value="" v-for="(item, index) of 4" :key="index">
          Текст {{ index + 1 }}
        </option>
      </select>
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
        <div class="flex items-center justify-center lg:justify-start mt-3 lg:mt-0">
          <div
            class="
              hover:cursor-pointer
              flex
              items-center
              bg-mainColor
              py-3
              px-5
              rounded-lg
              ml-3
            "
          >
            <i class="fa-solid fa-circle-plus text-white"></i>
            <p class="ml-4 text-sm">Текст</p>
          </div>
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
export default {
  name: "SearchBlock",
};
</script>