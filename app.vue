<!-- <template>
  <div class="h-7xl">
    <PieChart></PieChart>

    <div>
      <h1>Counter: {{ counter || '-' }}</h1>
      <button @click="counter = null">reset</button>
      <button @click=mathCounter>-</button>
      <button @click=mathCounter>+</button>
    </div>
  </div>
</template>

<script setup lang="ts">
const counter = useCookie('counter')
counter.value = counter.value || String(Math.round(Math.random() * 1000))

const mathCounter = () => {
  counter.value = String(Math.round(Math.random() * 1000))
}
const { isMobile } = useDevice();

console.log(isMobile);

</script> -->

<template>
  <NuxtPage />
</template>

<style lang="scss">
.page-enter-active,
.page-leave-active {
  transition: all 0.4s;
}

.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(1rem);
}
</style>
