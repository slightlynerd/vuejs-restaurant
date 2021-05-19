<template>
  <div class="store-list">
    <p>Here you can find all of our restaurants. We have {{ storesCount }} stores right now!</p>
    <input v-model="filter" type="text" placeholder="Search stores">
    <paginate
      name="storesWithImages"
      :list="storesWithImages"
      :per="20"
    >
      <div class="store-list__wrapper">
        <Store class="store-list__item" :title="store.name" :photo="store.image" :location="store.location" v-for="store in paginated('storesWithImages')" :key="store.id"  />
      </div>
    </paginate>
    <div class="text-center">
      <paginate-links for="storesWithImages" :limit="2" :show-step-links="true"></paginate-links>
    </div>
  </div>
</template>

<script>
import Store from '@/components/Store/Store';
import _ from 'lodash';

export default {
  name: 'StoreList',
  components: {
    Store
  },
  props: {
    stores: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
      paginate: ['storesWithImages'],
      storesArray: this.stores,
      filter: ''
    }
  },
  computed: {
    storesWithImages () {
      return _.map(this.storesArray, function (store) {
        store['image'] = 'https://via.placeholder.com/300?text=' + store.name;

        return store;
      });
    },
    storesCount () {
      return _.size(this.stores);
    }
  },
  watch: {
    filter (val) {
      this.storesArray = this.stores.filter(item => item.name.includes(val));
    }
  }
}
</script>
<style lang="scss">
@import './StoreList.scss';
</style>