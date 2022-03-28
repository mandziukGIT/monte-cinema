<template>
    <div class="base-input">
        <label class="base-input__label" :for="$attrs.id">{{inputLabel}}</label>
        <input class="base-input__input" v-bind="$attrs" v-on="inputListeners" :value="value" :class="[{'base-input__input--error': isInvalid}]"/>
    </div>
</template>

<script>
export default {
    inheritAttrs: false,
    props: {
        value: {
            type: String,
            required: true
        },
        inputLabel: {
            type: String,
            required: false
        },
        isInvalid: {
            type: Boolean,
            required: false
        }
    },
    computed: {
        inputListeners() {
            return {
                ...this.$listeners,
                input: (event) => this.$emit('input', event.target.value),
                blur: (event) => this.$emit('blur', event.target.value),
            }
        }
    }
}
</script>

<style lang="scss" scoped>

    .base-input {
        &__label {
            @include text-label
        }
        &__input {
            font-family: "Roboto", sans-serif;
            font-weight: 400;
            font-size: 18px;
            box-sizing: border-box;
            border: none;
            border-radius: 8px;
            background-color: #F0F0F0;
            width: 100%;
            &:hover {
                background-color: #E5E5E5;
            }
            &:active, &:focus {
                outline: none;
                background-color: rgba(47, 128, 237, 0.1);
                box-shadow: inset 0px 0px 0px 1px #2F80ED;
            }
            margin: 10px 0;
            padding: $input-internal-padding;
            &--error {
                border: 1px solid $color-cherry-red
            }
        }
    }

</style>
