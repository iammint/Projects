import { getFloor } from "@/service/index"
export default {
  namespaced: true,
  state() {
    return {
      floorList: [],
    }
  },
  actions: {
    async floorData({ commit }) {
      let result = await getFloor()
      if (result.code == 200) {
        commit("floorData", result.data)
      }
    },
  },
  mutations: {
    floorData(state, result) {
      state.floorList = result
    },
  },
}
