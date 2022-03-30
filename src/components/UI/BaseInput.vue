<template>
  <div class="base-input">
    <label class="base-input__label" :for="$attrs.id">{{ inputLabel }}</label>
    <input
      class="base-input__input"
      v-bind="$attrs"
      v-on="inputListeners"
      :value="value"
      :class="[{ 'base-input__input--error': isInvalid }]"
    />
  </div>
</template>

<script>
export default {
  inheritAttrs: false,
  props: {
    value: {
      type: String,
      required: false,
    },
    inputLabel: {
      type: String,
      required: false,
    },
    isInvalid: {
      type: Boolean,
      required: false,
    },
  },
  computed: {
    inputListeners() {
      return {
        ...this.$listeners,
        input: (event) => this.$emit("input", event.target.value),
        blur: (event) => this.$emit("blur", event.target.value),
      };
    },
  },
};
</script>

<style lang="scss" scoped>
.base-input {
  &__label {
    @include text-label;
  }
  &__input {
    font-family: "Roboto", sans-serif;
    font-weight: 400;
    font-size: 18px;
    box-sizing: border-box;
    border: none;
    border-radius: $input-border-radius;
    background-color: $color-athens-gray;
    width: 100%;
    &:hover {
      background-color: #e5e5e5;
    }
    &:active,
    &:focus {
      outline: none;
      background-color: rgba(47, 128, 237, 0.1);
      box-shadow: inset 0px 0px 0px 1px #2f80ed;
    }
    margin-top: 10px;
    padding: $input-internal-padding;
    &--error {
      border: 1px solid red;
    }
  }
}
</style>
