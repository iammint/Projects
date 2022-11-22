import { getBaseCategoryList } from "@/service/index"
export default {
  namespaced: true,
  state() {
    return {
      category: [],
      keyword: "",
    }
  },
  actions: {
    // 通过API接口函数调用，向服务器发送请求获取数据
    async categoryList({ commit }) {
      let result = await getBaseCategoryList()
      if (result.code === 200) {
        commit("categoryList", result.data)
      }
    },
  },
  mutations: {
    categoryList(state, category) {
      state.category = category
    },
    updateKeyword(state, value) {
      state.keyword = value
    },
  },
}
