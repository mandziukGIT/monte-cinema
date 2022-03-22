<template>
    <div class="date-filter">
        <div class="date-filter__list">
            <div 
                class="date-filter__list__option"
                :class="[{'date-filter__list__option--active': option.id === activeOptionId}]" 
                v-for="option in filterOptions" :key="option.id" @click="setActiveOption(option)"
            >
                {{option.label}}
            </div>
        </div>
        <vc-date-picker 
            class="date-filter__calendar" 
            v-model="dateFilter" 
            :min-date='new Date()' 
            color="red"
        > 
            <template v-slot="{ togglePopover }">
                <button class="date-filter__calendar__toggle" @click="togglePopover">
                    <img class="date-filter__calendar__toggle--icon" src="@/assets/images/calendar.svg" alt="calendar icon">
                </button>
            </template>
        </vc-date-picker>
    </div>
</template>
<script>
import { getDaysAhead, getDayName } from '@/helpers/dateHelper'
export default {
    data() {
        return {
            dateFilter: null,
        }
    },
    methods: {
        setActiveOption(option) {
            this.activeOptionId = option.id
            this.dateFilter = option.date
        },
        getFilterOptions() {
            const daysAhead = getDaysAhead();
            const filterOptions = daysAhead.map((day, index) => {
                return {
                    id: day.getDate(),
                    label: !index ? "Today" : getDayName(day, "short"),
                    date: day
                }
           })
            this.setActiveOption(filterOptions[0])
            return filterOptions
        }
    },
    computed: {
        filterOptions() {
            return this.getFilterOptions()
        }
    },
    watch: {
        dateFilter(newVal) {
            this.dateFilter = newVal
            this.activeOptionId = newVal.getDate()
            this.$emit('dateChange', newVal)
        }
    }
}

</script>

<style lang="scss" scoped>
.date-filter {
    display: flex;
    &__list {
        display: flex;
        &__option {
            font-family: "RobotoMono", monospace;
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
            @include lg {
                display: none;
                &:nth-child(-n+3) {
                    display: block;
                }
            }
            @include md {
               display: block; 
            }
            @include xs {
                padding: 5px 20px;
                margin: 0 3px;
            }
        }
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
    @include sm {
        margin-right: 0px;
    }
}
</style>