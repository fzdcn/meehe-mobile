const path = require("path");
const Timestamp = new Date().getTime();
module.exports = {
	// 公共路径(必须有的)
	publicPath: "./",
	// 输出文件目录
	outputDir: "dist",
	// 静态资源存放的文件夹(相对于ouputDir)
	assetsDir: "assets",
	// eslint-loader 是否在保存的时候检查(果断不用，这玩意儿我都没装)
	lintOnSave: false,
	// 我用的only，打包后小些
	runtimeCompiler: false,
	productionSourceMap: true, // 不需要生产环境的设置false可以减小dist文件大小，加速构建
	configureWebpack: {
		// webpack 配置
		output: {
			// 输出重构  打包编译后的 文件名称  【模块名称.版本号.时间戳】
			filename: `[name].${Timestamp}.js`,
			chunkFilename: `[name].${Timestamp}.js`,
		},
	},
	//scss
	pluginOptions: {},
	// webpack-dev-server 相关配置
	devServer: {
		open: true, // npm run serve后自动打开页面
		host: "0.0.0.0", // 匹配本机IP地址(默认是0.0.0.0)
		port: 9999, // 开发服务器运行端口号
		proxy: null,
		// 注：目前本项目暂时没有写后台接口，没有跨域问题，暂时不配置proxy
	},
};
