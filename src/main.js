import Vue from 'vue'
import App from './App.vue'
import router from './router'

import http from '../http.js'

// import Vant from 'vant'
import Toast from 'vant/lib/toast'
import Field from 'vant/lib/field'
import Icon from 'vant/lib/icon'
import Uploader from 'vant/lib/uploader'
import Dialog from 'vant/lib/dialog'
import ActionSheet from 'vant/lib/action-sheet'
import List from 'vant/lib/list'
import { Tab, Tabs } from 'vant'
import 'vant/lib/index.css'
import '@/assets/style.css'

Vue.use(Field)
Vue.use(Icon)
Vue.use(Uploader)
Vue.use(Dialog)
Vue.use(ActionSheet)
Vue.use(Tab)
Vue.use(Tabs)
Vue.use(List)
Vue.prototype.$msg = Toast
Vue.prototype.$http = http
// Vue.use(Vant)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
