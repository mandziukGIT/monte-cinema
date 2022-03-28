<template>
    <div class="container">
        <h1 class="headline">Hi there! <br> <span class="headline--accent">Care to log in?</span></h1>
        <form-card @submit.prevent.native="formSubmit">
            <template #form-controls>
                <base-input v-model="email" inputLabel="email" placeholder="Enter your email"/>
                <password-input v-model="password" />
            </template>
            <template #form-actions>
                <base-button block type="button">
                    <router-link :to="{name: 'register'}">
                        Register instead
                    </router-link>
                </base-button>
                <base-button block type="submit" buttonStyle="primary">Log in</base-button>
            </template>
            <template #form-errors>
                <base-alert v-if="isLoginError" type="error"  @close="isLoginError = false">
                    Invalid user credentials. Try again
                </base-alert>
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
    metaInfo: {
        title: "Login",
        titleTemplate: null
    },
    data() {
        return {
            email: '',
            password: '',
            isLoginError: false
        }
    },
    methods: {
        async formSubmit() {
            try {
               await this.$store.dispatch("user/login", { email: this.email, password: this.password})
               this.$router.push({name: "home"})
            } catch {
                this.isLoginError = true
            }
            
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
