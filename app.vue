<template>
    <NuxtPage />
</template>
<script setup>
const baseUrl = process.env.NUXT_APP_BASE_URL ?? '';
useHead({
    link: [{
        rel: 'icon',
        href: `${baseUrl}/img/favicon/FF-Favicon-150x150.jpg`,
        sizes: '32x32'
    },
    {
        rel: 'icon',
        href: `${baseUrl}/img/favicon/FF-Favicon-300x300.jpg`,
        sizes: '192x192'
    },
    {
        rel: 'apple-touch-icon',
        href: `${baseUrl}/img/favicon/FF-Favicon-300x300.jpg`
    }],
    meta: [
        {
            name: 'msapplication-TileImage',
            content: `${baseUrl}/img/favicon/FF-Favicon-300x300.jpg`
        }]
})
</script>
<style>
body {
    /* @apply dark:bg-black dark:text-white; */
}

/* * {
    outline: 1px solid green;
} */
.button {
    @apply bg-red-500 px-4 py-2 mt-4 uppercase font-bold;
}

p {
    @apply max-w-[60ch] text-pretty;
}

aside {
    @apply max-w-[45ch];
}

h1 {
    @apply max-w-[35ch] text-pretty;
}
</style>