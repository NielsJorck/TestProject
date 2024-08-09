<template>
    <div class="bg-black p-4 flex justify-end gap-4">
        <NuxtLink v-for="locale in locales" :key="locale.code" :to="switchLocalePath(locale.code)">
            <Icon size="2em" :name="locale.icon"></Icon>
        </NuxtLink>
    </div>
    <!-- <div class="sticky">
        <div class="flex gap-2 my-2 px-8 py-2 backdrop-blur-lg backdrop-saturate-200 rounded-xl bg-primary-950/75">
            <NuxtLink to="/">Home</NuxtLink>
            <NuxtLink to="/calorie-calculator">Kalorie beregner</NuxtLink>
        </div>
    </div> -->
</template>
<script setup>
const { locales } = useI18n()
const switchLocalePath = useSwitchLocalePath()
</script>

<style>
.menu {

    /* border: 1px solid rgba(255, 255, 255, 0.125); */
}
</style>