<template>
  <div class="contact-section">
    <h2 class="contact-section__headline">Contact us</h2>
    <contact-data class="contact-section__card" />
  </div>
</template>

<script>
import ContactData from "@/components/contact/ContactData.vue";
export default {
  components: {
    ContactData,
  },
};
</script>

<style lang="scss" scoped>
.contact-section {
  max-width: 600px;
  margin: 0 auto;
  text-align: center;
  &__headline {
    font-family: "Eczar", serif;
    font-weight: 600;
    font-size: 64px;
  }
  &__card {
    border-radius: 24px;
    overflow: hidden;
  }
  @include xs {
    margin: 20px 2rem 20px 2rem;
  }
}
</style>
