<template>
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
</script>