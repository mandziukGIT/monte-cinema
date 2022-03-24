<template>
    <div class="registration-container">
       <first-step v-if="!isFirstDone" :error="isRegistrationError" @firstDone="nextStep" @close="isRegistrationError = false"></first-step>
       <final-step v-else @secondDone="registerUser"></final-step>
    </div>
</template>

<script>
import FinalStep from '@/components/register/FinalStep.vue'
import FirstStep from '@/components/register/FirstStep.vue'
export default {
    metaInfo: {
        title: "Register",
        titleTemplate: null
    },
    data() {
        return {
            isFirstDone: false,
            userCredentials: null,
            isRegistrationError: false
        }
    },
    components: {
        FinalStep,
        FirstStep
    },
    methods: {
        nextStep(userCredentials) {
            this.userCredentials = userCredentials;
            this.isFirstDone = true;
        },
        async registerUser(userPersonalData) {
            try {
                await this.$store.dispatch('user/register', { ...userPersonalData, ...this.userCredentials})
                this.$router.push({name: 'home'})
            } catch {
                this.isRegistrationError = true
                this.isFirstDone = false
            }
        }
    }
}
</script>

<style lang="scss" scoped>
.registration-container {
     max-width: 600px;
    margin: 0 auto;
}
</style>
