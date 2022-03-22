<template>
  <div class="contact__wrapper">
      <div class="contact__field">
          <img src="@/assets/images/location-icon.svg" class="contact__field--icon">
          <p class="contact__field--content">
                Monterail Sp. z o.o. <br>
                ul. Oławska 27-29 <br>
                50-123 Wrocław <br>
                Poland
          </p>
      </div>
      <div class="contact__field">
          <img src="@/assets/images/email-icon.svg" class="contact__field--icon">
          <p class="contact__field--content">
            <a href="mailto:hello@monterail.com">
                hello@monterail.com
            </a>
          </p>
      </div>
      <div class="contact__field">
          <img src="@/assets/images/phone-icon.svg" class="contact__field--icon">
          <p class="contact__field--content">
              <a href="tel:+48533-600-136">
                  +48 533 600 136
              </a>
          </p>
      </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
    .contact {
        &__wrapper {
            max-width: 600px;
            margin: 0 auto;
            padding: 3rem;
            border-radius: 24px;
            background-color: $color-athens-gray;
        }
        &__field {
            display: flex;
            padding: 1rem 0;
            line-height: 32px;
            &--icon {
                padding: 7px 20px 0 0;
                align-self: flex-start;
            }
            &--content {
                text-align: left;
                font-family: "RobotoMono", monospace;
                font-weight: 400;
                font-size: 18px;
                color: $color-tuna;
                letter-spacing: 0.015em;
            }
        }
    }
</style>