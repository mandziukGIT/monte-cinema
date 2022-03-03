<template>
    <form class="form">
        <div class="form__wrapper">
            <slot name="form-controls">

            </slot>
            <slot name="form-actions">
                        
            </slot>
        </div>
    </form>
</template>

<style lang="scss" scoped>
.form {
    background-color: $color-snow-white;
    box-shadow: 0px 4px 22px rgba(52, 53, 65, 0.15);
    border-radius: 24px;
    max-width: 600px;

    &__wrapper {
        padding: 3.5rem;
    }
}
</style>