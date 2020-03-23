import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
// 引入mint-UI框架
import MintUI from "mint-ui";
import "mint-ui/lib/style.css";
Vue.use(MintUI);

Vue.config.productionTip = false;
import rem from "./rem/rem.js";
new Vue({
  router,
  store,
  rem,
  render: h => h(App)
}).$mount("#app");