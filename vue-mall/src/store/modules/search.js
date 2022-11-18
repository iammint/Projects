import { getSearchInfo } from "@/service"
export default {
  namespaced: true,
  state() {
    return {
      info: {},
    }
  },
  actions: {
    async getInfo({ commit }, data = {}) {
      let result = await getSearchInfo(data)
      if (result.code === 200) {
        commit("getInfo", result.data)
      }
    },
  },
  mutations: {
    getInfo(state, result) {
      state.info = result
    },
  },
}
