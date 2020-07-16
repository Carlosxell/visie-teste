<template>
  <form @submit.prevent="removeCharacter"
        class="c-form"
        novalidate>
    <div class="c-form_grid">
      <div class="c-form_box">
        <input class="m-input"
               :class="{ 'error': !list.some(item => (item.name.match(form.name))) }"
               @input="(form.selected = '')"
               v-model="form.name"
               placeholder="excluir"
               type="text" />
      </div>

      <div class="c-form_box">
        <select :disabled="(form.name.length > 0)"
                class="m-input"
                name=""
                v-model="form.selected">
          <option value=""
                  selected>Selecione</option>
          <option v-for="(item, ind) in list"
                  :key="ind"
                  :value="item.name">{{ item.name }}</option>
        </select>
      </div>

      <div class="c-form_box">
        <button class="m-btn--search"
                type="submit">Remover</button>
      </div>
    </div>
  </form>
</template>

<script>
  export default {
    name: 'Form',
    props: {
      list: {
        type: Array,
        default: () => []
      }
    },
    data: () => {
      return {
        form: {
          name: '',
          selected: '',
        }
      };
    },
    computed: {
      checkError(val) {
        return false;
      }
    },
    methods: {
      removeCharacter() {
        const { name, selected } = this.form;

        if (!name && !selected) { return; }
        this.$emit('removeCharacter', name.length ? name : selected);
        this.form = { name: '', selected: '' };
      },
    }
  };
</script>

<style lang="scss">
  @import '../assets/css/_utilities/_exports';

  .c-form {
    &_grid {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      margin: pxToRem(24) auto 0;
      max-width: pxToRem(768);
    }

    &_box {
      margin-bottom: pxToRem(20);
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
