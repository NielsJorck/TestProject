<template>
    <div class="segment dark">

        <article class="prose">
            <h2 class="uppercase">
                {{ $t('calculatorlead.title') }} </h2>
            <p>
                {{ $t('calculatorlead.body') }}
            </p>
            <NuxtLink class="button" to="/calorie-calculator">{{ $t('calculatorlead.button') }}</NuxtLink>
        </article>
        <NuxtImg src="/img/Forsh-Fitness-Calorie-Calculator.png" height="750" />
    </div>
</template>