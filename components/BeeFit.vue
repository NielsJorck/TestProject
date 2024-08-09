
<script lang="ts" setup>
useHead({
    link: [
        {
            href: "https://fonts.googleapis.com/css2?family=Mulish",
            rel: "stylesheet"
        },
        {
            href: "https://beefit-tracker.s3.eu-west-2.amazonaws.com/website-components/beefit-lead-form/v8/beefit-lead-form-style.css",
            rel: "stylesheet"
        }
    ],
    script: [
        {
            src: "https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"
        },
        {
            src: "https://beefit-tracker.s3.eu-west-2.amazonaws.com/website-components/beefit-lead-form/v8/beefit-lead-form-min.js"
        }
    ],
})


const { t } = useI18n()
onMounted(() => {
    const step1 = {
        title: t('beefit.step1.title'),
        inputs: [
            {
                id: "goal",
                desc: "goal",
                type: "options",
                config: {
                    goToNextOnSelect: true,
                },
                options: [
                    { label: t('beefit.step1.option1'), value: "Vægttab" },
                    { label: t('beefit.step1.option2'), value: "Muskelopbygning" },
                    { label: t('beefit.step1.option3'), value: "Vægttab og muskelopbygning" },
                    { label: t('beefit.step1.option4'), value: "Andet" }
                ],
                result: undefined, // used internally.
            },
        ],
    };
    const step2 = {
        title: `${t('beefit.step2.title')}`,
        inputs: [
            {
                id: "gender",
                desc: "Gender",
                type: "options",
                config: {
                    goToNextOnSelect: true,
                },
                options: [
                    { label: t('beefit.step2.option1'), value: "Mand" },
                    { label: t('beefit.step2.option2'), value: "Kvinde" }
                ],
                result: undefined, // used internally
            },
        ],
    };
    const step3 = {
        title: t('beefit.step3.title'),
        inputs: [
            {
                id: "age",
                desc: "Age",
                type: "options",
                config: {
                    goToNextOnSelect: true,
                },
                options: [
                    { label: t('beefit.step3.option1'), value: "Under 18" },
                    { label: t('beefit.step3.option2'), value: "18-25" },
                    { label: t('beefit.step3.option3'), value: "26-35" },
                    { label: t('beefit.step3.option4'), value: "35+" },
                ],
                result: undefined, // used internally
            },
        ],
    };
    const step4 = {
        title: t('beefit.step4.title'),
        inputs: [
            {
                id: "investere",
                desc: "Investere",
                type: "options",
                config: {
                    goToNextOnSelect: true,
                },
                options: [
                    { label: t('beefit.step4.option1'), value: "Ja" },
                    { label: t('beefit.step4.option2'), value: "Nej" },
                    { label: t('beefit.step4.option3'), value: "Måske" }
                ],
                result: undefined, // used internally
            },
        ],
    };
    const step5 = {
        title: t('beefit.step5.title'),
        inputs: [
            {
                id: "fortael-text",
                desc: "Fortael Text",
                type: "textarea",
                config: {
                    goToNextOnSelect: true,
                    placeholder: t('beefit.step5.placeholder')
                },
                result: undefined, // used internally
            },
        ],
    };
    const step6 = {
        title: t('beefit.step6.title'),
        inputs: [
            {
                id: "droemme-text",
                desc: "Droemme Text",
                type: "textarea",
                config: {
                    goToNextOnSelect: true,
                    placeholder: t('beefit.step6.placeholder')
                },
                result: undefined, // used internally
            },
        ],
    };
    const step7 = {
        title: t('beefit.step7.title'),
        inputs: [
            {
                id: "kontaktes",
                desc: "Kontaktes",
                type: "options",
                config: {
                    goToNextOnSelect: true,
                },
                options: [
                    { label: t('beefit.step7.option1'), value: "Telefon" },
                    { label: t('beefit.step7.option2'), value: "Messenger" },
                    { label: t('beefit.step7.option3'), value: "Instagram" }
                ],
                result: undefined, // used internally
            },
        ],
    };
    const step8 = {
        title: t('beefit.step8.title'),
        inputs: [
            {
                id: "name",
                desc: "Fulde Navn",
                type: "text",
                config: {
                    icon: "https://beefit-tracker.s3.eu-west-2.amazonaws.com/website-components/beefit-lead-form/v1/profile.svg",
                    placeholder: t('beefit.step8.name'),
                },
                result: undefined, // used internally
            },
            {
                id: "email",
                desc: "Email",
                type: "text",
                config: {
                    icon: "https://beefit-tracker.s3.eu-west-2.amazonaws.com/website-components/beefit-lead-form/v1/mail.svg",
                    placeholder: t('beefit.step8.email'),
                },
                result: undefined, // used internally
            },
            {
                id: "phone",
                desc: "Telefonnummer",
                type: "text",
                config: {
                    icon: "https://beefit-tracker.s3.eu-west-2.amazonaws.com/website-components/beefit-lead-form/v1/phone.svg",
                    placeholder: t('beefit.step8.phone'),
                },
                result: undefined, // used internally
            },
            {
                id: "instagram",
                desc: "Instagram",
                type: "text",
                config: {
                    icon: "https://beefit-tracker.s3.eu-west-2.amazonaws.com/website-components/beefit-lead-form/v1/instagram.png",
                    placeholder: t('beefit.step8.instagram'),
                },
                result: " ", // used internally
            }
        ],
    };
    const leadForm = {
        id: "my-lead-form",
        endpoint: "https://mainserver-coach.herokuapp.com/api/lead/webhook?api_key=ws-c49cd414-fcc8-4d9f-8fa8-cddef9db541d",
        submitText: t('beefit.submit.button'),
        enableFacebookPixel: true,
        completeText: t('beefit.submit.completetext'),
        steps: [step1, step2, step3, step4, step5, step6, step7, step8],
    };
    const result = {};
    setTimeout(function () {
        const form1 = new BeefitLeadForm("example-lead-form", leadForm);
    }, 1);

})
</script>

<template>
    <div class="segment dark">
        <NuxtImg src="/img/image5-2-e1704805299149.jpeg" height="550" />
        <div class="prose text-white">
            <h1 class="text-center">{{ $t('beefit.title') }}</h1>
            <p>{{ $t('beefit.body') }}</p>
            <div class="grid justify-center pb-8">
                <Icon name="fa6-solid:arrow-down-long" size="2em"></Icon>
            </div>
            <div id="bee-fit" class="max-w-full overflow-hidden bg-black text-white">
                <div class="beefit-lead-form" id="example-lead-form">
                    <div class="form-content">
                        <div class="progressbar">
                            <div class="progress"></div>
                        </div>
                        <form>
                            <div class="step-container"></div>
                        </form>
                        <div class="button-container">
                            <div class="lead-form-button previous" on-click="previousStep(); trackSubmit()">Tilbage</div>
                            <div class="lead-form-button next" on-click="nextStep(); trackSubmit()">Næste</div>
                            <div id="beefit-submit-button" class="lead-form-button submit" on-click="submitForm()">Kom i
                                gang
                                nu!
                            </div>
                        </div>
                    </div>
                    <div class="loading-step" style="display: none">
                        <div class="lds-dual-ring"></div>
                    </div>
                    <div class="complete-step" style="display: none">
                        <div class="complete-checkmark">
                            <svg class="checkmark" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52">
                                <circle class="checkmark__circle" cx="26" cy="26" r="25" fill="none" />
                                <path class="checkmark__check" fill="none" d="M14.1 27.2l7.1 7.2 16.7-16.8" />
                            </svg>
                        </div>
                        <div class="complete-text">COMPLETE 🎉</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style>
.beefit-lead-form {
    @apply font-serif bg-transparent p-0;

    /* font-family: 'Mulish', Sans-Serif;
    max-width: initial;
    background: transparent;
    border-radius: 10px;
    padding: 25px;
    margin-top: 12px; */



    /** This is for non checked - Add styling for :checked */
    .button-label {
        @apply bg-white hover:bg-primary-200 text-black shadow-none rounded-none hover:shadow-none select-none;

        h2 {
            @apply text-black;
        }
    }

    .radio-label:checked {
        &+.button-label {
            @apply bg-primary-500 hover:bg-primary-600 text-white;

            &+h2 {
                @apply text-white;
            }
        }
    }

    .button-container {
        .lead-form-button.next {
            @apply bg-primary-500 hover:bg-primary-600 hover:text-black text-black shadow-none rounded-none hover:shadow-none select-none;
        }

        .lead-form-button.previous {
            @apply bg-white hover:bg-primary-200 text-black shadow-none rounded-none hover:shadow-none select-none;
            /* background: white;
            color: #545454; */
        }
    }

    .progressbar {
        .progress {
            @apply bg-primary-500;
        }
    }

    .textarea-input {
        @apply text-black focus:ring-0 focus:outline-none;
    }

    .lds-dual-ring:after {
        @apply border-t-primary-500 border-b-primary-500;
    }

    .checkmark {
        /* @apply shadow-primary-500; */

        animation: fill-custom .4s ease-in-out .4s forwards, scale .3s ease-in-out .9s both;
    }

    .checkmark__circle {
        @apply stroke-primary-500;
    }
}

@keyframes fill-custom {
    100% {
        @apply shadow-[inset_0_0_0_80px] shadow-primary-500;
    }
}

/* .beefit-lead-form .button-label h2 {
    font-size: 1em;
    font-family: 'Mulish', Sans-Serif;
    line-height: normal;
    margin: 0px;
    font-weight: bold;
    color: black;
}



.beefit-lead-form .progressbar {

    height: 9px;
    background: rgb(117, 117, 117);
    width: 100%;
    border-radius: 4px;
}

.beefit-lead-form .step .lead-form-title {
    margin-top: 10px;
    font-size: 18px;
    font-weight: bold;
    color: white;
}

.beefit-lead-form .progressbar .progress {
    @apply bg-primary-500;
    height: 9px;
    width: 20%;
    border-radius: 4px;
    transition: width 0.3s;
}



.beefit-lead-form .radio-label:checked+.button-label {
    background: rgb(69, 69, 69);
    color: white !important;
}

.beefit-lead-form .radio-label:checked+.button-label h2 {
    color: white !important;
}



.beefit-lead-form .button-container .lead-form-button.next:hover {
    background: black;
    color: #ffffff;
    box-shadow: 0 3px 10px rgb(0 0 0 / 20%), inset 0 -3px 0 rgb(0 0 0 / 32%);
}



.beefit-lead-form .complete-text {
    text-align: center;
    margin-top: -10px;
    color: white;
    font-size: 20px;
    font-weight: bold;
} */
</style>