<script setup lang="ts">
const color = useColorMode()
const theme = useCookie('theme')
const themeSwitch = ref(theme.value === 'light')

onBeforeMount(() => {
  theme.value = theme.value || 'light'
  color.preference = theme.value
  themeSwitch.value = theme.value === 'light'

  console.log(theme.value, color.preference, themeSwitch.value)
})


function toggleTheme() {
  color.preference = color.value === 'dark' ? 'light' : 'dark'
  theme.value = color.preference
}
</script>

<template>
  <div>
    <label class="switch">
      <input type="checkbox" v-model="themeSwitch" @click="toggleTheme">
      <span class="slider"></span>
    </label>
  </div>
</template>

<style scoped lang="scss">
/* 开关 - 滑块周围的盒子 */
.switch {
  font-size: 17px;
  position: relative;
  display: inline-block;
  width: 2.8em;
  height: 1.4em;
}

/* 隐藏默认 HTML 复选框 */
.switch input {
  opacity: 0;
  width: 0;
  height: 0;
}

/* 滑块 */
.slider {
  --background: #2e317c;
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: var(--background);
  transition: .5s;
  border-radius: 30px;
}

.slider:before {
  position: absolute;
  content: "";
  height: 1.0em;
  width: 1.0em;
  border-radius: 50%;
  left: 10%;
  bottom: 0.2em;
  box-shadow: inset 6px -4px 0px 0px #fff000;
  background: var(--background);
  transition: .5s;
}

input:checked+.slider {
  background-color: #1677b3;
}

input:checked+.slider:before {
  transform: translateX(130%);
  box-shadow: inset 15px -4px 0px 15px #fff000;
}
</style>