<template>
  <div>
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
  </div>
</template>

<script setup lang="ts">
import { ref, defineEmits, onMounted } from "vue"
// 控制蛇是否活着
let isAlive = true
// 获取食物元素
const foodEle = ref<HTMLElement | null>(null)
function getFoodX() {
  return foodEle.value!.offsetLeft
}
function getFoodY() {
  return foodEle.value!.offsetTop
}

function changeFoodPos() {
  // 食物的位置需要是10的倍数，且范围在0-290之间
  foodEle.value!.style.left = Math.round(Math.random() * 29) * 10 + "px"
  foodEle.value!.style.top = Math.round(Math.random() * 29) * 10 + "px"
}

// 获取蛇身体的父容器snake
const snake = ref<HTMLElement | null>(null)
// 获取蛇头元素
const snakeHead = ref<HTMLElement | null>(null)
// 通过蛇的后代元素获取蛇的身体（身体是随着分数的获得逐渐增加的，身体也包括头部）
// created生命周期
// const snakeBody = snake.value!.childrens

// 获取蛇头的坐标
function getHeadX() {
  return snakeHead.value!.offsetLeft
}
function getHeadY() {
  return snakeHead.value!.offsetTop
}
// 当isAlive为false时让父组件删除interval
const emit = defineEmits(["clear"])
// 设置蛇头的坐标
function setHeadX(value: number) {
  if (snakeHead.value) {
    if (value < 0 || value > 294) {
      isAlive = false
      // 撞墙后清除interval，否则还会一直调run
      emit("clear")
      alert("Game Over!")
    } else {
      snakeHead.value.style.left = value + "px"
      // 只要蛇头动，身体就要跟着动
      moveBody()
    }
  }
}
function setHeadY(value: number) {
  if (snakeHead.value) {
    if (value < 0 || value > 294) {
      isAlive = false
      emit("clear")
      alert("Game Over!")
    } else {
      snakeHead.value.style.top = value + "px"
      moveBody()
    }
  }
}

// 得分后添加身体
function addBody() {
  snake.value!.insertAdjacentHTML("beforeend", "<div></div>")
}

// 蛇身体移动
function moveBody() {
  let snakeBody = snake.value!.children
  // 将后面身体的位置设置为前面身体的位置
  for (let i = snakeBody.length - 1; i > 0; i--) {
    // 获取前面身体的位置
    let frontX = (snakeBody![i - 1] as HTMLElement).offsetLeft
    let frontY = (snakeBody![i - 1] as HTMLElement).offsetTop
    // 将前面身体的位置赋值给当前元素
    ;(snakeBody![i] as HTMLElement).style.left = frontX + "px"
    ;(snakeBody![i] as HTMLElement).style.top = frontY + "px"
  }
}

defineExpose({
  getHeadX,
  getHeadY,
  setHeadX,
  setHeadY,
  isAlive,
  getFoodX,
  getFoodY,
  changeFoodPos,
  addBody,
})
</script>

<style scoped lang="less">
@bg-color: #b7d4a8;
#stage {
  width: 304px;
  height: 304px;
  border: 2px solid black;
  // 父元素开启相对定位
  position: relative;

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
<style lang="less">
@bg-color: #b7d4a8;
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
</style>
