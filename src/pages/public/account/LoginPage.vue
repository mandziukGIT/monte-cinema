<template>
    <div class="container">
        <h1 class="headline">Hi there! <br> <span class="headline--accent">Care to log in?</span></h1>
        <form-card>
            <template #form-controls>
                <base-input v-model="email" inputLabel="email" placeholder="Enter your email"/>
                <password-input v-model="password" />
            </template>
            <template #form-actions>
                    <base-button :block="true" @click.native="$router.push({name: 'register'})">Register instead</base-button>
                    <base-button :block="true" buttonType="primary">Log in</base-button>
            </template>
        </form-card>
        <p class="info">Did you forget your password? <router-link to="" class="info--accent">Reset it now</router-link></p>
    </div>
</template>

<script>
import FormCard from '@/components/FormCard.vue'
import PasswordInput from '@/components/UI/PasswordInput.vue'
export default {
    components: {
        FormCard,
        PasswordInput,
    },
    data() {
        return {
            email: '',
            password: ''
        }
    }
}
</script>
<style lang="scss" scoped>
.container {
    max-width: 600px;
    margin: 0 auto;
    margin-top: 5rem;
}
.info {
    font-family: 'Roboto', monospace;
    font-weight: 400;
    margin-top: 3rem;
    &--accent {
        color: $color-cherry-red;
    }
    @include sm {
      text-align: center;
    }
}
</style>