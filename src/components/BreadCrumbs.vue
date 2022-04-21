<template>
  <div class="bread-crumbs">
    <button class="bread-crumbs__back-button" @click="goToPreviousCrumb">
      Back
    </button>
    <img
      class="bread-crumbs__back-arrow"
      src="@/assets/images/back-arrow-icon.svg"
      @click="goToPreviousCrumb"
    />
    <ul class="bread-crumbs__list">
      <li
        class="bread-crumbs__list--item"
        v-for="(crumb, index) in routeCrumbs"
        :key="crumb"
      >
        <router-link
          :to="routeCrumbs.length - 1 !== index ? { name: crumb } : ''"
        >
          {{ crumb }}
        </router-link>
        <img src="@/assets/images/arrow-right-icon.svg" />
      </li>
    </ul>
  </div>
</template>

<script>
import client from '@/api/client';
export default {
  data() {
    return {
      routeCrumbs: [],
    };
  },
  methods: {
    async getRouteCrumbs() {
      const routePath = this.$route.path;
      const routeCrumbs = routePath.split('/');
      if (!isNaN(routeCrumbs[routeCrumbs.length - 1])) {
        const { data } = await client.get(routePath);
        routeCrumbs.splice(-1, 1, data.title);
      }
      this.routeCrumbs = routeCrumbs;
    },
    goToPreviousCrumb() {
      if (this.routeCrumbs.length > 2) {
        const destinationCrumb = this.routeCrumbs[this.routeCrumbs.length - 2];
        this.$router.push({ name: destinationCrumb });
      } else {
        this.$router.push({ name: 'home' });
      }
    },
  },
  watch: {
    '$route.path': {
      immediate: true,
      handler() {
        this.getRouteCrumbs();
      },
    },
  },
};
</script>

<style lang="scss" scoped>
.bread-crumbs {
  font-family: 'RobotoMono', monospace;
  font-weight: 500;
  font-size: 16px;
  color: $color-tuna;
  background-color: $color-wisp-pink;
  display: flex;
  padding: 20px;
  &__back-button {
    white-space: nowrap;
    border: 2px solid $color-tuna;
    border-radius: 18px;
    padding: 5px 20px;
    &::before {
      content: url('@/assets/images/back-arrow-icon.svg');
      padding-right: 10px;
    }
    @include sm {
      display: none;
    }
  }
  &__back-arrow {
    display: none;
    @include sm {
      display: block;
    }
  }
  &__list {
    display: flex;
    overflow: auto;
    white-space: nowrap;
    &--item {
      text-transform: capitalize;
      display: flex;
      margin: auto;
      & > a {
        padding: 0 10px;
        overflow: hidden;
      }
      &:first-child,
      &:last-child {
        img {
          display: none;
        }
      }
    }
  }
  @include sm {
    font-size: 12px;
    padding: 10px 2rem;
  }
}
</style>
