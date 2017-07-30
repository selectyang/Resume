import Vuex from 'vuex'
import Vue from 'vue'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    contacts: [
      {icon: 'phone', url: '#', content: '18665168286'},
      {icon: 'email', url: '#', content: 'yangjiawen_01@163.com'},
      {icon: 'Git', url: 'https://github.com/selectyang', content: 'github.com/selectyang'},
      {icon: 'blog', url: 'http://www.jianshu.com/u/a2f78bf8a87b', content: 'jianshu.com/selectyang'},
      {icon: 'city', url: '#', content: '深圳宝安'}
    ],
    projects: {
      config: [
        {field: 'compontent', title: '组件库', sort: 'jQuery库'},
        {field: 'translate', title: '仿写有道翻译', sort: 'jQuery库'},
        {field: 'fullpage', title: '仿写锤子fullpage首页', sort: '原生JS'},
        {field: 'vue', title: 'Vue 应用', sort: 'Vue 框架'}
      ],
      compontent: [
        {content: 'jQuery制作轮播组件', preview: 'https://selectyang.github.io/Mypractice/advanced/carousel/', code: 'https://github.com/selectyang/Mypractice/tree/master/advanced/carousel'},
        {content: 'jQuery制作曝光加载组件', preview: 'https://selectyang.github.io/Mypractice/advanced/exposure/', code: 'https://github.com/selectyang/Mypractice/tree/master/advanced/exposure'},
        {content: 'jQuery日历组件', preview: 'https://selectyang.github.io/Mypractice/advanced/Calendar/', code: 'https://github.com/selectyang/Mypractice/tree/master/advanced/Calendar'}
      ],
      translate: [
        {content: '使用jQuery仿写有道翻译', preview: '#', code: '#'}
      ],
      fullpage: [
        {content: '使用原生JS仿写锤子fullpage', preview: '#', code: '#'}
      ],
      vue: [
        {content: 'Todo-list', preview: 'https://selectyang.github.io/Sample/Todo/page.html', code: 'https://github.com/selectyang/Sample/tree/master/Todo'},
        {content: 'vue 在线简历编辑器', preview: '#', code: '#'}
      ]
    },
    skill: {
      xxx: [
        {field: 'h5', title: 'HTML/CSS'},
        {field: 'js', title: 'ECMAScript(JavaScript)'},
        {field: 'dom', title: 'DOM / BOM 及常见的 Web API'},
        {field: 'lib', title: '库 / 框架'}
      ],
      h5: [
        {tips: '熟悉盒模型概念, 能编写语义合理的 HTML, 模块化的 CSS, 实现常见的界面布局与动画'},
        {tips: '熟悉已经标准化的 HTML5 / CSS3 特性'}
      ],
      js: [
        {tips: '熟悉 ECMAScript(JavaScript), 熟练掌握模块化, 面向对象, MVC 等编程思想'},
        {tips: '熟练使用原生 JS 编程, 具备学习各种框架的能力学习 ES6/7 规范, 对 ES6 新特性较为熟悉'},
        {tips: '了解常见的数据结构与算法知识, 能够使用 JS 实现哈希表等常见数据结构'}
      ],
      dom: [
        {tips: '熟悉原生 DOM 与 BOM 的使用, 有桌面 / 移动端前端组件开发经验'},
        {tips: '了解基本的前端兼容性处理, 性能优化知识与技巧, 并能在项目中加以实践'}
      ],
      lib: [
        {tips: '熟悉 jQuery / Elemnt 等常见库的使用'},
        {tips: '对vue 有一定的了解, 有过 Demo 实现经验'}
      ]
    },
    other: [
        {tips: '熟练掌握程序调试方法, 能快速定位解决错误'},
        {tips: '日常使用 Git 进行开发, 乐于尝试新工具'}
    ]
  }
})
