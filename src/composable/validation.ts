import { unref, ref, computed } from '@vue/composition-api';

export function useValidate(
  bDate: string,
  firstName: string,
  lastName: string
) {
  const isFullAgeError = ref(false);
  const isDateFormatError = ref(false);
  const isBirthDateError = ref(false);
  const isFirstNameError = ref(false);
  const isLastNameError = ref(false);
  const isSubmitted = ref(false);
  const isPPChecked = ref(false);

  const validateDateFormat = (date: string) => {
    const dateMask = new RegExp(
      '^(3[01]|[12][0-9]|0[1-9])/(1[0-2]|0[1-9])/[0-9]{4}$'
    );
    isDateFormatError.value = !dateMask.test(date);
  };
  const validateMajority = (date: string) => {
    const fullAgeBoundary = new Date();
    fullAgeBoundary.setFullYear(fullAgeBoundary.getFullYear() - 18);
    const [day, month, year] = date.split('/');
    const birthDate = new Date(Number(year), Number(month) - 1, Number(day));
    if (fullAgeBoundary < birthDate) {
      isFullAgeError.value = true;
    } else {
      isFullAgeError.value = false;
    }
  };
  const validateBirthDate = () => {
    const date: string = unref(bDate);
    validateMajority(date);
    validateDateFormat(date);
    isBirthDateError.value = isFullAgeError.value || isDateFormatError.value;
  };
  const validateFirstName = () => {
    const fName = unref(firstName);
    isFirstNameError.value = !fName;
  };
  const validateLastName = () => {
    const lName = unref(lastName);
    isLastNameError.value = !lName;
  };
  const isPrivacyPolicyError = computed(
    () => isSubmitted.value && !isPPChecked.value
  );
  const isFormValid = computed(
    () =>
      !isBirthDateError.value &&
      !isFirstNameError.value &&
      !isLastNameError.value &&
      !isPrivacyPolicyError.value
  );

  return {
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
  };
}
