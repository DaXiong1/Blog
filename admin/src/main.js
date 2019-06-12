// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import { Alert, Message, Loading, MessageBox, Input, Button, Menu, Submenu, MenuItem, MenuItemGroup } from 'element-ui' // 引入element-ui
import mavonEditor from 'mavon-editor'
import 'mavon-editor/dist/css/index.css'
import format_date from './mixins/format_date'
import message from './mixins/message'

Vue.config.productionTip = false

Vue.use(Alert)
Vue.use(Loading.directive)
Vue.use(Input)
Vue.use(Button)
Vue.use(Menu)
Vue.use(Submenu)
Vue.use(MenuItem)
Vue.use(MenuItemGroup)
Vue.use(mavonEditor)

Vue.prototype.$loading = Loading.service
Vue.prototype.$msgbox = MessageBox
Vue.prototype.$alert = MessageBox.alert
Vue.prototype.$message = Message

Vue.mixin(format_date)
Vue.mixin(message)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
