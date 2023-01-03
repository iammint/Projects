// 组件scoreComp的数据
type numData = "score" | "level"
type scoreMethod = "addScore"
type scoreData = { [k in numData]: number } & { [k in scoreMethod]: () => void }

// 组件stageComp的数据
type methodListWithoutArg =
  | "getHeadX"
  | "getHeadY"
  | "getFoodX"
  | "getFoodY"
  | "changeFoodPos"
  | "addBody"
type methodListWithArg = "setHeadX" | "setHeadY"
type dataBoolean = "isAlive"
type stageMethod = {
  [k in methodListWithArg]: (value: number) => void
} & {
  [k in methodListWithoutArg]: () => number
} & {
  [k in dataBoolean]: boolean
}
