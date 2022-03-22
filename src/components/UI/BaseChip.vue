<template>
  <span class="chip">
      <slot>

      </slot>
  </span>
</template>

<style lang="scss" scoped>
.chip {
    font-family: "Roboto", sans-serif;
    font-weight: 700;
    font-size: 14px;
    line-height: 16px;
    color: $color-bittersweet;
    background-color: $color-wisp-pink;
    padding: 5px 10px;
    border-radius: 24px;
}
</style>