/**
 * Created by Tome on 2020/09/11.
 */
import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);
const Home = () => import("@/views/index/home");
const communicationConsumptionCard = () =>
	import("@/views/communicationConsumptionCard/index");
const orderManage = () => import("@/views/orderManage/index");
const goodsManage = () => import("@/views/goodsManage/index");
const issueConsumerCard = () => import("@/views/issueConsumerCard/index");
const Login = () => import("@/views/login/login");

const routes = [
	{ path: "/", redirect: { name: "home" } },
	{ path: "/login", name: "login", component: Login, meta: { auth: false } },
	{
		path: "/home",
		name: "home",
		component: Home,
		meta: { auth: false, keepAlive: false },
	},
	{
		path: "/communication-consumption-card",
		name: "communication-consumption-card",
		component: communicationConsumptionCard,
		meta: { auth: false, keepAlive: false },
	},
	{
		path: "/order-manage",
		name: "order-manage",
		component: orderManage,
		meta: { auth: false, keepAlive: false },
	},
	{
		path: "/goods-manage",
		name: "goods-manage",
		component: goodsManage,
		meta: { auth: false, keepAlive: false },
	},
	{
		path: "/issue-consumer-card",
		name: "issue-consumer-card",
		component: issueConsumerCard,
		meta: { auth: false, keepAlive: false },
	},
];

let router = new Router({
	mode: "hash",
	routes,
	scrollBehavior(to, from, savedPosition) {
		if (savedPosition) {
			return savedPosition;
		} else {
			return { x: 0, y: 0 };
		}
	},
});

// 用户是否登录过滤
router.beforeEach(({ meta, name, fullPath }, from, next) => {
	let { auth = true } = meta;
	if (auth) {
		let isLogin = Boolean(store.getters.user);
		if (!isLogin && name !== "login") {
			return next({ name: "login" });
		}
	}
	next();
});

router.afterEach(() => {});

export default router;
