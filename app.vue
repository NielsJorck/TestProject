<template>
    <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>Forsh Fitness - Personlig træning og coaching</title>
        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="">
        <link rel="preconnect" href="https://beefit-tracker.s3.eu-west-2.amazonaws.com">
        <link rel="preconnect" href="https://ajax.googleapis.com">


        <link rel="icon" :href="`${baseUrl}/img/favicon/FF-Favicon-150x150.jpg`" sizes="32x32">
        <link rel="icon" :href="`${baseUrl}/img/favicon/FF-Favicon-300x300.jpg`" sizes="192x192">
        <link rel="apple-touch-icon" :href="`${baseUrl}/img/favicon/FF-Favicon-300x300.jpg`">
        <link rel="stylesheet"
            href="https://fonts.googleapis.com/css2?family=Recursive:slnt,wght,CASL,CRSV,MONO@-15..0,300..1000,0..1,0..1,0..1&amp;display=swap">
        <meta name="msapplication-TileImage" :content="`${baseUrl}/img/favicon/FF-Favicon-300x300.jpg`">
        <meta name="description"
            content="Få en dedikeret coach, der deler dit ønske om forandring. Personlige planer tilpasset dig og din træningslokation, fokuseret på vægttab, muskelbygning, energi, sundhed og mental styrke.">
    </Head>
    <!-- <Menu /> -->
    <NuxtPage />
</template>
<script setup>
const baseUrl = process.env.NUXT_APP_BASE_URL ?? '';
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
    @apply bg-primary-500 px-4 py-3 mt-4 uppercase font-bold no-underline hover:bg-primary-600 transition-colors justify-self-center block md:inline-block text-center md:text-start;
}

p {
    @apply max-w-[60ch] text-pretty;
}

aside {
    @apply max-w-[45ch];
}

:where(h1) {
    @apply max-w-[35ch] text-pretty text-5xl font-bold uppercase;
}


:where(.segment) {
    @apply grid grid-cols-1 md:grid-cols-2 p-4 gap-y-4 gap-x-16 justify-around items-center justify-items-center md:justify-items-end;


    h1 {
        @apply mt-4;
    }

    h1,
    h2,
    h3,
    h4 {
        @apply text-center md:text-start;
    }

    &.dark {
        @apply bg-black text-white;

        article,
        h1,
        h2 {
            @apply text-white;
        }
    }

    *+* {
        @apply md:justify-self-start;
    }
}
</style>