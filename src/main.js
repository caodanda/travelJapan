import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const router = [
  {
    path:"",
    redirect:""
  },

]
const rou = new VueRouter({
  routes:router
})

new Vue({
  router: rou,
  render: h => h(App),
}).$mount('#app')
