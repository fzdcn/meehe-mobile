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
	{ path: "/", redirect: { name: "influence-space" } },
	{ path: "/login", name: "login", component: Login, meta: { auth: false } },
	{
		path: "/influence-space",
		name: "influence-space",
		component: influenceSpace,
		meta: { auth: false },
	},
	{
		path: "/communication-consumption-card",
		name: "communication-consumption-card",
		component: communicationConsumptionCard,
		meta: { auth: false },
	},
	{
		path: "/order-manage",
		name: "order-manage",
		component: orderManage,
		meta: { auth: false },
	},
	{
		path: "/goods-manage",
		name: "goods-manage",
		component: goodsManage,
		meta: { auth: false },
	},
	{
		path: "/issue-consumer-card",
		name: "issue-consumer-card",
		component: issueConsumerCard,
		meta: { auth: false },
	},
	{
		path: "/sales-volume",
		name: "sales-volume",
		component: salesVolume,
		meta: { auth: false },
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
