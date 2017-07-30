<template>
  <div id="app">
    <Topbar/>
    <ResumePreview/>
  </div>
</template>

<script>
import 'normalize.css/normalize.css'
import './assets/reset.css'
import Topbar from './components/Topbar'
import ResumePreview from './components/ResumePreview'
import store from './store/index'

import icons from './assets/iconfont.js'

export default {
  name: 'app',
  data: function(){
    return {
        text: '你好'
      }
  },
  store,
  components: { Topbar, ResumePreview }
}
</script>

<style lang="scss">
#app {
  width: 970px;
  margin: 10px auto;
  box-shadow: 2px 2px 4px;
  font-family: 'Helvetica Neue', 'Arial', 'PingFang SC', 'Hiragino Sans GB', 'STHeiti', 'Microsoft YaHei', 'WenQuanYi Micro Hei', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.icon {
    /* 通过设置 font-size 来改变图标大小 */
    width: 1em; height: 1em;
    /* 图标和文字相邻时，垂直对齐 */
    vertical-align: -0.15em;
    /* 通过设置 color 来改变 SVG 的颜色/fill */
    fill: currentColor;
    /* path 和 stroke 溢出 viewBox 部分在 IE 下会显示
       normalize.css 中也包含这行 */
    overflow: hidden;
}
</style>
