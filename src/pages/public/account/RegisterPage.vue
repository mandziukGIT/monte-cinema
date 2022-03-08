<template>
    <div class="registration-container">
       <first-step v-if="!isFirstDone" @firstDone="nextStep"></first-step>
       <final-step v-else @secondDone="registerUser"></final-step>
    </div>
</template>

<script>
import FinalStep from '@/components/register/FinalStep.vue'
import FirstStep from '@/components/register/FirstStep.vue'
export default {
    data() {
        return {
            isFirstDone: false,
            userCredentials: null
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
        registerUser(userPersonalData) {
            const registerData = { ...this.userCredentials, ...userPersonalData}
            console.log(registerData)
            //endpoint call
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