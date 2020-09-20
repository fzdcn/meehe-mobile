import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import axios from "@/utils/http";
import moment from "moment";

import "normalize.css/normalize.css";
import "@/assets/css/common.styl";

import {
	NavBar,
	Toast,
	Icon,
	Popup,
	Picker,
	Image,
	DropdownMenu,
	DropdownItem,
} from "vant";
import "vant/lib/index.css";

import "@/assets/css/index.styl";

Vue.use(NavBar)
	.use(Toast)
	.use(Icon)
	.use(Popup)
	.use(Picker)
	.use(Image)
	.use(DropdownMenu)
	.use(DropdownItem);
Vue.prototype.$moment = moment;
Vue.prototype.$http = axios;
Vue.config.productionTip = false;

new Vue({
	router,
	store,
	render: (h) => h(App),
}).$mount("#app");
