<template>
  <v-select v-model="categoryFilter" class="category-filter" placeholder="Choose category" :options="categoriesOptions"/>
</template>

<script>
export default {
    data() {
        return {
            categoryFilter: ''
        }
    },
    computed: {
        categoriesOptions() {
            return this.genres.map(genre => ({label: genre.name, code: genre.id}));
        },
        genres() {
            return this.$store.getters.getGenres;
        }
    },
    watch: {
        categoryFilter(newVal) {
            this.$emit("categoryChange", newVal)
        }
    }
}
</script>

<style lang="scss" scoped>
.category-filter {
    max-width: 50%;
    min-width: 200px;
    height: 100%;
    @include sm { 
        margin-left: 0;
        max-width: 100%;
        width: 100%;
    }
}
</style>

<style lang="scss">
:root {
    --vs-border-color: inherit;
    --vs-dropdown-bg: #F7F7F7;
    --vs-border-radius: 10px;
    --vs-dropdown-option--active-bg: #EAEAEA;
    --vs-dropdown-option--active-color: inherit;
}
.v-select {
    width: 30%;
    background-color: $color-athens-gray;
    font-family: "Roboto", sans-serif;
    font-weight: 400;
    font-size: 18px;
    border-radius: 8px;
    &:active {
        border-radius: 0px;
    }
}

.vs__dropdown-toggle {
    height: 100%;
}
</style>