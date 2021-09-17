import Vue from 'vue'
import VueViewer from 'v-viewer'
import axios from 'axios'
import VueAxios from 'vue-axios'
import RobinChat from './App.vue'
import Toasted from 'vue-toasted'
// import store from './utils/index'
import '../types/index.d.ts'
import './styles/main.css'

Vue.use(VueAxios, axios)
Vue.use(VueViewer)
Vue.use(Toasted)
Vue.toasted.register('custom_success', (message) => message, {
  type: 'success',
  theme: 'toasted-primary',
  duration: 3000,
  containerClass: 'robin-toasted',
  className: 'robin-toasted-container',
  action: [
    {
      text: '',
      icon: 'close',
      onClick: (e, toastObject) => {
        toastObject.goAway(0)
      }
    }
  ]
})
Vue.toasted.register('custom_error', (message) => message, {
  type: 'error',
  theme: 'toasted-primary',
  duration: 3000,
  containerClass: 'robin-toasted',
  className: 'robin-toasted-container',
  action: [
    {
      text: '',
      icon: 'close',
      onClick: (e, toastObject) => {
        toastObject.goAway(0)
      }
    }
  ]
})

// eslint-disable-next-line no-new
// new Vue({
//   // store,
//   render: (h) => h(RobinChat)
// })

// robinChat.$mount('#app')

export { RobinChat }
