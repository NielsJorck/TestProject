<template>
    <Menu />
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
    },
    {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Recursive:slnt,wght,CASL,CRSV,MONO@-15..0,300..1000,0..1,0..1,0..1&display=swap'
    },
    {
        rel: 'preconnect',
        href: 'https://fonts.googleapis.com'
    },
    {
        rel: 'preconnect',
        href: 'https://fonts.gstatic.com',
        crossorigin: true
    }
    ],
    meta: [
        {
            name: 'msapplication-TileImage',
            content: `${baseUrl}/img/favicon/FF-Favicon-300x300.jpg`
        },
        {
            name: "description",
            content: "Få en dedikeret coach, der deler dit ønske om forandring. Personlige planer tilpasset dig og din træningslokation, fokuseret på vægttab, muskelbygning, energi, sundhed og mental styrke."
        }],
    title: 'Forsh Fitness - Personlig træning og coaching',
})
</script>
<style>
body {
    /* background-image: url('/img/image5-2-e1704805299149.jpeg');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center; */
    /* @apply dark:bg-black dark:text-white; */
}

/* * {
    outline: 1px solid green;
} */
.button {
    @apply bg-primary-500 px-4 py-2 mt-4 uppercase font-bold no-underline;
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