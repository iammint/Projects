<template>
  <div id="score-panel">
    <div>
      SCORE: <span id="score">{{ score }}</span>
    </div>
    <div>
      LEVEL: <span id="level">{{ level }}</span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue"
let score = ref(0)
let level = ref(1)
// 设置最大等级
const MAX_LEVEL = 10
// 设置升级的分数
const UP_SCORE = 10

// 吃掉食物后加分，并且判断是否升级（每10分升一级）
function addScore() {
  score.value++
  if (score.value % UP_SCORE === 0) {
    levelUp()
  }
}
// 累积一定食物后升级
function levelUp() {
  if (level.value < MAX_LEVEL) {
    level.value++
  }
}
</script>

<style scoped lang="less">
#score-panel {
  width: 300px;
  display: flex;
  justify-content: space-between;
}
</style>
