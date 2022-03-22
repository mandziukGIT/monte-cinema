<template>
    <div class="contact-section">
        <h2 class="contact-section__headline">Contact us</h2>
        <contact-data />
    </div>
</template>

<script>
import ContactData from "@/components/contact/ContactData.vue"
export default {
    components: {
        ContactData
    }
}
</script>

<style lang="scss" scoped>
    .contact-section {
        text-align: center;
        &__headline{
            font-family: "Eczar", serif;
            font-weight: 600;
            font-size: 64px
        }
    }
</style>