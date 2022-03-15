<template>
    <div class="date-filter">
        <div class="date-filter__list">
            <div 
                class="date-filter__list__option"
                :class="[{'date-filter__list__option--active': option.date === seancesDate}]" 
                v-for="option in filterOptions" :key="option.date" @click="setActive(option)"
            >
                {{option.label}}
            </div>
        </div>
        <vc-date-picker 
            class="date-filter__calendar" 
            v-model="seancesDate" 
            :min-date='new Date()' 
            :model-config="modelConfig"
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
import { getDaysAhead, getDayName, getFormattedDate } from '@/helpers/dateHelper'
export default {
    data() {
        return {
            date: '',
            modelConfig: {
                type: 'string',
                mask: 'DD-MM-YYYY',
            },
        }
    },
    methods: {
        setActive(option) {
            this.seancesDate = option.date
        },
        getFilterOptions() {
           const daysAhead = getDaysAhead();
           return daysAhead.map((day, index) => {
               return {
                    label: !index ? "Today" : getDayName(day, "short"),
                    date: getFormattedDate(day),   
               }
           })
    
        }
    },
    computed: {
        filterOptions() {
            return this.getFilterOptions()
        },
        seancesDate: {
            get() {
                return this.date || getFormattedDate(new Date())
            },
            set(newVal) {
                this.date = newVal
                this.$emit('dateChange', newVal)
            }
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