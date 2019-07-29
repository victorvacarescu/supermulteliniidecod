import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueResource from 'vue-resource'
import './plugins/element.js'

Vue.config.productionTip = false
Vue.use(VueResource)

Vue.http.options.root = 'http://supermulteliniidecod.menut.ro/api/';
Vue.http.options.emulateJSON = true
// Vue.http.headers.common['Token' ] = settings.get_token()
// Vue.http.headers.common['IdUser'] = settings.get_id_user()
// Vue.http.headers.common['AppCmd'] = '1'

new Vue({
  router,
  store,
  render: function (h) { return h(App) }
}).$mount('#app')
