<template>
  <div class="contact__container">
    <h1 class="headline">Contact Us</h1>
    <div class="contact__info">
      <div class="contact__info--map">
        <img src="@/assets/images/localization.png" />
      </div>
      <contact-data class="contact__info--data" />
      <div class="contact__info--links">
        <img src="@/assets/images/twitter-icon.svg" />
        <img src="@/assets/images/facebook-icon.svg" />
        <img src="@/assets/images/github-icon.svg" />
        <img src="@/assets/images/instagram-icon.svg" />
        <img src="@/assets/images/linkedin-icon.svg" />
        <img src="@/assets/images/be-icon.svg" />
        <img src="@/assets/images/basket-icon.svg" />
      </div>
    </div>
  </div>
</template>
<script>
import ContactData from "@/components/contact/ContactData.vue";
export default {
  name: "ContactPage",
  metaInfo: {
    title: "Contact",
  },
  components: {
    ContactData,
  },
};
</script>
<style lang="scss" scoped>
.contact {
  &__container {
    @include xs {
      margin: 20px 2rem 20px 2rem;
    }
  }
  &__info {
    display: flex;
    flex-direction: row;
    border-radius: 8px;
    overflow: hidden;
    &--map {
      & > img {
        height: 100%;
        width: 100%;
        object-fit: cover;
      }
    }
    &--data {
      flex-grow: 1;
    }
    &--links {
      padding: 20px;
      justify-content: space-between;
      background-color: $color-wisp-pink;
      display: flex;
      flex-direction: column;
      @include md {
        flex-direction: row;
      }
    }
    @include md {
      flex-direction: column;
      max-width: 500px;
      margin: 0 auto;
    }
  }
}
</style>
