# egg-react-robot
[![Build Status](https://travis-ci.org/Raoul1996/robot.svg?branch=master)](https://travis-ci.org/Raoul1996/robot)
[![bitHound Overall Score](https://www.bithound.io/github/Raoul1996/robot/badges/score.svg)](https://www.bithound.io/github/Raoul1996/robot)
[![bitHound Dependencies](https://www.bithound.io/github/Raoul1996/robot/badges/dependencies.svg)](https://www.bithound.io/github/Raoul1996/robot/master/dependencies/npm)
[![bitHound Dev Dependencies](https://www.bithound.io/github/Raoul1996/robot/badges/devDependencies.svg)](https://www.bithound.io/github/Raoul1996/robot/master/dependencies/npm)
[![bitHound Code](https://www.bithound.io/github/Raoul1996/robot/badges/code.svg)](https://www.bithound.io/github/Raoul1996/robot)
[![Maintainability](https://api.codeclimate.com/v1/badges/fe3c319a169a79af17ba/maintainability)](https://codeclimate.com/github/Raoul1996/robot/maintainability)

> 悲从心头起，锅从天上来。体验一波 SSR

脚手架文档[在这里](OLDREADME.md)

## 技术栈
- Egg 版本： ^2.x.x
- Node 版本: Node ^8.x.x+,
- Webpack 版本: ^3.5.5, 对应 `easywebpack-react` 版本为 3.0.0
- React 版本: ^15.0.0, ^16.0.0,

## 踩坑日志

#### 20171230 配置 travis-ci、项目初次尝试
- egg 在编译的时候需要 `.eslintrc` 配置文件，所以部署到服务器的时候需要将项目中的隐藏文件一起打包,解决方法见 [.travis.yml](.travis.yml) 中这个部分：
   ```
    # 压缩，为上传准备
    # 因为 egg 进行编译的时候会需要 ESLint 的配置文件，所以隐藏文件需要打包
    - tar -jcf robot.tar.bz2 * .*
    ```
- 在创建新的 router 之后，需要重启服务
- [关闭安全威胁csrf防范？](https://github.com/eggjs/egg/issues/509)，这个设置极其不安全，所以打了 TODO
- 配置数据库是在 config 下面的 plugin 中开启，在 config/config.${env}.js 配置各个环境的数据库连接信息
#### 20180117 Recharts 配置与按需引用，并绘制散点图
- Recharts 中的 dataKey 对应的值需要时数字，使用字符串不能绘制出图像，所以修改数据库records 表中的 varchar -> bigint

## 开发日志
#### 20171230
- 配置 travis-ci
- 熟悉框架
- 设计数据表
- 设计接口
#### 20180117
- 服务端渲染模板配置
- 引入 Recharts
- 按需引用