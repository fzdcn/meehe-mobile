import Vue from "vue";
import axios from "axios";
import Router from "@/router";
import NProgress from "nprogress";
import "nprogress/nprogress.css";
import { Toast } from "vant";
Vue.use(Toast);
// 如果不需要转圈配置如下代码，默认是 true
NProgress.configure({ showSpinner: false });

axios.defaults.timeout = 50000; //超时时间
axios.defaults.baseURL = process.env.VUE_APP_URL; //API 接口
//HTTP Request 拦截器
axios.interceptors.request.use(
    function (config) {
        NProgress.start();
        config.data = JSON.stringify(config.data);
        let sessionId = Router.history.current.query.sessionId;
        config.params = {
            "sessionId": sessionId,
            ...config.params,
        };
        config.headers = {
            "content-Type": "application/json;charset=UTF-8",
            "tk": sessionId
        };
        return config;
    },
    function (error) {
        console.error("错误的传参");
        return Promise.reject(error);
    }
);
// HTTP Response 拦截器
axios.interceptors.response.use(
    function (res) {
        NProgress.done();
        if (res.data.code == 0) {
            return res;
        } else {
            let msg = res.data.msg ? res.data.msg : "网络错误，请稍后再试！";
            console.log("%c" + msg, "color:#fff; background: #f00;");
            Toast.fail(msg);
            return Promise.reject(res);
        }
    },
    function (error) {
        console.error("网络异常");
        console.error(error);
        return Promise.reject(error);
    }
);

export default axios;
