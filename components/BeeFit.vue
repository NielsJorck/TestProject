<template>
    <div id="bee-fit">
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
                    <div id="beefit-submit-button" class="lead-form-button submit" on-click="submitForm()">Kom i gang nu!
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
</template>

<script lang="ts" setup>
useHead({
    // title: 'Forsh Fitness',
    // meta: [
    //     {
    //         name: 'description',
    //         content: 'Forsh Fitness'
    //     }
    // ],
    link: [
        {
            href: "https://fonts.googleapis.com/css2?family=Mulish",
            rel: "stylesheet"
        },
        {
            href: "https://beefit-tracker.s3.eu-west-2.amazonaws.com/website-components/beefit-lead-form/v8/beefit-lead-form-style.css",
            rel: "stylesheet"
        }],
    script: [
        {
            src: "https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"
        },
        {
            src: "https://beefit-tracker.s3.eu-west-2.amazonaws.com/website-components/beefit-lead-form/v8/beefit-lead-form-min.js"
        }
    ],
})

onMounted(() => {
    const step1 = {
        title: "Hvad er dit drømmemål?",
        inputs: [
            {
                id: "goal",
                desc: "goal",
                type: "options",
                config: {
                    goToNextOnSelect: true,
                },
                options: [
                    { label: "Vægttab", value: "Vægttab" },
                    { label: "Muskelopbygning", value: "Muskelopbygning" },
                    { label: "Vægttab og muskelopbygning", value: "Vægttab og muskelopbygning" },
                    { label: "Andet", value: "Andet" }
                ],
                result: undefined, // used internally.
            },
        ],
    };
    const step2 = {
        title: "Jeg er...",
        inputs: [
            {
                id: "gender",
                desc: "Gender",
                type: "options",
                config: {
                    goToNextOnSelect: true,
                },
                options: [
                    { label: "Mand", value: "Mand" },
                    { label: "Kvinde", value: "Kvinde" }
                ],
                result: undefined, // used internally
            },
        ],
    };
    const step3 = {
        title: "Hvor gammel er du?",
        inputs: [
            {
                id: "age",
                desc: "Age",
                type: "options",
                config: {
                    goToNextOnSelect: true,
                },
                options: [
                    { label: "Under 18 år", value: "Under 18" },
                    { label: "18-25 år", value: "18-25" },
                    { label: "26-35 år", value: "26-35" },
                    { label: "Over 35 år", value: "35+" },
                ],
                result: undefined, // used internally
            },
        ],
    };
    const step4 = {
        title: "Er du klar til at investere i dig selv?",
        inputs: [
            {
                id: "investere",
                desc: "Investere",
                type: "options",
                config: {
                    goToNextOnSelect: true,
                },
                options: [
                    { label: "Ja", value: "Ja" },
                    { label: "Nej", value: "Nej" },
                    { label: "Måske", value: "Måske" }
                ],
                result: undefined, // used internally
            },
        ],
    };
    const step5 = {
        title: "Fortæl mig lidt om dig selv..",
        inputs: [
            {
                id: "fortael-text",
                desc: "Fortael Text",
                type: "textarea",
                config: {
                    goToNextOnSelect: true,
                    placeholder: "Skriv her.."
                },
                result: undefined, // used internally
            },
        ],
    };
    const step6 = {
        title: "Hvad drømmer du om at opnå inden for 6-12 måneder?",
        inputs: [
            {
                id: "droemme-text",
                desc: "Droemme Text",
                type: "textarea",
                config: {
                    goToNextOnSelect: true,
                    placeholder: "Skriv her.."
                },
                result: undefined, // used internally
            },
        ],
    };
    const step7 = {
        title: "Hvor vil du kontaktes?",
        inputs: [
            {
                id: "kontaktes",
                desc: "Kontaktes",
                type: "options",
                config: {
                    goToNextOnSelect: true,
                },
                options: [
                    { label: "Telefon", value: "Telefon" },
                    { label: "Messenger", value: "Messenger" },
                    { label: "Instagram", value: "Instagram" }
                ],
                result: undefined, // used internally
            },
        ],
    };
    const step8 = {
        title: "Dine kontaktoplysninger:",
        inputs: [
            {
                id: "name",
                desc: "Fulde Navn",
                type: "text",
                config: {
                    icon: "https://beefit-tracker.s3.eu-west-2.amazonaws.com/website-components/beefit-lead-form/v1/profile.svg",
                    placeholder: "Dit fulde navn",
                },
                result: undefined, // used internally
            },
            {
                id: "email",
                desc: "Email",
                type: "text",
                config: {
                    icon: "https://beefit-tracker.s3.eu-west-2.amazonaws.com/website-components/beefit-lead-form/v1/mail.svg",
                    placeholder: "Din email",
                },
                result: undefined, // used internally
            },
            {
                id: "phone",
                desc: "Telefonnummer",
                type: "text",
                config: {
                    icon: "https://beefit-tracker.s3.eu-west-2.amazonaws.com/website-components/beefit-lead-form/v1/phone.svg",
                    placeholder: "Dit telefonnummer",
                },
                result: undefined, // used internally
            },
            {
                id: "instagram",
                desc: "Instagram",
                type: "text",
                config: {
                    icon: "https://beefit-tracker.s3.eu-west-2.amazonaws.com/website-components/beefit-lead-form/v1/instagram.png",
                    placeholder: "Din instagram",
                },
                result: " ", // used internally
            }
        ],
    };
    const leadForm = {
        id: "my-lead-form",
        endpoint: "https://mainserver-coach.herokuapp.com/api/lead/webhook?api_key=ws-c49cd414-fcc8-4d9f-8fa8-cddef9db541d",
        submitText: "Kom i gang nu",
        enableFacebookPixel: true,
        completeText: "Tusind tak, jeg kontakter dig hurtigst muligt.",
        steps: [step1, step2, step3, step4, step5, step6, step7, step8],
    };
    const result = {};
    setTimeout(function () {
        const form1 = new BeefitLeadForm("example-lead-form", leadForm);
    }, 1);

})
</script>
<style>
.beefit-lead-form .button-label h2 {
    font-size: 1em;
    font-family: 'Mulish', Sans-Serif;
    line-height: normal;
    margin: 0px;
    font-weight: bold;
    color: black;
}

.beefit-lead-form {
    font-family: 'Mulish', Sans-Serif;
    max-width: initial;
    background: transparent;
    border-radius: 10px;
    padding: 25px;
    margin-top: 50px;
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
    height: 9px;
    background: white;
    width: 20%;
    border-radius: 4px;
    transition: width 0.3s;
}

.beefit-lead-form .button-label {
    color: white;
    background: white;
}

.beefit-lead-form .radio-label:checked+.button-label {
    background: rgb(69, 69, 69);
    color: white !important;
}

.beefit-lead-form .radio-label:checked+.button-label h2 {
    color: white !important;
}

.beefit-lead-form .button-container .lead-form-button.next {
    background: white;
    color: black;
}

.beefit-lead-form .button-container .lead-form-button.next:hover {
    background: black;
    color: #ffffff;
    box-shadow: 0 3px 10px rgb(0 0 0 / 20%), inset 0 -3px 0 rgb(0 0 0 / 32%);
}

.beefit-lead-form .button-container .lead-form-button.previous {
    background: white;
    color: #545454;
}

.beefit-lead-form .complete-text {
    text-align: center;
    margin-top: -10px;
    color: white;
    font-size: 20px;
    font-weight: bold;
}
</style>