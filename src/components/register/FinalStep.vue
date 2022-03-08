<template>
    <div class="second-step-container">
        <h1 class="headline">Great! <br> <span class="headline--accent">Now your name</span></h1>   
        <form-card @submit.prevent.native="formSubmit">
            <template #form-controls>
                <base-input v-model="firstName" id="email" inputLabel="first name" placeholder="eg. Kacper"/>
                <base-input v-model="lastName" id="lastName" inputLabel="last name" placeholder="eq. Mandziuk"/>
                <div>
                    <base-input v-model="birthDate" id="birthDate" inputLabel="date of birth" placeholder="DD/MM/YYYY"/>
                    <p class="text-caption">You should be minimum 18 year old</p>
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
            birthDate: ''
        }
    },
    methods: {
        formSubmit() {
            this.$emit("secondDone", {firstName: this.firstName, lastName: this.lastName, birthDate: this.birthDate})
        }
    }
}
</script>

<style lang="scss" scoped>
/*TODO: unify this class and use on password componentx*/
.text-caption {
    font-family: "Roboto", sans-serif;
    font-weight: 400;
    font-size: 14px;
    color: $color-tuna
}
</style>