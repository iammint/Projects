Vue3 Composition API + TypeScript + Vite

贪吃蛇游戏实现的主要逻辑：

1. 蛇吃到食物后，食物位置重新随机生成，并且根据现有分数判断是否需要升级，最高级别是 10 级
2. 每获得 10 分升一级
3. 游戏初始化，通过`onMounted`给`document`挂载键盘事件
4. 将`event.key`的变化反应到变量`direction`上，由于`direction`是非响应式变量，因此无法通过监听`direction`调用`run`函数
5. 在`keyboardCb`中每执行到`direction`值改变时调用`run`
6. 通过`setInterval`让蛇自动移动
7. 如果撞墙或撞自己，游戏结束
8. 身体跟随头部：后面元素位置转移到前面元素上
9. bug1：获得的第一分与头部重叠
10. bug2：添加完身体div之后闪现在左上角后才变换位置
11. bug3：蛇可以随意转换方向
12. 