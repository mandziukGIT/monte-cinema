<template>
  <div class="filter">
    <base-input
      class="filter__search"
      v-model="searchFilterPhrase"
      :placeholder="searchPlaceholder"
      inputLabel="search"
    />
    <base-select
      v-model="categoryFilterOption"
      :placeholder="categoryPlaceholder"
      :options="categoryFilterOptions"
    />
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      searchPlaceholder: "What are you looking for?",
      categoryPlaceholder: "Choose category",
      searchFilterPhrase: null,
      categoryFilterOption: null,
    };
  },
  computed: {
    ...mapGetters(["genres"]),
    categoryFilterOptions() {
      return this.genres.map((genre) => ({
        label: genre.name,
        code: genre.id,
      }));
    },
  },
  watch: {
    searchFilterPhrase(newVal) {
      this.$emit("searchPhraseUpdate", newVal);
    },
    categoryFilterOption(newVal) {
      this.$emit("categoryOptionUpdate", newVal);
    },
  },
};
</script>

<style lang="scss" scoped>
.filter {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 2rem;
  margin: 20px 0;
  &__search {
    grid-column-start: 1;
    grid-column-end: 3;
  }
}
</style>
