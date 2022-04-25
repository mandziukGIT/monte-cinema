import { unref, ref } from "@vue/composition-api"
export function useValidate(bDate) {
    const isFullAgeError = ref(null)
    const isDateFormatError = ref(null)
    const isBirthDateError = ref(null)
    
    function validateDateFormat(date) {
        const dateMask = new RegExp(
            '^(3[01]|[12][0-9]|0[1-9])/(1[0-2]|0[1-9])/[0-9]{4}$'
        );
        isDateFormatError.value = !dateMask.test(date);
    }
    function validateMajority(date) {
        const fullAgeBoundary = new Date();
        fullAgeBoundary.setFullYear(fullAgeBoundary.getFullYear() - 18);
        const [day, month, year] = date.split('/')
        const birthDate = new Date(year, month - 1, day)
        if(fullAgeBoundary < birthDate) {
            isFullAgeError.value = true
        } else {
            isFullAgeError.value = false 
        }

    }
    function validateBirthDate() { 
        const date = unref(bDate)
        validateMajority(date);
        validateDateFormat(date)
        isBirthDateError.value = isFullAgeError.value || isDateFormatError.value
    }

    return { isBirthDateError, isFullAgeError, validateBirthDate }
}
