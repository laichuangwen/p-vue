# 学习搭建vue项目

## lerna 管理多项目

### 开始

Lerna官网在这里 https://lernajs.io/，
仓库在这里https://github.com/lerna/lerna，可先查看官方详细的文档说明。

##### 模式  
- independent  固定模式，注意并不是一个版本改了只针对哪个版本更改，而是一个个可自定义罢了，发布还不能用原来的...这...。
- default  默认模式，就是发布后全部版本号统一更改。

##### 常用指令
- lerna init: 初始化项目
- lerna bootstrap: 自动构建项目
- lerna ls: 列出当前项目所有包
- lerna clean: 清理node_modules文件夹
- lerna add: 添加依赖（类似npm install)
- lerna publish: 发版git
  
## consola  控制器日志输出工具
github  https://github.com/nuxt/consola

#### types 

| 类型    | 级别     |
| ------- | -------- |
| fatal   | 0        |
| error   | 0        |
| warn    | 1        |
| log     | 2        |
| info    | 3        |
| success | 3        |
| debug   | 4        |
| trace   | 5        |
| silent  | Infinity |
| ready   | 3        |
| start   | 3        |


## ora 控制台加载
github  https://github.com/sindresorhus/ora

## Inquirer 命令行用户界面 
github  https://github.com/SBoudrias/Inquirer.js

## chalk  更改终端输出的字体颜色
https://github.com/chalk/chalk

