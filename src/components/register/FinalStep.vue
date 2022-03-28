<template>
    <div class="second-step-container">
        <h1 class="headline">Great! <br> <span class="headline--accent">Now your name</span></h1>   
        <form-card @submit.prevent.native="formSubmit">
            <template #form-controls>
                <base-input 
                    v-model="firstName" 
                    id="email" 
                    inputLabel="first name" 
                    placeholder="eg. Kacper" 
                    @blur="validateFirstName" 
                    :isInvalid="isFirstNameError"
                />
                <base-input 
                    v-model="lastName" 
                    id="lastName" 
                    inputLabel="last name" 
                    placeholder="eq. Mandziuk" 
                    @blur="validateLastName" 
                    :isInvalid="isLastNameError"
                    />
                <div>
                    <base-input 
                        v-model="birthDate" 
                        @blur="validateBirthDate" 
                        id="birthDate" 
                        :isInvalid="isBirthDateError" 
                        inputLabel="date of birth" 
                        placeholder="DD/MM/YYYY"
                    />
                    <p class="input-caption" :class="[{'input-caption--error': isFullAgeError}]">You should be minimum 18 year old</p>
                </div>
                <label for="privacyPolicy" :class="[{'input-caption--error': isInvalidPrivacyPolicy}]">
                    <input id="privacyPolicy" type="checkbox" v-model="isPPChecked"/> I accept Privacy Policy
                </label>

            </template>
            <template #form-actions>
                <base-button block type="button">
                    <router-link :to="{name: 'login'}"> 
                        Log in instead
                    </router-link>
                </base-button>
                <base-button block type="submit" buttonStyle="primary" :disabled="!isFormValid">Register</base-button>
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
            isSubmitted: false,
            isPPChecked: false,
            isFullAgeError: false,
            isBirthDateError: false,
            isFirstNameError: false,
            isLastNameError: false,
        }
    },
    methods: {
        formSubmit() {
            this.validateForm()
            if(this.isFormValid) {
                this.$emit("registerSecondStepDone", {firstName: this.firstName, lastName: this.lastName, birthDate: this.birthDate})
                this.$router.push({name: 'home'})
            } 
        },
        validateDateFormat(date) {
            const dateMask = new RegExp('^(3[01]|[12][0-9]|0[1-9])/(1[0-2]|0[1-9])/[0-9]{4}$')
            return dateMask.test(date)
        },
        validateAge(date) {
            const fullAgeBoundary = new Date();
            fullAgeBoundary.setFullYear(fullAgeBoundary.getFullYear() - 18);
            const [day, month, year] = date.split('/')
            const birthDate = new Date(year, month - 1, day)
            if(fullAgeBoundary < birthDate) {
                this.isFullAgeError = true
            } else {
                this.isFullAgeError = false 
            }
            return !(fullAgeBoundary < birthDate)
        },
        validateBirthDate() {
            const birthDate = this.birthDate
            const isValidFormat = this.validateDateFormat(birthDate)
            const isFullAged = isValidFormat ? this.validateAge(birthDate) : false
            this.isBirthDateError = !(isFullAged && isValidFormat)
        },
        validateFirstName() {
           this.isFirstNameError = !this.firstName 
        },
        validateLastName() {
            this.isLastNameError = !this.lastName
        },
        validateForm() {
            this.isSubmitted = true
            this.validateBirthDate()
            this.validateFirstName()
            this.validateLastName()
        }

    },
    computed: {
        isFormValid() {
            return  !this.isBirthDateError && !this.isFirstNameError && !this.isLastNameError && !this.isInvalidPrivacyPolicy
        },
        isInvalidPrivacyPolicy() {
            return this.isSubmitted && !this.isPPChecked
        }
    }
}
</script>

<style lang="scss" scoped>
.input-caption {
    font-family: "Roboto", sans-serif;
    font-weight: 400;
    font-size: 14px;
    color: $color-tuna;
    &--error {
        color: $color-cherry-red
    }
}
</style>