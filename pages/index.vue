<template>
    <BeeFit />
    <Welcome />
    <AboutMe />
    <Included />
    <CalculatorLead />
    
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