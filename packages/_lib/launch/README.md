### 启动器
功能： 各个项目的vue启动器，为了解决统一vue 中的各个版本，和团队的统一代码的管理。

#### yargs  
功能： 从脚本中传递一些参数

#### friendly-errors-webpack-plugin
功能：识别某些类型的webpack错误并清理，聚合并确定它们的优先级，以提供更好的开发人员体验

####  css-loader  
css 样式加载

#### style-loader 

https://github.com/webpack-contrib/style-loader

#### file-loader
https://github.com/webpack-contrib/file-loader

#### url-loader
用于将文件转换为base64 URI 形式
url-loader与file-loader类似,但如果文件小于设置的字节限制可以返回一个DataURL。
url-loader 是要依赖file-loader的

https://github.com/webpack-contrib/url-loader

#### html-webpack-plugin 
创建 html 文件
https://github.com/jantimon/html-webpack-plugin

#### clean-webpack-plugin 
前清理 /dist 文件夹
默认会删除值删除输出的  webpack's output.path directory
https://github.com/johnagan/clean-webpack-plugin

#### progress-bar-webpack-plugin 
一个webpack 进度条
https://github.com/clessg/progress-bar-webpack-plugin

####  webpack-dev-middleware  express
是一个容器(wrapper)，它可以把 webpack 处理后的文件传递给一个服务器
webpack-dev-server 在内部使用了它

#### uglifyjs-webpack-plugin 代码压缩

https://www.webpackjs.com/plugins/uglifyjs-webpack-plugin/#-boolean-
https://github.com/webpack-contrib/uglifyjs-webpack-plugin
