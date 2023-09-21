<template>
    <div class="w-full h-full trapezoid">
        <el-container>
            <el-header class=" w-full h-full flex items-center justify-between">
                <el-image style="height: 50px;" src="logo_2.png" />
                <div class="h-full flex items-center justify-between">
                    <ThemeControl></ThemeControl>
                </div>
            </el-header>
            <el-main>
                <slot />
            </el-main>
        </el-container>
    </div>
</template>

<script setup lang="ts">
</script>

<style scoped lang="scss"></style>