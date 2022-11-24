<template>
  <div class="bg-aboutCompany p-5 h-full rounded-md flex flex-col justify-between">
    <h2 class="font-medium">ООО Рога и копыта</h2>
    <div>
      <div
        class="flex items-center justify-between my-4 text-sm text-blockHeader"
      >
        <p>Тариф “Базовый”</p>
        <p>до 23.02.2023</p>
      </div>
      <div
        class="flex items-center justify-between my-4 text-sm text-blockHeader"
      >
        <p>Статус компании</p>
        <p class="bg-activeBg text-active px-2 py-1">активен</p>
      </div>
      <div
        class="flex items-center justify-between my-4 text-sm text-blockHeader"
      >
        <p>Сотрудники</p>
        <p>5</p>
      </div>
      <div
        class="flex items-center justify-between my-4 text-sm text-blockHeader"
      >
        <p>Баланс</p>
        <p>125$</p>
      </div>
    </div>
    <div class="w-full flex items-center justify-end">
      <p class="text-lg"><i class="fa-solid fa-ellipsis text-ellipsis"></i></p>
    </div>
  </div>
</template>

<script>
export default {
  name: "AboutCompanyBlock",
};
</script>