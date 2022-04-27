<template>
  <div class="date-filter">
    <div class="date-filter__date-display">
      <p class="date-filter__date-display--caption">
        {{ this.$t('dateFilter.title') }}
      </p>
      <p class="date-filter__date-display--date">
        {{ $d(dateFilter, '2-digit') }}
      </p>
    </div>
    <p class="date-filter__label">day</p>
    <div class="date-filter__options">
      <date-options v-model="dateFilter" sizeFixed />
      <vc-date-picker
        class="date-filter__calendar"
        v-model="dateFilter"
        :min-date="new Date()"
        :max-date="maxDate"
        color="red"
      >
        <template v-slot="{ togglePopover }">
          <button class="date-filter__calendar__toggle" @click="togglePopover">
            <img
              class="date-filter__calendar__toggle--icon"
              src="@/assets/images/calendar.svg"
              alt="calendar icon"
            />
          </button>
        </template>
      </vc-date-picker>
    </div>
  </div>
</template>
<script>
import DateOptions from './DateOptions.vue';

export default {
  components: { DateOptions },
  props: {
    sizeFixed: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
  data() {
    return {
      dateFilter: new Date(),
    };
  },
  computed: {
    maxDate() {
      const date = new Date();
      return date.setDate(date.getDate() + 14);
    },
  },
  watch: {
    dateFilter: {
      immediate: true,
      handler(newVal) {
        this.$emit('dateChange', newVal);
      },
    },
  },
};
</script>

<style lang="scss" scoped>
.date-filter {
  display: flex;
  flex-direction: column;
  overflow: auto;
  &__date-display {
    padding: 0.5em 0;
    &--caption {
      color: $color-tuna;
    }
    &--date {
      color: $color-bombay;
    }
  }
  &__label {
    padding: 10px 0;
    @include text-label;
  }

  @include sm {
    margin-right: 0px;
  }
  &__options {
    display: flex;
  }
  &__calendar {
    display: flex;
    border: 2px solid $color-tuna;
    border-radius: 32px;
    padding: 0 10px;
    &__toggle {
      display: inline-flex;
      height: 100%;
      &--icon {
        margin: auto;
      }
    }
  }
}
</style>
