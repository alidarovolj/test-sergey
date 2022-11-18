<template>
  <div class="w-full pt-3 pb-0 lg:pb-3 border-b border-borderColor bg-white">
    <div class="container mx-auto">
      <div class="flex justify-between w-full">
        <div
          @click="$router.push('/')"
          class="flex items-center w-1/2 hover:cursor-pointer"
        >
          <img class="mr-5" src="@/assets/img/logo.png" alt="" />
          <h1 class="text-mainColor text-3xl font-bold">LOGO</h1>
        </div>
        <div class="w-1/2 flex items-center justify-end">
          <div class="relative mx-7">
            <img src="@/assets/img/notification.png" alt="" />
            <div
              class="bg-notification rounded-full absolute left-0 bottom-0 p-1"
            >
              <p class="text-xxs text-white">38</p>
            </div>
          </div>
          <img src="@/assets/img/photo.png" alt="" />
        </div>
      </div>
    </div>
    <div
      class="flex lg:hidden items-center justify-between bg-player p-3 w-full mt-3"
    >
      <div class="flex items-center text-sm">
        <div class=""></div>
        <p>Текст</p>
      </div>
      <div class="flex items-center">
        <p class="text-sm">
          00:<span class="text-mainColor font-semibold">05:43</span>
        </p>
        <img class="ml-3" src="@/assets/img/stop-circle.png" alt="" />
      </div>
    </div>
  </div>
</template>