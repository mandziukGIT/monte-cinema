<template>
    <div class="alert" :class="type">
        <img class="alert__icon" :src="require(`@/assets/images/${type}-icon.svg`)" />
        <p class="alert__message">
            <slot></slot>
        </p>
        <img class="alert__removal" src="@/assets/images/cancel-icon.svg" @click="$emit('close')"/>
    </div>
</template>

<script>
export default {
    props: {
        type: {
            type: String,
            required: true
        }
    }
}
</script>

<style lang="scss" scoped>
.alert {
    display: flex;
    font-family: "Roboto", sans-serif;
    font-weight: 400;
    font-size: 14px;
    &__message {
        padding-left: 10px;
        margin: auto 0;
    }
    &__removal {
        margin-left: auto;
        cursor: pointer;
    }
}
.error{
    padding: 10px;
    border-radius: 8px;
    border: 1px solid $color-cherry-red;
    color: $color-cherry-red;    
}
</style>
