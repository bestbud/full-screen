


## 安装
`npm install full-screen`

## 使用
### 1.导入
```
import {
  requestFullScreen,
  exitFullScreen,
  getFullScreenElement,
  getOnScreenChangeEventName,
  onFullScreenChange,
  offFullScreenChange,
  isInFullScreen,
} from 'full-screen';

```

### 2.调用函数
- 切换至全屏
```
requestFullScreen()
```
- 退出全屏
```
exitFullScreen()
```
- 获取全屏元素
```
const fullScreenElem = getFullScreenElement()
```

- 获取fullscreenchange事件名称
```
const fullscreenChangeEventName = getOnScreenChangeEventName()
```

- 监听 fullscreenchange 事件
```
onFullScreenChange(onFullScreenChangeCallback)
```
- 移除 fullscreenchange 事件监听
```
offFullScreenChange(onFullScreenChangeCallback)
```
- 判断当前是否处于全屏状态
```
const isInFullScreen = isInFullScreen()
```
- demo 监听全屏状态变化
```
const onFullScreenChangeCallback = () => {
   const isInFullScreen = isInFullScreen()
   if (isInFullScreen) {
     // 切换至全屏 操作
     ...
   } else {
     // 退出全屏 操作
     ...
   }
}

// 增加事件监听
onFullScreenChange(onFullScreenChangeCallback)
// 移除事件监听
offFullScreenChange(onFullScreenChangeCallback)
```
