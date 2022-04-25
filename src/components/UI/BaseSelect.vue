<template>
  <div class="select">
    <label class="select__label">category</label>
    <v-select
      :value="value"
      @input="$emit('input', $event)"
      class="select__input"
      :placeholder="placeholder"
      :options="options"
    />
  </div>
</template>

<script>
import Vue from "vue";
import vSelect from "vue-select";
import "vue-select/dist/vue-select.css";

Vue.component("v-select", vSelect);

export default {
  props: {
    value: {
      type: Object,
    },
    options: {
      type: Array,
      required: true,
    },
    placeholder: {
      type: String,
      required: false,
      default: "Choose option",
    },
  },
};
</script>

<style lang="scss" scoped>
.select {
  display: flex;
  flex-direction: column;
  &__label {
    @include text-label;
  }
  .v-select {
    --vs-dropdown-option--active-color: #343541;
    --vs-dropdown-option--active-bg: #eaeaea;
    --vs-dropdown-option-color: #343541;
    --vs-search-input-color: #343541;
    --vs-actions-padding: 0px;
    --vs-border-width: 0px;
    --vs-line-height: inherit;
    --vs-font-size: 18px;

    margin-top: 10px;
    border-radius: $input-border-radius;
    background-color: $color-athens-gray;
    font-family: "Roboto", sans-serif;
    font-weight: 400;
    min-width: 200px;

    &::v-deep .vs__dropdown-toggle {
      padding: $input-internal-padding;
    }
    &::v-deep .vs__search {
      line-height: inherit;
      border: none;
      margin: 0;
      padding: 0;
    }
    &::v-deep .vs__selected-options {
      flex-shrink: 0;
      padding: 0;
    }
    &::v-deep .vs__dropdown-menu {
      background-color: $color-athens-gray;
      border: none;
      border-top: 1px solid $color-whisper;
      box-shadow: none;
    }
    &::v-deep .vs__dropdown-option {
      line-height: inherit;
      font-size: 18px;
      padding: $input-internal-padding;
    }
    &::v-deep .vs__selected {
      line-height: inherit;
      font-size: 18px;
      margin: 0;
      padding: 0;
      border: none;
    }
  }
}
</style>
