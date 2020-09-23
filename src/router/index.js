/**
 * Created by Tome on 2020/09/11.
 */
import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);
const influenceSpace = () => import("@/views/influenceSpace/index");
const communicationConsumptionCard = () =>
    import("@/views/communicationConsumptionCard/index");
const orderManage = () => import("@/views/orderManage/index");
const goodsManage = () => import("@/views/goodsManage/index");
const issueConsumerCard = () => import("@/views/issueConsumerCard/index");
const salesVolume = () => import("@/views/salesVolume/index");
const Login = () => import("@/views/login/login");

const routes = [
    {
        path: "/influence-space",
        name: "influence-space",
        component: influenceSpace,
        meta: { title: "影响力空间" }
    },
    {
        path: "/communication-consumption-card",
        name: "communication-consumption-card",
        component: communicationConsumptionCard,
        meta: { title: "传播消费卡" }
    },
    {
        path: "/order-manage",
        name: "order-manage",
        component: orderManage,
        meta: { title: "订单管理" }
    },
    {
        path: "/goods-manage",
        name: "goods-manage",
        component: goodsManage,
        meta: { title: "商品管理" }
    },
    {
        path: "/issue-consumer-card",
        name: "issue-consumer-card",
        component: issueConsumerCard,
        meta: { title: "发行消费卡" }
    },
    {
        path: "/sales-volume",
        name: "sales-volume",
        component: salesVolume,
        meta: { title: "商品销量排行" }
    },
];

let router = new Router({
    mode: "hash",
    routes
});

router.beforeEach((to, from, next) => {
    if (to.meta.title) {
        document.title = to.meta.title
    } else {
        document.title = "蜜合"
    }
    let ua = navigator.userAgent.toLowerCase();
    if (/iphone|ipad|ipod/.test(ua)) {
        if (window.webkit && window.webkit.messageHandlers && window.webkit.messageHandlers.ChangeTitle) {
            window.webkit.messageHandlers.ChangeTitle.postMessage(to.meta.title ? to.meta.title : "千万红包奖励"); //IOS
        }
    } else {

    }
    next();
});

router.afterEach(() => { });

export default router;
