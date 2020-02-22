import Vue from "vue";
import App from "./App.vue";
import router from "@/presentation/router";
import store from "@/infrastructure/store";

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
