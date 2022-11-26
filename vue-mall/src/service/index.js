// 对API接口进行统一管理
import { request, mockRequest } from "./request"

// 左侧导航栏/product/getBaseCategoryList  GET  无参数
export function getBaseCategoryList() {
  // 需要return让其他模块使用
  return request({
    url: "/product/getBaseCategoryList",
    method: "GET",
  })
}

// Home轮播图
export const getCarouselImg = () => mockRequest.get("/banner")

// Home中的floor广告
export const getFloor = () => mockRequest.get("/floor")

// 🥲这个接口用不了了。搜索页面商品详情/list  POST  必须带参数
/*
eg: {
  "category3Id": "61",
  "categoryName": "手机",
  "keyword": "小米",
  "order": "1:desc",
  "pageNo": 1,
  "pageSize": 10,
  "props": ["1:1700-2799:价格", "2:6.65-6.74英寸:屏幕尺寸"],
  "trademark": "4:小米"
} 
*/
// 传递的参数至少是一个空对象
export const getSearchInfo = (data) =>
  request({
    url: "/list",
    method: "POST",
    data: data,
  })

export const getVerificationCode = (number) =>
  request({
    url: `/user/passport/sendCode/${number}`,
    method: "GET",
  })

// 注册
export const getRegisterData = (data) => {
  request({
    url: "/user/passport/register",
    data,
    method: "POST",
  })
}

// 登录
export const getUserLogin = (data) => {
  request({
    url: "/user/passport/login",
    data,
    method: "POST",
  })
}
