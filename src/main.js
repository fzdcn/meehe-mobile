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
    Divider,
    DropdownMenu,
    DropdownItem,
    Button,
} from "vant";
import "vant/lib/index.css";

import "@/assets/css/index.styl";

if (process.env.NODE_ENV !== "production") {
    let VConsole = require('vconsole')
    var vConsole = new VConsole();
}
console.log(location.href)

Vue.use(NavBar)
    .use(Toast)
    .use(Icon)
    .use(Popup)
    .use(Picker)
    .use(Image)
    .use(Button)
    .use(Divider)
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
