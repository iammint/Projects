<template>
  <div id="main">
    <!-- 设置游戏的舞台 -->
    <stage ref="stageComp"></stage>
    <!-- 设置游戏的积分牌 -->
    <scorePanel></scorePanel>
  </div>
</template>

<script setup lang="ts">
import stage from "./components/stage.vue"
import scorePanel from "./components/scorePanel.vue"
import { ref, onMounted, watch } from "vue"
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
  console.log(direction)
}

function isLegalKey(key: string): key is Direction {
  return directionKeyName.includes(key as Direction)
}

onMounted(() => {
  document.addEventListener("keyup", KeyboardCb)
})

type methodListWithoutArg = "getHeadX" | "getHeadY"
type methodListWithArg = "setHeadX" | "setHeadY"
type stageMethod = {
  [k in methodListWithArg]: (value: number) => void
} & {
  [k in methodListWithoutArg]: () => void
}
const stageComp = ref<stageMethod | null>(null)
// 控制蛇移动的方法
function run() {
  // 由direction的值来决定移动方向
  // 向上 top减小， 向下 top增大
  // 向左 left减小， 向右 left增大

  // 获取蛇的位置
  if (stageComp.value) {
    let changeX = stageComp.value.setHeadX
    let changeY = stageComp.value.setHeadY

    switch (direction) {
      case "ArrowUp":
        changeY(-10)
        break

      case "ArrowDown":
        changeY(10)
        break

      case "ArrowLeft":
        changeX(-10)
        break

      case "ArrowRight":
        changeX(10)
        break
    }
  }
}

watch()
</script>

<style lang="less">
@bg-color: #b7d4a8;

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font: bold 20px "Courier";
}

// 设置主窗口的样式
#main {
  font: bold 20px "Courier";
  width: 360px;
  height: 420px;
  background-color: @bg-color;
  // 设置main容器居中
  margin: 100px auto;
  border: 10px solid black;
  border-radius: 30px;
  // 设置main内的子容器居中
  display: flex;
  flex-flow: column;
  align-items: center;
  justify-content: space-around;
}
</style>
