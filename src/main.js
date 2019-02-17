import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui'
import VueAreaLinkage from 'vue-area-linkage'
import '@/assets/css/reset.css'
import 'element-ui/lib/theme-chalk/index.css'
import 'vue-area-linkage/dist/index.css'
import 'vant/lib/button/style';
import '@/mock/mock.js'
import { Button, List,PullRefresh,Card,SubmitBar  } from 'vant';

Vue.use(List).use(Button).use(PullRefresh).use(Card).use(SubmitBar);

Vue.use(ElementUI);
Vue.use(VueAreaLinkage);

Vue.config.productionTip = false;
new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
