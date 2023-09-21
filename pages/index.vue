<template>
    <div>
        <h1>Home page</h1>

        <NuxtLink to="/about">About page</NuxtLink>
        <!-- <el-image loading="lazy" style="width: 500px; height: 500px" src="login_image.png" /> -->
        <NuxtImg src="/login_image.png" />
        <img src="login_image.png" class="w-500px" alt="SVG图像">
        <img src="5c413b557fbee.svg" class="w-500px" alt="SVG图像">
    </div>
</template>

<script setup lang="ts">

const url = 'login_image.png'

</script>