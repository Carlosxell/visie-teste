<template>
  <div class="c-boxCharacter"
       :style="`background-color: ${color.match('-') ? '#6699cc' : color};`">
    <h3 class="c-boxCharacter_title">{{ name }}</h3>
  </div>
</template>

<script>
  export default {
    name: 'Character',
    props: {
      info: {
        type: Object,
        default: () => {}
      },
      name: {
        type: String,
        default: () => 'Desconhecido'
      },
      color: {
        type: String,
        default: () => ''
      },
    }
  };
</script>

<style lang="scss">
  @import '../assets/css/_utilities/_exports';

  .c-boxCharacter {
    border-radius: pxToRem(6);
    margin-bottom: pxToRem(20);
    padding: pxToRem(20);

    &_title {
      color: darken($color-dark, 25%);
      text-shadow: 0 0 pxToRem(2) $color-light;
    }
  }
</style>
