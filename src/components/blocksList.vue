<template>
  <div>
    <div class="container mx-auto">
      <div class="rounded-md bg-white">
        <div
          v-for="(item, index) of 5"
          :key="index"
          class="py-3 px-5 relative"
          :class="{ 'border-b border-borderColor': index != 4 }"
        >
          <div class="block lg:flex justify-between">
            <div class="flex items-center w-1/2">
              <div class="text-sm">
                <p class="text-xxs font-semibold">Текст</p>
                <p>
                  <span
                    :class="[
                      { 'text-yellow-600': index == 0 },
                      { 'text-red-600': index == 1 },
                      { 'text-green-600': index == 2 },
                      { 'text-orange-600': index == 3 },
                      { 'text-blue-600': index == 4 },
                    ]"
                    >#23</span
                  >
                  Текст
                </p>
                <p class="mt-3">Текст</p>
              </div>
            </div>
            <div
              class="w-full lg:w-1/2 block lg:flex justify-between items-start"
            >
              <div class="text-sm">
                <div class="flex justify-between">
                  <div>
                    <p class="text-xxs font-semibold">Текст</p>
                    <p
                      class="font-semibold"
                      :class="[
                        { 'text-yellow-600': index == 0 },
                        { 'text-red-600': index == 1 },
                        { 'text-green-600': index == 2 },
                        { 'text-orange-600': index == 3 },
                        { 'text-blue-600': index == 4 },
                      ]"
                    >
                      Текст
                    </p>
                  </div>
                  <div>
                    <p class="text-xxs font-semibold">Текст</p>
                    <p class="text-sm">
                      00:<span class="text-mainColor font-semibold">05:43</span>
                    </p>
                  </div>
                  <div>
                    <p class="text-xxs font-semibold">Итого, $</p>
                    <p class="font-semibold">2 340,0</p>
                  </div>
                </div>
                <div class="flex mt-3 overflow-x-auto w-full lg:w-auto">
                  <div
                    v-for="(el, ind) of 4"
                    :key="ind"
                    class="flex bg-player p-2 rounded-md ml-2 text-closedText"
                    :class="{ 'ml-0': ind == 0 }"
                  >
                    <div class="flex items-center">
                      <div
                        class="p-2 rounded-full mr-2"
                        :class="[
                          { 'bg-yellow-600': ind == 0 },
                          { 'bg-red-600': ind == 1 },
                          { 'bg-green-600': ind == 2 },
                          { 'bg-orange-600': ind == 3 },
                        ]"
                      ></div>
                      <p>
                        Метка {{ ind + 1 }}
                        <i class="fa-solid fa-xmark text-xs ml-1 hover:cursor-pointer"></i>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="flex items-center my-3 lg:my-0">
                <img
                  class="h-12 lg:h-auto hover:cursor-pointer"
                  src="@/assets/img/stop-circle.png"
                  alt=""
                />
                <i
                  class="
                    fa-solid fa-ellipsis-vertical
                    px-3
                    py-2
                    rounded-md
                    ml-3
                    hover:cursor-pointer
                  "
                  :class="[
                    { 'text-yellow-600': index == 0 },
                    { 'text-red-600': index == 1 },
                    { 'text-green-600': index == 2 },
                    { 'text-orange-600': index == 3 },
                    { 'text-blue-600': index == 4 },
                  ]"
                ></i>
              </div>
            </div>
          </div>
          <div
            class="
              absolute
              left-0
              top-1/2
              -translate-y-1/2
              w-1
              h-blockAside
              rounded-r-md
            "
            :class="[
              { 'bg-yellow-600': index == 0 },
              { 'bg-red-600': index == 1 },
              { 'bg-green-600': index == 2 },
              { 'bg-orange-600': index == 3 },
              { 'bg-blue-600': index == 4 },
            ]"
          ></div>
          <div
            class="
              flex
              items-center
              justify-between
              text-closedText text-sm
              mt-4
            "
          >
            <p>Имя</p>
            <p>Текст</p>
            <p>Текст</p>
            <p>Статус: Текст</p>
            <p>Текст</p>
            <p>Текст</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>