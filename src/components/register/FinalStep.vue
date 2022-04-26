<template>
  <div class="second-step-container">
    <h1 class="headline">
      Great! <br />
      <span class="headline--accent">Now your name</span>
    </h1>
    <form-card @submit.prevent.native="formSubmit">
      <template #form-controls>
        <base-input
          v-model="firstName"
          id="email"
          inputLabel="first name"
          placeholder="eg. Kacper"
          @blur="validateFirstName"
          :isInvalid="isFirstNameError"
        />
        <base-input
          v-model="lastName"
          id="lastName"
          inputLabel="last name"
          placeholder="eq. Mandziuk"
          @blur="validateLastName"
          :isInvalid="isLastNameError"
        />
        <div>
          <base-input
            v-model="birthDate"
            @blur="validateBirthDate"
            id="birthDate"
            :isInvalid="isBirthDateError"
            inputLabel="date of birth"
            placeholder="DD/MM/YYYY"
          />
          <p
            class="input-caption"
            :class="[{ 'input-caption--error': isFullAgeError }]"
          >
            You should be minimum 18 year old
          </p>
        </div>
        <label
          for="privacyPolicy"
          :class="[{ 'input-caption--error': isPrivacyPolicyError }]"
        >
          <input id="privacyPolicy" type="checkbox" v-model="isPPChecked" /> I
          accept Privacy Policy
        </label>
      </template>
      <template #form-actions>
        <base-button block type="button">
          <router-link :to="{ name: 'login' }"> Log in instead </router-link>
        </base-button>
        <base-button
          block
          type="submit"
          buttonStyle="primary"
          :disabled="!isFormValid"
          >Register</base-button
        >
      </template>
    </form-card>
  </div>
</template>

<script>
import FormCard from '@/components/FormCard.vue';
import { useValidate } from '@/composable/validation';
import { ref, reactive } from '@vue/composition-api';

export default {
  setup(props, { emit }) {
    const birthDate = ref('');
    const firstName = ref('');
    const lastName = ref('');

    const registerData = reactive({
      first_name: firstName,
      last_name: lastName,
      date_of_birth: birthDate,
    });

    const {
      isBirthDateError,
      isFullAgeError,
      isFirstNameError,
      isLastNameError,
      isPrivacyPolicyError,
      validateBirthDate,
      validateFirstName,
      validateLastName,
      isFormValid,
      isSubmitted,
      isPPChecked,
    } = useValidate(birthDate, firstName, lastName);

    function formSubmit() {
      isSubmitted.value = true;
      validateBirthDate();
      validateFirstName();
      validateLastName();
      if (isFormValid.value) {
        emit('registerFinalStepDone', registerData);
      }
    }

    return {
      isBirthDateError,
      isFullAgeError,
      isFirstNameError,
      isLastNameError,
      isPrivacyPolicyError,
      isPPChecked,
      validateBirthDate,
      validateFirstName,
      validateLastName,
      firstName,
      lastName,
      birthDate,
      isFormValid,
      formSubmit,
    };
  },
  components: {
    FormCard,
  },
};
</script>

<style lang="scss" scoped>
.input-caption {
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
  font-size: 14px;
  color: $color-tuna;
  &--error {
    color: $color-cherry-red;
  }
}
</style>
