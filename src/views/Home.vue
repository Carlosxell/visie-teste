<template>
  <div class="l-page--home">
    <Form @removeCharacter="removeCharacter"
          :list="charactersList"
          v-if="charactersList.length" />
    <div class="c-grid"
         v-if="charactersList.length">
      <div class="c-grid_item"
           :key="ind"
           v-for="(item, ind) in charactersList">
        <Character :color="item.eye_color"
                   :info="item"
                   :name="item.name" />
      </div>
    </div>

    <Spinner v-if="searching" />
  </div>
</template>

<script>
  import Character from '../components/Character';
  import Form from '../components/Form';
  import Spinner from '../components/Spinner';
  import { getCharacthers } from '../services/character-service';

  export default {
    name: 'Home',
    components: { Character, Form, Spinner },
    mounted() {
      this.searchCharacthers();
    },
    data: () => {
      return {
        searching: true,
        charactersList: [],
      };
    },
    methods: {
      removeCharacter(val) {
        this.charactersList = this.charactersList.filter(item => (item.name !== val));
      },
      async searchCharacthers() {
        await getCharacthers().then(val => {
          this.charactersList = val.results;
        }).finally(() => (this.searching = false));
      },
    },
  };
</script>

<style lang="scss">
  @import '../assets/css/_utilities/_exports';

  .c-grid {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin: pxToRem(24) auto 0;
    max-width: pxToRem(768);

    &_item {
      width: 100%;

      @media(min-width: pxToRem(568)) {
        width: calc((100% - #{pxToRem(20)}) / 2);
      }

      @media(min-width: pxToRem(768)) {
        width: calc((100% - #{pxToRem(40)}) / 3);
      }
    }
  }
</style>
