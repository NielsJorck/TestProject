<template>
    <Menu />
    <NuxtPage />
</template>
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
    @apply bg-primary-500 px-4 py-3 mt-4 uppercase font-bold no-underline hover:bg-primary-600 transition-all justify-self-center block md:inline-block text-center md:text-start outline outline-2 -outline-offset-4 outline-white hover:outline-primary-500 hover:outline-offset-2;
}

.dark .button {
    @apply outline-black hover:outline-primary-500;
}

p {
    @apply max-w-[60ch] text-pretty whitespace-break-spaces;
}

aside {
    @apply max-w-[45ch];
}

:where(h1) {
    @apply max-w-[35ch] text-pretty text-5xl font-bold uppercase;
}


:where(.segment) {
    @apply grid grid-cols-1 md:grid-cols-2 py-4 px-8 gap-y-4 gap-x-16 justify-around items-center justify-items-center md:justify-items-end w-full;


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