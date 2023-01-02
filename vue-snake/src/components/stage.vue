<template>
  <div id="stage">
    <!-- 🐍 -->
    <div id="snake" ref="snake">
      <!-- 表示蛇的各部分 -->
      <div ref="snakeHead"></div>
    </div>
    <!-- 设置食物 -->
    <div id="food" ref="foodEle">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue"
import _ from "lodash"

// 获取食物元素
const foodEle = ref<HTMLElement | null>(null)
function getFoodX() {
  return foodEle!.value?.offsetLeft
}
function getFoodY() {
  return foodEle!.value?.offsetTop
}

function changeFoodPos() {
  if (foodEle.value) {
    foodEle.value.style.left = _.random(0, 294) + "px"
    foodEle.value.style.top = _.random(0, 294) + "px"
  }
}

// 获取蛇身体的父容器snake
const snake = ref<HTMLElement | null>(null)
// 获取蛇头元素
const snakeHead = ref<HTMLElement | null>(null)
// 通过蛇的后代元素获取蛇的身体（身体是随着分数的获得逐渐增加的，身体也包括头部）
const snakeBody = snake.value?.getElementsByTagName("div")

// 获取蛇头的坐标
function getHeadX() {
  return snakeHead.value?.offsetLeft
}
function getHeadY() {
  return snakeHead.value?.offsetTop
}

// 设置蛇头的坐标
function setHeadX(value: number) {
  if (snakeHead.value) {
    snakeHead.value.style.left += value + "px"
  }
}
function setHeadY(value: number) {
  if (snakeHead.value) {
    snakeHead.value.style.top += value + "px"
  }
}

// 得分后添加身体
function addBody() {
  snake.value?.insertAdjacentHTML("beforeend", "<div></div>")
}

defineExpose({ getHeadX, getHeadY, setHeadX, setHeadY })
</script>

<style scoped lang="less">
@bg-color: #b7d4a8;
#stage {
  width: 304px;
  height: 304px;
  border: 2px solid black;
  // 父元素开启相对定位
  position: relative;

  #snake {
    & > div {
      height: 10px;
      width: 10px;
      background-color: black;
      border: 1px solid @bg-color;
      // 开启绝对定位
      position: absolute;
    }
  }

  #food {
    width: 10px;
    height: 10px;
    // 开启绝对定位
    position: absolute;
    left: 40px;
    top: 100px;
    // background-color: red;
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;
    align-content: space-between;

    & > div {
      width: 4px;
      height: 4px;
      background-color: black;
      // 旋转45度
      transform: rotate(45deg);
    }
  }
}
</style>
