<template>
  <div class="page page__home">
    <p>{{ welcomeMessage }}</p>
  </div>
</template>

<script>
import { format } from 'date-fns';

export default {
  name: 'Home',
  data () {
    return {
      currentTime: format(new Date(), 'EEEE, MMMM do yyyy, h:mm:ss a')
    }
  },
  computed: {
    welcomeMessage () {
      return 'Welcome! Your local time is: ' + this.currentTime;
    }
  },
  mounted() {
    const setTimer = () => setTimeout(() => {
      this.currentTime = format(new Date(), 'EEEE, MMMM do yyyy, h:mm:ss a');
      setTimer();
    }, 1000);
    setTimer();
  }
}
</script>
