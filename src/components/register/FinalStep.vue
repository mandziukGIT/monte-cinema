<template>
    <div class="second-step-container">
        <h1 class="headline">Great! <br> <span class="headline--accent">Now your name</span></h1>   
        <form-card @submit.prevent.native="formSubmit">
            <template #form-controls>
                <base-input v-model="firstName" id="email" inputLabel="first name" placeholder="eg. Kacper"/>
                <base-input v-model="lastName" id="lastName" inputLabel="last name" placeholder="eq. Mandziuk"/>
                <div>
                    <base-input v-model="birthDate" @blur="validateBirthDate" id="birthDate" :isValid="isBirthDateValid" inputLabel="date of birth" placeholder="DD/MM/YYYY"/>
                    <p class="input-caption" :class="[{'input-caption--error': !isFullAged}]">You should be minimum 18 year old</p>
                </div>
                <label for="privacyPolicy">
                    <input id="privacyPolicy" type="checkbox"/> I accept Privacy Policy
                </label>

            </template>
            <template #form-actions>
                <base-button :block="true" type="button" @click.native="$router.push({name: 'login'})">Log in instead</base-button>
                <base-button :block="true" buttonType="primary" >Register</base-button>
            </template>
        </form-card>
    </div>
</template>

<script>
import FormCard from '@/components/FormCard.vue'
export default {
    components: {
        FormCard,
    },
    data() {
        return {
            firstName: '',
            lastName: '',
            birthDate: '',
            isTouched: false,
            isFullAged: true,
            isBirthDateError: false
        }
    },
    methods: {
        formSubmit() {
            this.$emit("secondDone", {firstName: this.firstName, lastName: this.lastName, birthDate: this.birthDate})
        },
        validateDateFormat(date) {
            const dateMask = new RegExp('^(3[01]|[12][0-9]|0[1-9])/(1[0-2]|0[1-9])/[0-9]{4}$')
            return dateMask.test(date)
        },
        validateAge(date) {
            const fullAgeBoundary = new Date();
            fullAgeBoundary.setFullYear(fullAgeBoundary.getFullYear() - 18);
            const birthDate = new Date(date)
            if(fullAgeBoundary < birthDate) {
                this.isFullAged = false
            } else {
                this.isFullAged = true 
            }
            return !(fullAgeBoundary < birthDate)
        },
        validateBirthDate() {
            this.isTouched = true
            const birthDate = this.birthDate
            const isValidFormat = this.validateDateFormat(birthDate)
            const isFullAged = isValidFormat ? this.validateAge(birthDate) : false
            this.isBirthDateError = isFullAged && isValidFormat
        }
    },
    computed: {
        isBirthDateValid() {
            return this.isTouched ? !this.isBirthDateError : false
        }
    }
}
</script>

<style lang="scss" scoped>
/*TODO: unify this class and use on password componentx*/
.input-caption {
    font-family: "Roboto", sans-serif;
    font-weight: 400;
    font-size: 14px;
    color: $color-tuna;
    &--error {
        color: red
    }
}
</style>