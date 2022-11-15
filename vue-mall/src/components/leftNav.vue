<template>
  <div>
    <div class="type-nav">
      <div class="container">
        <h2 class="all">全部商品分类</h2>
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
        <div class="sort">
          <div class="all-sort-list2">
            <div
              class="item"
              v-for="(ctg, idx) in category"
              :key="ctg.categoryId"
            >
              <h3
                @mouseenter="changeIdx(idx)"
                :class="{ cur: currentIdx === idx }"
                @mouseleave="byePurple"
              >
                <a href="">{{ ctg.categoryName }}</a>
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
                      <a href="">{{ ctg1.categoryName }}</a>
                    </dt>
                    <dd>
                      <em
                        v-for="ctg2 in ctg1.categoryChild"
                        :key="ctg2.categoryId"
                      >
                        <a href="">{{ ctg2.categoryName }}</a>
                      </em>
                    </dd>
                  </dl>
                </div>
              </div>
            </div>
          </div>
        </div>
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
    }
  },
  mounted() {
    // 挂载完毕vuex发送请求，获取数据储存在store中
    this.$store.dispatch("leftNav/categoryList")
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
    byePurple() {
      this.currentIdx = -1
    },
  },
}
</script>

<style lang="less" scoped>
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
      height: 461px;
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
    .sort-enter {
      height: 0px;
    }
    // 过渡动画结束状态（进入）
    .sort-enter-to {
      height: 461px;
    }
    // 定义动画时间、速率
    .sort-enter-active {
      transition: all 0.5s linear;
    }
  }
}
</style>
