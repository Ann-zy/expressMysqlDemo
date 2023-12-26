// const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
// import postcssPluginPx2rem from 'postcss-plugin-px2rem';
// import autoprefixer from 'autoprefixer';
const VConsolePlugin = require('vconsole-webpack-plugin');
const autoprefixer = require('autoprefixer');
const postcssPluginPx2rem = require('postcss-plugin-px2rem');

const baseUrl = 'http://localhost:3000/';
let publicPath = '/zzg-yard-restaurant/';
if (process.env.NODE_ENV === "production") {
  if (process.env.CUSTOM_ENV === "dev") {
    publicPath = "/zzg-yard-restaurant/";
  } else if (process.env.CUSTOM_ENV === "test") {
    publicPath = "/zzg-yard-restaurant/";
  } else if (process.env.CUSTOM_ENV === "test2") {
    publicPath = "/t2/zzg-yard-restaurant/";
  } else if (process.env.CUSTOM_ENV === "test3") {
    publicPath = "/t3/zzg-yard-restaurant/";
  } else if (process.env.CUSTOM_ENV === "pre") {
    publicPath = "/zzg-yard-restaurant/";
  } else if (process.env.CUSTOM_ENV === "prd") {
    publicPath = "/zzg-yard-restaurant/";
  }
} else {
  publicPath = "/";
}
module.exports = {
  publicPath,
  devServer: {
    port: "8080", // 代理端口
    open: true, // 项目启动时是否自动打开浏览器
    proxy: {
      '/': { // 代理api
        target: baseUrl, // 服务器api地址
        changeOrigin: true, // 是否跨域
        // pathRewrite: { // 重写路径
        //     "^/admin": ''
        // }
      },
      // '/user': { // 代理api
      //   target: baseUrl, // 服务器api地址
      //   changeOrigin: true, // 是否跨域
      //   // pathRewrite: { // 重写路径
      //   //     "^/admin": ''
      //   // }
      // },
    },
  },
  configureWebpack: (config) => {
    const plugins = [];
    plugins.push(
      new VConsolePlugin({ // 配置非生产环境，调试插件显示
        filter: [],
        enable: process.env.CUSTOM_ENV !== 'prd',
      }),
    );
    config.plugins = [...config.plugins, ...plugins];
  },
  css: {
    // postcss: {
    //   plugins: [
    //     postcssPluginPx2rem({
    //       rootValue: 75, // 换算基数， 默认100  ，这样的话把根标签的字体规定为1rem为50px,这样就可以从设计稿上量出多少个px直接在代码中写多上px了。
    //       // unitPrecision: 5, // 允许REM单位增长到的十进制数字。
    //       // propWhiteList: [], // 默认值是一个空数组，这意味着禁用白名单并启用所有属性。
    //       // propBlackList: [], //黑名单
    //       exclude: /(node_module)/, // 默认false，可以（reg）利用正则表达式排除某些文件夹的方法，例如/(node_module)/ 。如果想把前端UI框架内的px也转换成rem，请把此属性设为默认值
    //       // selectorBlackList: [], //要忽略并保留为px的选择器
    //       // replace: true, // （布尔值）替换包含REM的规则，而不是添加回退。
    //       mediaQuery: false, // （布尔值）允许在媒体查询中转换px。
    //       minPixelValue: 2, // 设置要替换的最小像素值(3px会被转rem)。 默认 0
    //     }),
    //     autoprefixer({
    //       overrideBrowserslist: [
    //         'Android 4.1',
    //         'iOS 7.1',
    //         'Chrome > 31',
    //         'ff > 31',
    //         'ie >= 8',
    //         //'last 2 versions ', // 所有主流浏览器最近2个版本
    //       ],
    //       grid: true,
    //     }),
    //   ],
    // },
  },
  // 新增自定义环境变量
  chainWebpack: (config) => {
    if (process.env.NODE_ENV === 'production') {
      config
        .plugin('define')
        .tap((args) => {
          const newArgs = args;
          newArgs[0]['process.env'].CUSTOM_ENV = `"${process.env.CUSTOM_ENV}"`;
          return newArgs;
        });
    }
  },
};
