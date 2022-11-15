<template>
  <div>
    <div class="topbar-wrapper">
      <div class="topbar clearfix w">
        <!-- 左侧导航 -->
        <ul class="service">
          <li>
            <router-link to="/home">首页</router-link>
          </li>
          <li class="line">|</li>

          <li><a href="JavaScript:;">MIUI</a></li>
          <li class="line">|</li>

          <li><a href="JavaScript:;">loT</a></li>
          <li class="line">|</li>

          <li><a href="JavaScript:;">云服务</a></li>
          <li class="line">|</li>

          <li><a href="JavaScript:;">天星数科</a></li>
          <li class="line">|</li>

          <li><a href="JavaScript:;">有品</a></li>
          <li class="line">|</li>

          <li><a href="JavaScript:;">小爱开放平台</a></li>
          <li class="line">|</li>

          <li><a href="JavaScript:;">企业团购</a></li>
          <li class="line">|</li>

          <li><a href="JavaScript:;">资质证照</a></li>
          <li class="line">|</li>

          <li><a href="JavaScript:;">协议规则</a></li>
          <li class="line">|</li>

          <li>
            <a href="JavaScript:;" class="app"
              >下载app

              <!-- 下拉框和下载app文字是同一个超链接 
                    所以放置二维码的框要和超链接放在一起
                    -->
              <div class="QRcode">
                <img
                  class="QRcodeimg"
                  src="../assets/img/二维码.png"
                  alt="QRcode"
                />
                <!-- 将文字放在span里 -->
                <span>小米商城APP</span>
              </div>
            </a>
          </li>
          <li class="line">|</li>

          <li><a href="JavaScript:;">Select Location</a></li>
        </ul>

        <!-- 由于向右浮动靠前的靠右，所以需要将购物车写在用户信息前面 -->
        <!-- 购物车 -->
        <ul class="shopping-cart">
          <li>
            <a href="JavaScript:;">
              <i class="fas fa-shopping-cart"></i>
              购物车 <span>(0)</span>
            </a>
          </li>
        </ul>

        <!-- 右侧用户信息 -->
        <!-- 可以设置user-info右浮动，li左浮动，不用调整顺序 -->
        <ul class="user-info">
          <li><router-link to="/login">登录</router-link></li>
          <li class="line">|</li>

          <li><router-link to="/register">注册</router-link></li>
          <li class="line">|</li>

          <li class="msg"><a href="JavaScript:;">消息通知</a></li>
          <li class="line">|</li>

          <li class="msg"><a href="JavaScript:;">我的订单</a></li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      keyword: "",
    }
  },
  methods: {
    // 搜索框路由跳转
    search() {
      this.$router.push({
        name: "search",
        params: {
          keyword: this.keyword,
        },
      })
    },
  },
}
</script>

<style scoped>
/* 最好根据结构顺序来写，先设置上方导航条容器的背景和宽度 */
.topbar-wrapper {
  background-color: #333;
  line-height: 40px;
  height: 40px;
}

/* 设置内部容器的宽度且居中 直接向topbar元素添加在base.css规定的w类 */
/* 让内部容器的高度被内容撑起来 给topbar元素添加在base.css规定的clearfix类 */

/* 左侧导航向左侧浮动 */
.topbar .service,
.topbar li {
  float: left;
}

/* 设置二维码下拉框 */
.topbar .app .QRcode {
  width: 124px;
  /* height: 148px; */
  background-color: #fff;
  /* 由于span作为后代元素继承了行高line-height，所以会溢出，因此要重新设置span的行高 */
  line-height: 1;
  text-align: center;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
  /* 不应该占据父元素的位置所以应该脱离文档流，设置绝对定位 */
  position: absolute;
  left: -40px;

  /* 鼠标移入的时候才出来 */
  /* display: none; */
  height: 0;
  /* 必须要写overflow否则元素溢出 */
  overflow: hidden;
  /* 为了设置过渡效果，通过改变高度来隐藏 */
  transition: height 0.3s;
}
/* 注意此处小三角浮现的写法 */
.app:hover .QRcode,
.app:hover::after {
  display: block;
  height: 148px;
  z-index: 9999;
}

.topbar .service .QRcode span {
  color: #000;
  font-size: 14px;
}
.topbar .service .QRcode img {
  width: 90px;
  height: 90px;
  margin: 17px 17px 10px 17px;
}
/* 设置下拉框的小三角 */
.app::after {
  content: "";
  /* display: block; 
    绝对定位之后脱离文档流
    */
  width: 0px;
  height: 0px;
  border: 8px solid transparent;
  border-top: none;
  border-bottom-color: #fff;
  /* 调整位置开启绝对定位 */
  position: absolute;
  left: 0px;
  right: 0px;
  margin: auto;
  bottom: 0px;
  /* 鼠标移入才显示 */
  display: none;
}
.topbar .service .app {
  /* 为小三角的父元素，开启相对定位 */
  position: relative;
}

.topbar .user-info,
.topbar .shopping-cart {
  float: right;
}

/* 设置超链接的样式 */
.topbar a {
  color: #b0b0b0;
  font-size: 12px;
  /* 在网页中不管是点击a文字还是a整个框都可以选中超链接，将a设置为行内块 */
  display: inline-block;
}
.topbar i {
  color: #b0b0b0;
  padding-right: 2px;
  font-size: 14px;
}
/* 设置悬浮效果 */
.topbar a:hover {
  color: #fff !important;
}
/* 设置line的样式 */
.line {
  font-size: 14px;
  margin: 0 6.6px;
  color: #424242;
}

/* 设置前两个用户信息的样式 */
.topbar .user-info {
  padding: 0 5px;
}
/* 消息通知的padding是10px */
.topbar .user-info .msg {
  padding: 0 10px;
}
/* 设置购物车的样式 */
.topbar .shopping-cart a {
  position: relative;
  z-index: 32;
  display: block;
  height: 40px;
  line-height: 40px;
  text-align: center;
  color: #b0b0b0;
  background: #424242;
  /* 水平居中：宽度等于父元素的宽度；垂直居中：line-height等于height */
  width: 120px;
}
.topbar .shopping-cart {
  width: 120px;
  /* 作为购物车下拉框最近的父元素开启相对定位 */
  position: relative;
}
/* 设置购物车鼠标悬浮效果 
hover要绑定给整个ul
*/
.topbar .shopping-cart:hover a {
  color: #ff6700;
  background-color: #fff !important;
}
.topbar .shopping-cart:hover i {
  color: #ff6700 !important;
}

/* 鼠标移入购物车之后添加一个框 */
.topbar .shopping-cart::after {
  content: "";
  width: 323px;
  /* height: 88px; 
    利用高度改变产生过渡效果
    */
  background-color: #fff;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
  position: absolute;
  top: 40px;
  right: 0;
  height: 0;
  z-index: 9999;
}
.topbar .shopping-cart:hover::after {
  height: 100px;
  transition: height 0.3s;
}
/* 设置第二块header的样式 
虽然header宽度是固定的但是下拉框的宽度占了屏幕的100%
*/
.header-wrapper {
  width: 100%;
  height: 100px;
  position: relative;
}
/* 设置图片的大小 */
.header .logo img {
  width: 56px;
  height: 56px;
}
.header .logo {
  float: left;
  position: absolute;
  margin-top: 22px;
}

/* 设置header的右半边导航 */
.nav-wrapper {
  padding: 12px 0 0 80px;
  float: left;
}

.nav-wrapper .nav {
  width: 850px;
}
.nav-wrapper .nav .snd {
  float: left;
  padding: 26px 10px 38px;
}
.nav-wrapper .nav .empty {
  width: 127px;
  padding-right: 15px;
}
.nav-wrapper .nav li .sndA {
  font-size: 16px;
  color: #333;
  display: block;
}
.nav-wrapper .nav .sndA:hover {
  color: #ff6700 !important;
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
