<template>
    <div class="segment">

        <article class="prose">
            <!-- <h2>
                JONAS // FORSHFITNESS
            </h2>
            <p>
                Jeg er startet som online coach, for at give andre en værdi i livet, de ikke vidste de manglede.

                Jeg startede selv helt fra bunden, og mit mål med fitness var at bygge en bedre selvtillid og en forbedret
                mental
                funktion. Grundlaget for dette er, at jeg i en langvarig periode, på 6 år havde en slem depression.

                Værktøjet til at komme ud af dette, var for mig – fitness.

                Jeg tog mig sammen og tog en enkelt armbøjning en dag, det gav mig en utrolig følelse af at have opnået
                noget
                godt
                for mig selv. Den ene armbøjning blev til 100 om dagen, efter en længere periode af opskalering.

                Jeg vil gerne bringe min rejse, min viden og min dedikation, til at bringe dig, fra hvor du er, til hvor du
                gerne
                ser dig selv være. Ved at bruge fitness som et redskab, frem for en kedelig opgave.

                Vi har en chance i livet til at opnå vores drømme, så hvorfor udsætte dem?
            </p> -->
            <h2>{{ $t('about.title') }}</h2>
            <p>{{ $t('about.body') }}</p>

            <h3>{{ $t('about.background.title') }}</h3>
            <p>{{ $t('about.background.body') }}</p>

            <h3>{{ $t('about.mission.title') }}</h3>
            <p>{{ $t('about.mission.body') }}</p>

            <h3>{{ $t('about.whyme.title') }}</h3>
            <p>{{ $t('about.whyme.body') }}</p>
            <NuxtLink to="#bee-fit" class="button">{{ $t('about.button') }}</NuxtLink>
        </article>
        <NuxtImg src="/img/Forsh-Fitness-Transformation.jpg"></NuxtImg>
    </div>
</template>