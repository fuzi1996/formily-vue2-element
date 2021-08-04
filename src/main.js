import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui';

import 'element-ui/lib/theme-chalk/index.css';
// import '@formily/element/esm/style'

import autoRegistComponent from './autoRegistComponent';

Vue.use(ElementUI);
Vue.use(autoRegistComponent)
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')