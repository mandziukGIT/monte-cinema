<template>
    <div class="base-input">
        <label class="base-input__label" :for="$attrs.id">{{inputLabel}}</label>
        <input class="base-input__input" v-bind="$attrs" :value="value" @input="updateValue"/>
    </div>
</template>

<script>
export default {
    inheritAttrs: false,
    props: {
        value: {
            type: String
        },
        inputLabel: {
            type: String
        },
        isInputValid: {
            type: Boolean
        }
    },
    methods: {
        updateValue(event) {
            this.$emit("input", event.target.value )
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
            @include base-input;
            &--error {
                input {
                    border-color: red
                }
            }
        }
    }

</style>
