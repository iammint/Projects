<template>
  <div>
    <div>
      <!-- logo -->
      <span class="logo" title="Mall">
        <a href="" @click="goHome"
          ><img src="../../public/cart.svg" alt="shopping"
        /></a>
      </span>

      <!-- 搜索框 -->
      <div class="search-wrapper">
        <form action="#" class="search">
          <input type="search" class="search-inp" v-model="keyWord" />
          <button class="search-btn" @click="search">
            <i class="fas fa-search"></i>
          </button>
        </form>
      </div>
    </div>

    <div class="type-nav">
      <!-- 当路由跳转到search，鼠标移动决定是否show，直接在byePurple上添加 -->
      <div class="container">
        <div @mouseleave="byePurple" @mouseenter="enterShow">
          <h2 class="all">全部商品分类</h2>

          <!-- 过渡动画 -->
          <transition name="sort">
            <div class="sort" v-show="show">
              <!-- 利用事件委派+编程式导航 -->
              <div class="all-sort-list2" @click="goSearch">
                <div
                  class="item"
                  v-for="(ctg, idx) in category"
                  :key="ctg.categoryId"
                >
                  <h3
                    @mouseenter="changeIdx(idx)"
                    :class="{ cur: currentIdx === idx }"
                  >
                    <a
                      :data-categoryName="ctg.categoryName"
                      :data-categoryId="ctg.categoryId"
                      >{{ ctg.categoryName }}</a
                    >
                  </h3>
                  <div
                    class="item-list clearfix"
                    :style="{ display: currentIdx == idx ? 'block' : 'none' }"
                  >
                    <div class="subitem">
                      <dl
                        class="fore"
                        v-for="ctg1 in ctg.categoryChild"
                        :key="ctg1.categoryId"
                      >
                        <dt>
                          <a
                            :data-categoryName="ctg1.categoryName"
                            :data-category1Id="ctg1.categoryId"
                            >{{ ctg1.categoryName }}</a
                          >
                        </dt>
                        <dd>
                          <em
                            v-for="ctg2 in ctg1.categoryChild"
                            :key="ctg2.categoryId"
                          >
                            <a
                              :data-categoryName="ctg2.categoryName"
                              :data-category2Id="ctg2.categoryId"
                              >{{ ctg2.categoryName }}</a
                            >
                          </em>
                        </dd>
                      </dl>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </transition>
        </div>
        <nav class="nav">
          <a href="###">服装城</a>
          <a href="###">美妆馆</a>
          <a href="###">尚品汇超市</a>
          <a href="###">全球购</a>
          <a href="###">闪购</a>
          <a href="###">团购</a>
          <a href="###">有趣</a>
          <a href="###">秒杀</a>
        </nav>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex"
import _ from "lodash"
export default {
  data() {
    return {
      currentIdx: -1,
      show: true,
      // 搜索框内容
      keyWord: "",
    }
  },
  mounted() {
    // 不应在单独模块中请求，需要在APP.vue中请求，只需请求一次
    // 挂载完毕vuex发送请求，获取数据储存在store中
    // this.$store.dispatch("leftNav/categoryList")

    // 如果路由跳转到search，隐藏类别下拉。每次进行路由跳转时会重新mounted
    if (this.$route.path != "/home") {
      this.show = false
    }
  },
  computed: {
    ...mapState("leftNav", ["category"]),
  },
  methods: {
    // 通过JS实现hover效果，防止用户过快操作，需要节流
    // changeIdx(idx) {
    //   this.currentIdx = idx
    // },
    changeIdx: _.throttle(function (idx) {
      this.currentIdx = idx
    }, 50),
    // byePurple() {
    //   this.currentIdx = -1
    // },

    // 事件委派实现a路由跳转
    // 子节点中所有a标签添加自定义属性data-categoryName
    goSearch(event) {
      let element = event.target
      // element上有dataset属性可以访问到自定义属性
      let { categoryname, categoryid, category1id, category2id } =
        element.dataset
      // 如果是a标签
      if (categoryname) {
        // 整理路由跳转的path和query
        let location = { name: "search" }
        let query = { categoryName: categoryname }
        // 如果是一级、二级、三级a标签
        if (categoryid) {
          query.categoryId = categoryid
        } else if (category1id) {
          query.category1Id = category1id
        } else if (category2id) {
          query.category2Id = category2id
        }
        location.query = query
        // 如果搜索框有params参数，也要传递
        if (this.$route.params) {
          location.params = this.$route.params
        }
        this.$router.push(location)
      }
    },

    // logo路由跳转
    goHome() {
      this.$router.push("/home")
    },

    // 搜索框路由跳转，如果已经有query参数，也要传递
    search() {
      let location = {
        name: "search",
        params: { keyWord: this.keyWord },
      }
      if (this.$route.query) {
        location.query = this.$route.query
      }
      this.$router.push(location)
    },

    // 进入search后鼠标移入需要show类别下拉，此处无需区分path
    enterShow() {
      this.show = true
    },
    // 鼠标移出show类别收起，与byePurple写在一起
    byePurple() {
      this.currentIdx = -1
      if (this.$route.path !== "/home") {
        this.show = false
      }
    },
  },
}
</script>

<style lang="less" scoped>
// logo
.logo img {
  margin-left: 30px;
  width: 45px;
  height: 45px;
}

/* 设置搜索框样式 */
.search-wrapper {
  width: 296px;
  height: 50px;
  float: right;
  border: 1px solid rgb(224, 224, 224);
}

/* 去除搜索框和图标之间的缝隙 */
.search-wrapper .search-inp {
  float: left;
  padding: 0;
  border: 0;
  height: 50px;
  width: 242px;
  font-size: 16px;
  /* 将默认轮廓线去掉 */
  outline: none;
}
.search-wrapper .search-btn {
  float: left;
  padding: 0 6px;
  border: 0;
  height: 50px;
  width: 54px;
  /* border-left: 1px solid rgb(224, 224, 224); */
  outline: 1px solid rgb(224, 224, 224);
  background-color: #fff;
}
.search-wrapper .search-btn i {
  font-size: 18px;
  color: #616161;
}

/* 设置input获取焦点之后的样式 */
.search-wrapper .search-inp:focus,
.search-wrapper .search-inp:focus + .search-btn {
  outline: 1px solid rgb(109, 111, 195);
}
.type-nav {
  border-bottom: 2px solid rgb(109, 111, 195);

  .container {
    width: 1200px;
    margin: 0 auto;
    display: flex;
    position: relative;

    .all {
      width: 210px;
      height: 45px;
      background-color: rgb(109, 111, 195);
      line-height: 45px;
      text-align: center;
      color: #fff;
      font-size: 14px;
      font-weight: bold;
    }

    .nav {
      a {
        height: 45px;
        margin: 0 22px;
        line-height: 45px;
        font-size: 16px;
        color: #333;
      }
    }

    .sort {
      position: absolute;
      left: 0;
      top: 45px;
      width: 210px;
      height: 510px;
      position: absolute;
      background: #fafafa;
      z-index: 999;

      .all-sort-list2 {
        .item {
          h3 {
            line-height: 30px;
            font-size: 14px;
            font-weight: 400;
            overflow: hidden;
            padding: 0 20px;
            margin: 0;

            a {
              color: #333;
            }
            &.cur {
              background: rgb(186, 187, 238);
            }
          }

          .item-list {
            display: none;
            position: absolute;
            width: 734px;
            min-height: 460px;
            background: #f7f7f7;
            left: 210px;
            border: 1px solid #ddd;
            top: 0;
            z-index: 9999 !important;

            .subitem {
              float: left;
              width: 650px;
              padding: 0 4px 0 8px;

              dl {
                border-top: 1px solid #eee;
                padding: 6px 0;
                overflow: hidden;
                zoom: 1;

                &.fore {
                  border-top: 0;
                }

                dt {
                  float: left;
                  width: 54px;
                  line-height: 22px;
                  text-align: right;
                  padding: 3px 6px 0 0;
                  font-weight: 700;
                }

                dd {
                  float: left;
                  width: 415px;
                  padding: 3px 0 0;
                  overflow: hidden;

                  em {
                    float: left;
                    height: 14px;
                    line-height: 14px;
                    padding: 0 8px;
                    margin-top: 5px;
                    border-left: 1px solid #ccc;
                  }
                }
              }
            }
          }
        }
      }
    }
    //过渡动画的样式
    //过渡动画开始状态（进入）
    .sort-enter-from {
      height: 0px;
      transform: rotate(0deg);
    }
    // 过渡动画结束状态（进入）
    .sort-enter-to {
      height: 510px;
    }
    // 定义动画时间、速率
    .sort-enter-active,
    .sort-leave-active {
      transition: all 0.2s linear;
    }
  }
}
</style>
