import { getCarouselImg } from "@/service/index"
export default {
  namespaced: true,
  state() {
    return {
      images: [],
    }
  },
  actions: {
    async carouselImg({ commit }) {
      let result = await getCarouselImg()
      //   返回的只有数组，没有状态码
      if (result.code == 200) {
        commit("carouselImg", result.data)
      }
    },
  },
  mutations: {
    carouselImg(state, result) {
      state.images = result
    },
  },
}
