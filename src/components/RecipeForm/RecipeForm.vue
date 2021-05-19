<template>
  <div class="recipe-form">
    <p>Introduce below the quantity for each ingredient you have and we will calculate how many Pasta Carbonara meals you can cook!</p>
    <form class="recipe-form__form">
      <label for="recipe-eggs">Eggs</label>
      <input class="recipe-form__form-input" type="number" name="eggs" id="recipe-eggs" v-model="eggs" />
      <label for="recipe-pasta">Pasta</label>
      <input class="recipe-form__form-input" type="number" name="pasta" id="recipe-pasta" v-model="pasta" />
      <label for="recipe-butter">Butter</label>
      <input class="recipe-form__form-input" type="number" name="butter" id="recipe-butter" v-model="butter" />
      <label for="recipe-milk">Milk</label>
      <input class="recipe-form__form-input" type="number" name="milk" id="recipe-milk" v-model="milk" />
      <label for="recipe-oil">Oil</label>
      <input class="recipe-form__form-input" type="number" name="oil" id="recipe-oil" v-model="oil" />
      <label for="recipe-bacon">Bacon</label>
      <input class="recipe-form__form-input" type="number" name="bacon" id="recipe-bacon" v-model="bacon" />
      <button type="submit" @click="calculate">Calculate</button>
    </form>
  </div>
</template>
<style lang="scss">
@import './RecipeForm.scss';
</style>
<script>

export default {
  name: 'RecipeForm',
  data () {
    return {
      meals: 0,
      eggs: '',
      pasta: '',
      butter: '',
      milk: '',
      oil: '',
      bacon: ''
    };
  },
  props: {
    ingredients: {
      type: Object,
      default: () => ({})
    }
  },
  methods: {
    calculate (event) {
      event.preventDefault();

      const eggs = Math.floor(this.eggs / this.ingredients.eggs);
      const pasta = Math.floor(this.pasta / this.ingredients.pasta);
      const milk = Math.floor(this.milk / this.ingredients.milk);
      const bacon = Math.floor(this.bacon / this.ingredients.bacon);
      const oil = Math.floor(this.oil / this.ingredients.oil);
      const butter = Math.floor(this.butter / this.ingredients.butter);
      
      // check for invalid ingredients
      if (eggs < 1 || pasta < 1 || milk < 1 || bacon < 1 || oil < 1 || butter < 1) {
        return alert('You have not specified enough ingredients');
      }
      this.meals = Math.min(eggs, pasta, milk, bacon, oil, butter);
      localStorage.setItem('meals', this.meals);
      localStorage.setItem('secret', JSON.stringify(this.ingredients));
      this.$router.push('/results');
    }
  }
}
</script>
