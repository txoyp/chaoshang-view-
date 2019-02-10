import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui'
import VueAreaLinkage from 'vue-area-linkage'
import {pca,pcaa} from 'area-data'
import 'element-ui/lib/theme-chalk/index.css'
import 'vue-area-linkage/dist/index.css'

Vue.use(ElementUI);
Vue.use(VueAreaLinkage);

Vue.config.productionTip = false;
new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
