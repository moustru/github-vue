<template>
  <div class="main">
    <header class="header">
      <h1 class="header-title">GitHub Search</h1>
    </header>
    <div class="main-input">
      <input
        type="text"
        v-model="searchString"
        @keyup.enter="search"
        class="input"
        placeholder="Поиск по логину пользователя"/>
      <button @click="search" class="btn btn-yes">Поиск</button>
    </div>
    <div class="main-field">
      <transition-group name="slide-fade">
        <item v-for="item in results" :key="item.id" :item="item"/>
      </transition-group>
      <transition name="slide-fade">
        <span class="no-results" v-if="total === 0">Ничего не найдено</span>
      </transition>
    </div>
  </div>
</template>

<script lang="ts">
import Item from '@/components/Item.vue'
import { mapState, mapMutations, mapActions } from 'vuex'

export default {
  data() {
    return {
      searchString: null
    }
  },

  components: { Item },
  computed: {
    ...mapState({
      results: (state: any) => state.results,
      total: (state: any) => state.total
    })
  },

  methods: {
    ...mapMutations([ 'RESET_RESULTS' ]),
    ...mapActions([ 'GET_RESULTS' ]),

    search() {
      this.RESET_RESULTS()
      if(this.searchString) this.GET_RESULTS(this.searchString)
    }
  }
}
</script>

<style lang="scss" scoped>
@import './assets/config';

.main {
  width: 70%;
  height: inherit;
  margin: auto;

  &-input {
    @include Flex(space-between, center);
    width: 60%;
    margin: auto;

    .input {
      width: 75%;
      font-size: 20px;
    }
  }

  &-field {
    @include Flex(flex-start, flex-start, row, wrap);
    margin-top: 50px;

    & > span {
      @include Flex(flex-start, flex-start, row, wrap);
    }
  }
}

.header {
  padding: 30px 0;
  text-align: center;
}

.no-results {
  display: block;
  width: 100%;
  text-align: center;
  font-size: 24px;
  font-weight: 800;
}

.slide-fade-enter-active, .slide-fade-leave-active {
  transition: all .3s ease;
}

.slide-fade-enter, .slide-fade-leave-to {
  transform: translateX(10px);
  opacity: 0;
}
</style>
