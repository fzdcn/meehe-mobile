import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import "normalize.css/normalize.css";
import "@/assets/css/common.styl";

import { NavBar, Toast, Icon, Popup, Picker } from "vant";
import "vant/lib/index.css";

import "@/assets/css/index.styl";

Vue.use(NavBar)
	.use(Toast)
	.use(Icon)
	.use(Popup)
	.use(Picker);
Vue.config.productionTip = false;

new Vue({
	router,
	store,
	render: (h) => h(App),
}).$mount("#app");
