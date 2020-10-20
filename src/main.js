import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false
// import Banner from '@/components/Banner/Banner.vue'
// const Components={
//   Banner
// }
// Object.keys(Components).forEach(name=>{
//   Vue.Component(name,Components[name])
// })
new Vue({
  render: h => h(App),
}).$mount('#app')
