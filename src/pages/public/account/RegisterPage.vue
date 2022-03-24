<template>
    <div class="registration-container">
       <first-step v-if="!isFirstStepDone" @registerFirstStepDone="nextStep"></first-step>
       <final-step v-else @registerSecondStepDone="registerUser"></final-step>
    </div>
</template>

<script>
import FinalStep from '@/components/register/FinalStep.vue'
import FirstStep from '@/components/register/FirstStep.vue'
export default {
    data() {
        return {
            isFirstStepDone: false,
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
            this.isFirstStepDone = true;
        },
        registerUser(userPersonalData) {
            console.log(userPersonalData)
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