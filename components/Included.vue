<template>
    <div class="segment dark">
        <article class="prose">
            <h2 class="uppercase">
                {{ $t('included.title') }}
            </h2>
            <ul class="list-none ps-0">
                <li class="ps-0">
                    <Icon name="fa6-solid:comments" class="min-w-6" />
                    {{ $t('included.1') }}
                </li>
                <li class="ps-0">
                    <Icon name="fa6-solid:camera" class="min-w-6" /> {{ $t('included.2') }}
                </li>
                <li class="ps-0">
                    <Icon name="fa6-solid:utensils" class="min-w-6" /> {{ $t('included.3') }}
                </li>
                <li class="ps-0">
                    <Icon name="fa6-solid:dumbbell" class="min-w-6" /> {{ $t('included.4') }}
                </li>
                <li class="ps-0">
                    <Icon name="fa6-solid:clipboard-list" class="min-w-6" /> {{ $t('included.5') }}
                </li>
                <li class="ps-0">
                    <Icon name="fa6-solid:comment-dots" class="min-w-6" /> {{ $t('included.6') }}
                </li>
                <li class="ps-0">
                    <Icon name="fa6-solid:mobile-screen-button" class="min-w-6" /> {{ $t('included.7') }}
                </li>
                <li class="ps-0">
                    <Icon name="fa6-solid:star" class="min-w-6" /> {{ $t('included.8') }}
                </li>
            </ul>
            <NuxtLink class="button" to="#bee-fit">{{ $t('included.button') }}</NuxtLink>
        </article>
        <NuxtImg src="/img/Forsh-Fitness-App.png" width="550" height="550" />
    </div>
</template>