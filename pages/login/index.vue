<template>
    <div>
        <h1>Login page</h1>
        <NuxtLink to="/">Home page</NuxtLink>
        <el-row>
            <el-col :span="12">
                <div class="grid-content ep-bg-purple bg-blueGray" />
            </el-col>
            <el-col :span="12">
                <div class="grid-content ep-bg-purple-light bg-blue" />
            </el-col>
        </el-row>
        <el-switch v-model="colorMode" inline-prompt active-text="dark" inactive-text="light" size="large"></el-switch>
    </div>
</template>

<script setup lang="ts">
const color = useColorMode();

console.log(color.value)

const colorMode = computed({
    get: () => color.value === 'dark',
    set: () => (color.preference = color.value === 'dark' ? 'light' : 'dark'),
});
</script>

<style scoped lang="scss">
// #image-background {
//     &::before {
//         content: '';
//         position: absolute;
//         top: 0;
//         left: 0;
//         width: 100%;
//         height: 100%;
//         margin-left: -48%;
//         background-image: url('login-bg.svg');
//         background-repeat: no-repeat;
//         background-position: 100%;
//         background-size: auto 100%;

//         @media (max-width: 1200) {
//             display: none;
//         }
//     }
// }

.el-row {
    margin-bottom: 20px;
}

.el-row:last-child {
    margin-bottom: 0;
}

.el-col {
    border-radius: 4px;
}

.grid-content {
    min-height: 36px;
}
</style>