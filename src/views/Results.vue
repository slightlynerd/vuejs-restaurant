<template>
  <div class="page">
    <h2>Results</h2>
    <p>You can make {{ this.meals }} pasta carbonara.</p>
    <p>To make 1 pasta carbonara, you need the following quantity of each ingredient: </p>
    <Banner :text="bannerText" text-distribution="top" text-vertical-alignment="top" text-horizontal-alignment="right" />
    <hr>
    <h2 v-if="jokeOfDay.title">Joke of the Day</h2>
    <h3>{{ jokeOfDay.title }}</h3>
    <p>{{ jokeOfDay.text }}</p>
  </div>
</template>

<script>
import Banner from '@/components/Banner/Banner';

  export default {
    components: {
      Banner
    },
    data() {
      return {
        meals: '',
        jokeOfDay: {
          title: '',
          text: ''
        },
        bannerText: ''
      }
    },
    created () {
      fetch('https://api.jokes.one/jod?category=knock-knock')
        .then(response => response.json())
        .then(data => {
          this.jokeOfDay.title = data.contents.jokes[0].joke.title
          this.jokeOfDay.text = data.contents.jokes[0].joke.text
        })
        .catch(() => {
          this.jokeOfDay.title = 'Knock Knock - Cash who?'
          this.jokeOfDay.text = `Knock Knock Who's there? Cash! Cash who? Cash me if you can!`
        })
    },
    mounted () {
      this.meals = localStorage.getItem('meals');
      const secret = JSON.parse(localStorage.getItem('secret'));
      this.bannerText = `
        Pasta: ${secret.pasta},
        Milk: ${secret.milk},
        Butter: ${secret.butter},
        Oil: ${secret.oil},
        Bacon: ${secret.bacon},
        Eggs: ${secret.eggs}
      `
    },
  }
</script>

<style lang="scss" scoped>

</style>