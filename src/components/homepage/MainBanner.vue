<template>
  <div class="homepage-banner">
    <div class="homepage-banner__statement">
      <div class="homepage-banner__statement--wrapper">
        <h1 class="homepage-banner__statement--headline">
          {{ $t('homepage.banner.title') }}
        </h1>
        <p class="homepage-banner__statement--paragraph">
          {{ $t('homepage.banner.text') }}
        </p>
      </div>
      <base-button fontSize="22" buttonStyle="primary">{{
        $t('homepage.banner.button')
      }}</base-button>
    </div>
    <div class="homepage-banner__image">
      <img
        class="homepage-banner__image--image"
        src="@/assets/images/banner.jpg"
      />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.homepage-banner {
  display: flex;
  &__statement {
    width: 60%;
    padding: 60px;
    background-color: $color-wisp-pink;
    text-align: left;
    margin: 0 auto;
    &--headline {
      padding-bottom: 30px;
      margin: 0;
      font-family: 'Eczar', serif;
      font-weight: 600;
      font-size: 80px;
      line-height: 102%;
      @include md {
        font-size: 48px;
      }
    }
    &--paragraph {
      font-family: 'Roboto Mono', monospace;
      font-size: 22px;
      margin-bottom: 60px;
      letter-spacing: 0.015em;
      line-height: 170%;
    }
    &--wrapper {
      max-width: 600px;
      @include sm {
        text-align: center;
      }
    }
    @include md {
      padding: 80px;
      width: 100%;
    }
    @include sm {
      padding: 30px;
    }
  }
  &__image {
    width: 40%;
    &--image {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
    @include md {
      display: none;
    }
  }
}
</style>
