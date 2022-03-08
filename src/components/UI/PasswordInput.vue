<template>
    <div class="password-input__wrapper">
        <label class="password-input__label" for="password">password</label>
        <div class="password-input__input">
            <input 
                id="password" 
                :value="value" 
                class="password-input__input--field" 
                :type="inputType" 
                placeholder="Enter your password" 
                @input="$emit('input', $event.target.value)" 
                @blur="validatePassword"
                autocomplete="off"
            />
            <img class="password-input__input--icon" :src="inputIcon" @click="togglePasswordVisibility" @mousedown.prevent />
        </div>
        <div v-if="validate" class="password-input__validators">
            <p :class="charactersValidatorClass">At least 8 characters</p>
            <p :class="letterValidatorClass">At least one letter</p>
            <p :class="digitValidatorClass">At least one digit</p>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        validate: {
            type: Boolean,
            default: false
        },
        value: {
            type: String
        }
    },
    data() {
        return {
            isPasswordVisible: false,
            isTouched: false,
            matchedCharacters: false,
            matchedDigit: false,
            matchedLetter: false
           
        }
    },
    methods: {
        togglePasswordVisibility() {
            this.isPasswordVisible = !this.isPasswordVisible;
        },
        validatePassword() {
            console.log("yes")
            this.isTouched = true
            this.matchedCharacters = /.{8,}/.test(this.value)
            this.matchedDigit = /(?=.*?[0-9])/.test(this.value)
            this.matchedLetter = /[a-z]+/.test(this.value)
        }
    },
    computed: {
        inputType() {
            return this.isPasswordVisible ? 'text' : 'password';
        },
        inputIcon() {
            return require(`@/assets/images/icon-${ this.isPasswordVisible ? 'invisible' : 'visible'}.svg`)
        },
        charactersValidatorClass() {
            return this.isTouched && this.matchedCharacters ? "text-success" : this.isTouched ? "text-danger" : '';
        },
        digitValidatorClass() {
            return this.isTouched && this.matchedDigit ? "text-success" : this.isTouched ? "text-danger" : '';
        },
        letterValidatorClass() {
            return this.isTouched && this.matchedLetter ? "text-success" : this.isTouched ? "text-danger" : '';
        },
    }

}
</script>

<style lang='scss' scoped>
.password-input {
    &__label {
        @include text-label
    }
    &__input {
        position: relative;
        &--field {
            @include base-input;
        }
        &--icon {
            position: absolute;
            top: calc(50%);
            transform: translateY(-50%);
            right: 20px;
            cursor: pointer;
        }
    }
    &__validators {
        font-family: "Roboto", sans-serif;
        font-weight: 400;
        font-size: 14px;
        p {
            padding: 5px 0;
        }
    }
}
</style>