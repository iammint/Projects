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
  computed: {
    // 简化数据
    attrsList(state) {
      // 如果用户网络速度过慢，至少返回一个空数组，否则无法遍历undefined
      return state.info.attrsList || []
    },
    goodsList(state) {
      return state.info.goodsList || []
    },
    trademarkList(state) {
      return state.info.trademarkList || []
    },
  },
}
