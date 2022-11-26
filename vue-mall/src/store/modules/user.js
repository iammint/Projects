import { getVerificationCode, getRegisterData, getUserLogin } from "@/service"
export default {
  namespaced: true,
  state() {
    return {
      code: "",
    }
  },
  actions: {
    async getCode({ commit }, phoneNumber) {
      let result = await getVerificationCode(phoneNumber)
      if (result.code === 200) {
        commit("getCode", result.data)
        return "OK"
      } else {
        return Promise.reject(new Error("Failed"))
      }
    },
    async getRegister({ commit }, user) {
      // let result = await getRegisterData(user)
      // if (result.code === 200) {
      //   return "OK"
      // }
      // else {
      //   return Promise.reject(new Error("Failed"))
      // }
    },
    async userLogin({ commit }, user) {
      let result = await getUserLogin(user)
      console.log(result)
    },
  },
  mutations: {
    getCode(state, value) {
      state.code = value
    },
  },
}
