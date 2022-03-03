<template>
    <div class="container">
        <h1 class="page-heading">Hi there! <br> <span>Care to log in?</span></h1>
        <form-card>
            <template #form-controls>
                <label class="control-label">email</label>
                <input type="text"/>
                <label class="control-label">password</label>
                <input type="password"/>
            </template>
            <template #form-actions>
                <base-button>Register instead</base-button>
                <base-button buttonType="primary">Log in</base-button>
            </template>
        </form-card>
        <p class="info">Did you forget your password? <router-link to="">Reset it now</router-link></p>
    </div>
</template>

<script>
import FormCard from '@/components/FormCard.vue'
export default {
    components: {
        FormCard
    }
}
</script>
<style lang="scss" scoped>

.page-heading {
    font-size: 80px;
    span {
        color: $color-jumbo;
    }
}
.container {
    font-family: 'Eczar', serif;
    font-weight: 600;
    max-width: 600px;
    margin: 0 auto;
    margin-top: 5rem;
}
    input {
        width: 100%;
        margin-bottom: 1rem;
        margin-top: 0.5rem;
    }
    .control-label {
        font-family: 'RobotoMono', monospace;
        font-weight: 700;
        color: $color-bittersweet;
        text-transform: uppercase;
        font-size: 14px;
    }
.info {
    font-family: 'Roboto', monospace;
    font-weight: 400;
    margin-top: 3rem;
    a {
        color: $color-cherry-red;
    }
}
</style>