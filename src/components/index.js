// import Banner from './Banner/index.js'
// // import Vue from 'vue'
// // 存储组件列表
// const components = [
//     Banner
// ]
// // import Banner from './Banner/Banner.vue'
// // const Components={
// //   Banner
// // }
// // Object.keys(Components).forEach(name=>{
// //   Vue.Component(name,Components[name])
// // })
// // export default Components

// const install = function (Vue) {
//   if (install.installed) return
//   components.map(component => Vue.component(component.name, component))
// }
// if (typeof window !== 'undefined' && window.Vue) {
//   install(window.Vue)
// }

// export default {
//   install,
//   Banner
// }

import Vue from 'vue'
import Banner from './Banner/Banner.vue'
const Components = {
  Banner
}

Object.keys(Components).forEach(name => {
  Vue.component(name, Components[name])
})

export default Components