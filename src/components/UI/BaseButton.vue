<template>
    <button :style="buttonStyles" :class="buttonClasses">
        <slot></slot>
    </button>
</template>

<script>

export default {
    name: "BaseButton",
    props: {
        fontSize: {
            type: String,
            default: "16"
        },
        buttonType: {
            type: String,
            default: "default"
        },
        block: {
            type: Boolean,
            default: false
        }
    },
    computed: {
        buttonClasses() {
            return ['button', {
                'button--primary': this.buttonType === 'primary'
            }]
        },
        buttonStyles() {
            return { "fontSize": +this.fontSize + "px", "width": this.block ? '100%' : ''};
        }
        
    }
}
</script>

<style lang="scss" scoped>
.button {
  font-family:'RobotoMono', monospace;
  font-weight: 500;
  color: $color-cherry-red;
  border-radius: 64px;
  border: 2px solid transparent;
  padding: 0.8em 2em;
  &--primary{
      background-color: $btn-primary-color;
      border: 2px solid $btn-primary-color;
      color: $color-snow-white;
      @include fade-transition;
      &:active, &:hover{
          @include fade-transition;
          background-color: transparent;
          color: $btn-primary-color;
      }
  }
}
</style>