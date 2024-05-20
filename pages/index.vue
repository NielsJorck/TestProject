<template>
    <BeeFit />
    <Welcome />
    <AboutMe />
    <Included />
    <CalculatorLead />
    
</template>

<script setup>

useHead({
link: [{
    rel: 'icon',
    href: '/img/favicon/FF-Favicon-150x150.jpg',
    sizes: '32x32'
},
{
    rel: 'icon',
    href: '/img/favicon/FF-Favicon-300x300.jpg',
    sizes: '192x192'
},
{
    rel: 'apple-touch-icon',
    href: '/img/favicon/FF-Favicon-300x300.jpg'
}],
meta: [
{
    name: 'msapplication-TileImage',
    content: '/img/favicon/FF-Favicon-300x300.jpg'
}]
})
</script>