<template>
    <div>
        <h1>About page</h1>
        <NuxtLink to="/login">Login page</NuxtLink>
    </div>
</template>

<script setup lang="ts">

onBeforeMount(() => {
    console.log("开始");

    // 阻塞2秒钟
    setTimeout(() => {
        console.log("阻塞结束");
    }, 2000);

    console.log("结束");
})

</script>