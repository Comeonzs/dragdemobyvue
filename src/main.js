import Vue from 'vue'
import App from './App.vue'
import  './assets/font/iconfont.css'; //icon
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
