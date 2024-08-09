<template>
    <div class="segment">
        <NuxtImg src="/img/welcome_img.jpg" height="750" />
        <article class="prose">
            <h1>
                {{ $t("welcome.title") }}
            </h1>
            <p>
                {{ $t('welcome.body') }}
            </p>
            <NuxtLink class="button" to="#bee-fit">{{ $t('welcome.button') }}</NuxtLink>
        </article>
    </div>
</template>