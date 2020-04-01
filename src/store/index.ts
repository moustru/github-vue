import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

interface RootState {
  results: Array<any>;
  total: number | null;
}

const store = {
  state: {
    results: [],
    total: null
  },

  getters: {},

  mutations: {
    SET_RESULTS(state, { items, total }) {
      state.results = items
      state.total = total
    },

    RESET_RESULTS(state) {
      state.results = []
    }
  },

  actions: {
    async GET_RESULTS({ commit }, payload) {
      const { data } = await axios.get('https://api.github.com/search/users', {
        params: {
          q: payload
        }
      })

      commit('SET_RESULTS', {
        items: data.items,
        total: data.total_count
      })
    }
  }
}

export default new Vuex.Store<RootState>(store)
