<template>
  <div class="ad w">
    <ul class="shortcut">
      <li>
        <a href="JavaScript:;">
          <i class="fas fa-clock"></i>
          保障服务</a
        >
      </li>
      <li>
        <a href="JavaScript:;">
          <i class="fas fa-city"></i>
          企业团购</a
        >
      </li>
      <li>
        <a href="JavaScript:;">
          <i class="fas fa-key"></i>
          F码通道</a
        >
      </li>
      <li>
        <a href="JavaScript:;">
          <i class="fas fa-pager"></i>
          米粉卡</a
        >
      </li>
      <li>
        <a href="JavaScript:;">
          <i class="fas fa-recycle"></i>
          以旧换新</a
        >
      </li>
      <li>
        <a href="JavaScript:;">
          <i class="fas fa-yen-sign"></i>
          话费充值</a
        >
      </li>
    </ul>

    <ul class="img-List">
      <li>
        <a href="JavaScript:;"
          ><img src="@/assets/img/Xiaomi11.jpg" alt="xiaomi"
        /></a>
      </li>
      <li>
        <a href="JavaScript:;"
          ><img src="@/assets/img/Xiaomi22.jpg" alt="xiaomi"
        /></a>
      </li>
      <li>
        <a href="JavaScript:;"
          ><img src="@/assets/img/Xiaomi33.jpg" alt="xiaomi"
        /></a>
      </li>
    </ul>
  </div>
</template>
<script>
export default {}
</script>

<style scoped>
.ad {
  height: 170px;
  margin-top: 14px;
}
.ad .shortcut,
.ad .img-List,
.ad li {
  float: left;
}
/* 设置左侧快捷方式 */
.ad .shortcut {
  width: 234px;
  height: 170px;
  background-color: #5f5750;
  /* 让两个边框分别往下 往右 */
  padding-top: 2px;
  padding-left: 2px;
}
/* 利用伪元素before加一个上边框 */
.ad .shortcut li::before {
  position: absolute;
  content: "";
  background: #665e57;
  width: 64px;
  height: 1px;
  left: 0;
  right: 0;
  margin: 0 auto;
}
/* ❗必须要给li开启相对定位，是相对自己居中 */
.ad .shortcut li {
  position: relative;
}

/* 利用伪元素after来设置左边框 */
.ad .shortcut li::after {
  content: "";
  position: absolute;
  background: #665e57;
  height: 64px;
  width: 1px;
  top: 0;
  bottom: 0;
  margin: auto 0;
}

.ad .shortcut a {
  display: block;
  height: 84px;
  width: 76px;
  color: #c9c6c4;
  text-align: center;
  font-size: 12px;
}
.ad .shortcut a:hover {
  color: #fff !important;
}
/* 设置图标字体 */
.ad .shortcut i {
  /* ❗要独占一行直接设置为块元素 */
  display: block;
  font-size: 20px;
  margin-bottom: 5px;
  padding-top: 18px;
}

/* 设置图片 */
.ad .img-List li {
  width: 316px;
  margin-left: 14px;
  /* 超过了父元素的宽度，最后一个图片没有右边距 */
}
.ad .img-List li:last-child {
  margin-right: 0;
}
.ad .img-List img {
  width: 100%;
  vertical-align: top;
}
</style>
