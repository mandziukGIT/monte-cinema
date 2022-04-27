<template>
  <div class="date-filter__options" v-if="activeOption">
    <div
      class="date-filter__option"
      :class="[
        { 'date-filter__option--active': option.id === activeOption.id },
        { responsive: sizeFixed },
      ]"
      v-for="(option, index) in options"
      :key="option.id"
      @click="setActiveOption(option)"
    >
      {{
        index
          ? $d(new Date(option.date), 'weekday')
          : $t('dateFilter.todayLabel')
      }}
    </div>
  </div>
</template>

<script>
import { getDaysAhead } from '@/helpers/dateHelper';
export default {
  props: {
    value: {
      type: Date,
      required: true,
    },
    sizeFixed: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
  data() {
    return {
      options: [],
    };
  },
  methods: {
    setActiveOption(option) {
      this.$emit('input', option.date);
    },
  },
  computed: {
    activeOption() {
      let active;
      this.options.forEach((el) => {
        if (el.date.toDateString() === this.value.toDateString()) {
          active = el;
        }
      });
      return active;
    },
  },
  created() {
    this.options = getDaysAhead().map((day, index) => {
      return {
        id: index + 1,
        date: day,
      };
    });
  },
};
</script>

<style lang="scss" scoped>
.date-filter {
  &__options {
    display: flex;
    overflow: auto;
  }
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
.responsive {
  @include lg {
    display: none;
    &:nth-child(-n + 3) {
      display: block;
    }
  }
  @include md {
    display: block;
  }
}
</style>
