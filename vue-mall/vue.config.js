const { defineConfig } = require("@vue/cli-service")

// element-plus自动引入
const AutoImport = require("unplugin-auto-import/webpack")
const Components = require("unplugin-vue-components/webpack")
const { ElementPlusResolver } = require("unplugin-vue-components/resolvers")

module.exports = defineConfig({
  transpileDependencies: true,

  // 关闭eslint语法检查
  lintOnSave: false,

  // element-plus配置
  configureWebpack: {
    plugins: [
      AutoImport({
        resolvers: [ElementPlusResolver()],
      }),
      Components({
        resolvers: [ElementPlusResolver()],
      }),
    ],
  },

  // 代理服务器解决跨域问题
  devServer: {
    proxy: {
      "/api": {
        target: "http://gmall-h5-api.atguigu.cn",
      },
    },
  },
})
