module.exports = {
  //开发环境配置
  devServer: {
    //默认端口
    port: 8081
  },

  //生产环境配置：
  publicPath: "./",
  //编译后不生成map映射文件
  productionSourceMap: false
};
