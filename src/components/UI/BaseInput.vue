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
            type: String
        },
        inputLabel: {
            type: String
        },
        isInvalid: {
            type: Boolean
        }
    },
    computed: {
        inputListeners() {
            const vm = this
            return Object.assign({},
                vm.$listeners,
                {
                    input: function(event) {
                        vm.$emit('input', event.target.value)
                    },
                    blur: function(event) {
                        vm.$emit('blur', event.target.value)
                    }
                }
            )
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
                border: 1px solid $color-cherry-red
            }
        }
    }

</style>
