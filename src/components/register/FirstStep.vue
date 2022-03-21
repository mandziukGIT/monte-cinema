<template>
    <div class="first-step-container">
        <h1 class="headline">Ahoy You! <br> <span class="headline--accent">Care to register?</span></h1>
        <form-card @submit.prevent.native="formSubmit">
            <template #form-controls>
                <div class="form-field">
                    <base-input v-model="email" @blur="validateEmail" inputLabel="email" :isInvalid="isEmailError" placeholder="Enter your email"/>
                </div>
                <div class="form-field">
                    <password-input v-model="password" :isFormSubmitted="isFormSubmitted" :validate="true" @validate="setPasswordValidity" />
                </div>
            </template>
            <template #form-actions>
                <base-button :block="true" type="button">
                    <router-link :to="{name: 'login'}"> 
                        Log in instead
                    </router-link>
                </base-button>
                <base-button :block="true" buttonType="primary" :disabled="!isFormValid">Next step</base-button>
            </template>
        </form-card>
    </div>
</template>

<script>
import FormCard from '@/components/FormCard.vue'
import PasswordInput from '@/components/UI/PasswordInput.vue'
export default {
    components: {
        FormCard,
        PasswordInput
    },
    data() {
        return {
            email: '',
            password: '',
            isEmailError: false,
            isFormSubmitted: false,
            isPasswordError: false,
        }
    },
    methods: {
        formSubmit() {
            this.validateForm()
            if(this.isFormValid) {
                this.$emit("firstDone", { email: this.email, password: this.password })
            }
        },
        validateEmail() {
            this.isEmailError = !(/^\S+@\S+\.\S+$/.test(this.email))
        },
        validateForm() {
            this.isFormSubmitted = true
            this.validateEmail()
        },
        setPasswordValidity(event) {
            this.isPasswordError = event
        }
    },
    computed: {
        isFormValid() {
            return !this.isPasswordError && !this.isEmailError
        }
    }
}
</script>