<template>
  <div>
    <div class="nav-wrapper clearfix">
      <ul class="nav clearfix">
        <li class="empty snd">
          <a href="JavaScript:;"></a>
          <!-- 创建左侧导航菜单 -->
          <ul class="left-menu">
            <li class="left-li">
              <a href="JavaScript:;"
                >手机
                <i class="fas fa-angle-right"></i>
              </a>
            </li>

            <li class="left-li">
              <a href="JavaScript:;"
                >电视
                <i class="fas fa-angle-right"></i>
              </a>
            </li>

            <li class="left-li">
              <a href="JavaScript:;"
                >笔记本 平板
                <i class="fas fa-angle-right"></i>
              </a>
            </li>

            <li class="left-li">
              <a href="JavaScript:;"
                >家电
                <i class="fas fa-angle-right"></i>
              </a>
            </li>

            <li class="left-li">
              <a href="JavaScript:;"
                >出行 穿戴
                <i class="fas fa-angle-right"></i>
              </a>
            </li>

            <li class="left-li">
              <a href="JavaScript:;"
                >智能 路由器
                <i class="fas fa-angle-right"></i>
              </a>
            </li>

            <li class="left-li">
              <a href="JavaScript:;"
                >电源 配件
                <i class="fas fa-angle-right"></i>
              </a>
            </li>

            <li class="left-li">
              <a href="JavaScript:;"
                >健康 儿童
                <i class="fas fa-angle-right"></i>
              </a>
            </li>

            <li class="left-li">
              <a href="JavaScript:;"
                >耳机 音响
                <i class="fas fa-angle-right"></i>
              </a>
            </li>

            <li class="left-li">
              <a href="JavaScript:;"
                >生活 箱包
                <i class="fas fa-angle-right"></i>
              </a>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
/* 设置左侧菜单left-menu的样式 */
.left-menu {
  position: absolute;
  z-index: 999;
  /* 位置应该以空list为相对定位 */
  width: 234px;
  height: 420px;
  background-color: rgba(105, 101, 101, 0.6);
  padding: 20px 0;
}
.nav .empty {
  position: relative;
}
.left-menu .left-li {
  display: block;
  padding-left: 30px;
  height: 42px;
  line-height: 42px;
}
.left-menu .left-li a {
  color: #fff;
  display: block;
}
.left-menu .left-li i {
  float: right;
  margin-right: 20px;
  color: rgba(225, 225, 225, 1);
  line-height: 40px;
}
.left-menu .left-li:hover {
  background-color: #ff6700 !important;
}

/* 设置商品下拉框 */
.nav-wrapper .goods-info {
  width: 100%;
  /* height: 228px; */
  height: 0;
  /* overflow: hidden; */
  background-color: #fff;
  /* 由于下拉框的宽度是整个视窗的100%，所以应该将大容器header-wrapper开启相对定位 */
  position: absolute;
  z-index: 9999;
  left: 0;
  top: 100px;
}
.nav .show-goods:hover ~ .goods-info {
  transition: height 0.3s;
  height: 228px;
  border-top: 1px solid rgb(224, 224, 224);
  box-shadow: 0 5px 5px rgba(0, 0, 0, 0.3);
}

/* 设置搜索框样式 */
.search-wrapper {
  width: 296px;
  height: 50px;
  float: left;
  margin-top: 25px;
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
  outline: 1px solid #ff6700;
}
</style>
