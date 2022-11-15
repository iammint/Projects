<template>
  <div>
    <ul class="nav clearfix">
      <li class="empty snd">
        <a href="JavaScript:;"></a>
        <ul class="left-menu">
          <!-- 想通过JS来实现hover的效果，如果单纯用true/false则会给所有li添加/删除背景，因此需要用到index才能准确判断是哪个li -->
          <li
            class="left-li"
            v-for="(ctg, idx) in category"
            :key="ctg.categoryId"
            @mouseenter="changeIdx(idx)"
            :class="{ orange: currentIdx === idx }"
            @mouseleave="byeOrange"
          >
            <a href="JavaScript:;"
              >{{ ctg.categoryName }}
              <i class="fas fa-angle-right"></i>
            </a>
          </li>
        </ul>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapState } from "vuex"
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
    // 通过JS实现hover效果
    changeIdx(idx) {
      this.currentIdx = idx
    },
    byeOrange() {
      this.currentIdx = -1
    },
  },
}
</script>

<style>
/* 设置左侧菜单left-menu的样式 */
.left-menu {
  /* position: absolute; */
  z-index: 999;
  /* 位置应该以空list为相对定位 */
  width: 234px;
  background-color: rgba(105, 101, 101, 0.6);
  padding: 10px 0;
  margin-left: 5px;
}
.nav .empty {
  position: relative;
}
.left-menu .left-li {
  display: block;
  padding-left: 30px;
  height: 30px;
  line-height: 30px;
}
.left-menu .left-li a {
  color: #fff !important;
  display: block;
  font-size: 9px;
}
.left-menu .left-li i {
  float: right;
  margin-right: 20px;
  color: rgba(225, 225, 225, 1);
  line-height: 30px;
}
/* .left-menu .left-li:hover {
  background-color: #ff6700 !important;
} */
/* 用js添加hover改变背景属性 */
.orange {
  background-color: #ff6700 !important;
}
.el-main {
  --el-main-padding: 0px;
}
</style>
