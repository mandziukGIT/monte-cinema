<template>
  <div class="date-filter">
    <div class="date-filter__date-display">
      <p class="date-filter__date-display--caption">Screenings:</p>
      <p class="date-filter__date-display--date">{{ dateDisplay }}</p>
    </div>
    <p class="date-filter__label">day</p>
    <div class="date-filter__list">
      <div
        class="date-filter__list__option"
        :class="[
          { 'date-filter__list__option--active': option.id === activeOptionId },
          { responsive: !sizeFixed },
        ]"
        v-for="option in filterOptions"
        :key="option.id"
        @click="setActiveOption(option)"
      >
        {{ option.label }}
      </div>
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
import {
  getDaysAhead,
  getDayName,
  getFormattedDate,
} from '@/helpers/dateHelper';
export default {
  props: {
    sizeFixed: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      dateFilter: new Date(),
    };
  },
  methods: {
    setActiveOption(option) {
      this.activeOptionId = option.id;
      this.dateFilter = option.date;
    },
    getFilterOptions() {
      const daysAhead = getDaysAhead();
      const filterOptions = daysAhead.map((day, index) => {
        return {
          id: day.getDate(),
          label: !index ? 'Today' : getDayName(day, 'short'),
          date: day,
        };
      });
      this.setActiveOption(filterOptions[0]);
      return filterOptions;
    },
    getScreeningsFormatDate(date) {
      const dayName = getDayName(date, 'long');
      const formattedDate = getFormattedDate(date);
      return dayName + ' ' + formattedDate;
    },
  },
  computed: {
    filterOptions() {
      return this.getFilterOptions();
    },
    dateDisplay() {
      return this.getScreeningsFormatDate(this.dateFilter);
    },
    maxDate() {
      const date = new Date();
      return date.setDate(date.getDate() + 14);
    },
  },
  watch: {
    dateFilter: {
      immediate: true,
      handler(newVal) {
        this.dateFilter = newVal;
        this.activeOptionId = newVal.getDate();
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
  &__date-display {
    letter-spacing: -1%;
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
  &__list {
    display: flex;
    overflow: auto;
    &__option {
      font-family: 'RobotoMono', monospace;
      font-weight: 500;
      font-size: 18px;
      line-height: 100%;
      letter-spacing: 0.015em;
      background-color: inherit;
      color: $color-tuna;
      border: 2px solid $color-tuna;
      border-radius: 32px;
      padding: 10px 35px;
      margin: 0 5px;
      &--active {
        background-color: $color-tuna;
        color: $color-snow-white;
      }
      @include xs {
        padding: 5px 20px;
        margin: 0 3px;
      }
      &:first-of-type {
        margin-left: 0;
      }
    }
  }
  &__calendar {
    display: flex;
    border: 2px solid $color-tuna;
    border-radius: 32px;
    padding: 0 10px;
    margin-left: 5px;
    &__toggle {
      display: inline-flex;
      height: 100%;
      &--icon {
        margin: auto;
      }
    }
  }
  @include sm {
    margin-right: 0px;
  }
}
.responsive {
  @include lg {
    display: none;
    &:nth-child(-n + 4) {
      display: block;
    }
  }
  @include md {
    display: flex;
  }
}
</style>
