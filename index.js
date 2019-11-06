/**
 * 兼容各版本浏览器的fullScreen Api
 */


const requestFullScreen = (elem = document.documentElement) => {
  const requestApi = elem.requestFullscreen || elem.webkitRequestFullScreen || elem.mozRequestFullScreen || elem.msRequestFullscreen
  if (requestApi) {
    requestApi.call(elem)
  }
}

const exitFullScreen = () => {
  const exitApi = document.exitFullscreen || document.webkitExitFullscreen || document.mozCancelFullScreen || document.msExitFullscreen
  if (exitApi) {
    exitApi.call(document)
  }
}

const getFullScreenElement = () => {
  return document.fullscreenElement || document.webkitFullscreenElement || document.mozFullScreenElement || document.msFullscreenElement
}

const getOnScreenChangeEventName = () => {
  const root = document.documentElement
  let eventName = null
  const FullScreenEvents = {
    requestFullscreen: 'fullscreenchange',
    webkitRequestFullscreen: 'webkitfullscreenchange',
    mozRequestFullScreen: 'mozfullscreenchange',
    msRequestFullscreen: 'msfullscreenchange',
  }
  Object.entries(FullScreenEvents).some(([key, value]) => {
    if (root[key]) {
      eventName = value
      return true
    }
    return false
  })
  return eventName
}

const onFullScreenChange = (cb) => {
  const eventName = getOnScreenChangeEventName()
  if (eventName) {
    document.addEventListener(eventName, cb)
  }
}

const offFullScreenChange = (cb) => {
  const eventName = getOnScreenChangeEventName()
  if (eventName) {
    document.removeEventListener(eventName, cb)
  }
}

/**
 * 是否处于全屏状态
 * @returns {boolean}
 */
const isInFullScreen = () => {
  return !!getFullScreenElement()
}

export {
  requestFullScreen,
  exitFullScreen,
  getFullScreenElement,
  getOnScreenChangeEventName,
  onFullScreenChange,
  offFullScreenChange,
  isInFullScreen,
}
