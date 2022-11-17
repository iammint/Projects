// 对API接口进行统一管理
import { request, mockRequest } from "./request"

// 左侧导航栏/product/getBaseCategoryList  GET  无参数
export function getBaseCategoryList() {
  // 需要return让其他模块使用
  return request({
    url: "/product/getBaseCategoryList",
    methods: "GET",
  })
}

// Home轮播图
export const getCarouselImg = () => mockRequest.get("/banner")

// floor广告
export const getFloor = () => mockRequest.get("/floor")
