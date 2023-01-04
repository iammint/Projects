<template>
  <div id="main">
    <!-- 设置游戏的舞台 -->
    <stage ref="stageComp" @clear="clearInter"></stage>
    <!-- 设置游戏的积分牌 -->
    <scorePanel ref="scoreComp"></scorePanel>
  </div>
</template>

<script setup lang="ts">
import stage from "./components/stage.vue"
import scorePanel from "./components/scorePanel.vue"
import { ref, onMounted } from "vue"

// 获取子组件scoreComp的数据
const scoreComp = ref<scoreData | null>(null)

// 获取子组件stageComp的方法
const stageComp = ref<stageMethod | null>(null)

// 控制蛇移动的方法
function run() {
  // 由direction的值来决定移动方向
  // 向上 top减小， 向下 top增大
  // 向左 left减小， 向右 left增大
  // 获取stageComp的方法

  let changeX = stageComp.value!.setHeadX
  let changeY = stageComp.value!.setHeadY

  let getX = stageComp.value!.getHeadX
  let getY = stageComp.value!.getHeadY

  let X = getX()
  let Y = getY()

  switch (direction) {
    case "ArrowUp":
      changeY(Y - 10)
      break

    case "ArrowDown":
      changeY(Y + 10)
      break

    case "ArrowLeft":
      changeX(X - 10)
      break

    case "ArrowRight":
      changeX(X + 10)
      break
  }

  let newX = getX()
  let newY = getY()
  checkFood(newX, newY)
}
// 储存方向的变量
const directionKeyName = [
  "ArrowUp",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight",
] as const
let direction: Direction | undefined
type Direction = typeof directionKeyName[number]
// 游戏的初始化，键盘触发调用函数，游戏开始
// 由于键盘事件与input绑定，采用tabindex="0"属性也需要鼠标点击后才可触发键盘事件
// 因此采用生命周期钩子实现键盘事件调用函数
function KeyboardCb(event: KeyboardEvent) {
  if (!isLegalKey(event.key)) {
    return
  }
  direction = event.key
  // 键盘事件触发run函数
  run()
}

function isLegalKey(key: string): key is Direction {
  return directionKeyName.includes(key as Direction)
}
// 蛇自己移动
let timer: ReturnType<typeof setInterval>
onMounted(() => {
  document.addEventListener("keyup", KeyboardCb)
  if (stageComp.value!.isAlive) {
    timer = setInterval(run, 300 - scoreComp.value!.level * 50)
  }
})
function clearInter() {
  clearInterval(timer)
}

// 检查蛇是否吃到了食物
// 如果吃到了食物，食物位置改变，增加身体，增加分数
function checkFood(X: number, Y: number) {
  let foodX = stageComp.value!.getFoodX()
  let foodY = stageComp.value!.getFoodY()
  if (X === foodX && Y === foodY) {
    stageComp.value!.changeFoodPos()
    scoreComp.value!.addScore()
    stageComp.value!.addBody()
  }
}
</script>

<style lang="less">
@bg-color: #b7d4a8;

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

// 设置主窗口的样式
#main {
  font: bold 20px "Courier";
  width: 360px;
  height: 420px;
  background-color: @bg-color;
  // 设置main容器居中
  margin: 50px auto;
  border: 10px solid black;
  border-radius: 30px;
  // 设置main内的子容器居中
  display: flex;
  flex-flow: column;
  align-items: center;
  justify-content: space-around;
}
</style>
