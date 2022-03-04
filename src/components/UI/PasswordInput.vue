<template>
    <div class="input__wrapper">
        <input class="input__field" id="password" placeholder="Enter your password" :type="inputType"/>
        <img class="input__icon" :src="inputIcon" @click="toggleVisibility" @mousedown.prevent />
    </div>
</template>

<script>
export default {
    data() {
        return {
            isVisible: false
        }
    },
    methods: {
        toggleVisibility() {
            this.isVisible = !this.isVisible;
        }
    },
    computed: {
        inputType() {
            return this.isVisible ? 'password' : 'text';
        },
        inputIcon() {
            return require(`@/assets/images/icon-${ this.isVisible ? 'visible' : 'invisible'}.svg`)
        }
    }

}
</script>

<style lang='scss' scoped>
    .input {
        &__wrapper {
            position: relative;
        }
        &__icon {
            position: absolute;
            top: 50%;
            transform: translateY(-50%);
            right: 20px;
            cursor: pointer;
        }
    }
</style>