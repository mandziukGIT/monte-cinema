<template>
    <form class="form">
        <div class="form__errors">
            <slot name="form-errors"></slot>
        </div>
        <div class="form__controls">
            <slot name="form-controls"></slot>
        </div>
        <div class="form__actions">
            <slot name="form-actions"></slot>
        </div>
    </form>
</template>

<style lang="scss" scoped>
.form {
    background-color: $color-snow-white;
    box-shadow: 0px 4px 22px rgba(52, 53, 65, 0.15);
    border-radius: 24px;
    max-width: 600px;
    padding: 3.5rem;
    &__controls { 
        & > * {
            margin: 20px 0
        }
        margin-bottom: 40px
    }
    &__actions {
        display: flex;
        justify-content: space-between;
        flex-wrap: nowrap;
        @include sm {
            flex-wrap: wrap-reverse
        }
    }
    @include sm {
        box-shadow: none;
        border-radius: none;
        padding: 0;
    }
}
</style>
