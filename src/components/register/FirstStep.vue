<template>
    <div class="first-step-container">
        <h1 class="headline">Ahoy You! <br> <span class="headline--accent">Care to register?</span></h1>
        <form-card @submit.prevent.native="formSubmit">
            <template #form-controls>
                <div class="form-field">
                    <base-input v-model="email" @blur="validateEmail" inputLabel="email" :isValid="isEmailError" placeholder="Enter your email"/>
                </div>
                <div class="form-field">
                    <password-input v-model="password" :validate="true"/>
                </div>
            </template>
            <template #form-actions>
                <base-button :block="true" type="button" @click.native="$router.push({name: 'login'})">Log in instead</base-button>
                <base-button :block="true" buttonType="primary" @click="formSubmit">Next step</base-button>
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
            isEmailError: false,
            password: ''
        }
    },
    methods: {
        formSubmit() {
            this.$emit("firstDone", {email: this.email, password: this.password})
        },
        validateEmail() {

            this.isEmailError = !(/^\S+@\S+\.\S+$/.test(this.email))
        }
    }
}
</script>

<style scoped>
</style>