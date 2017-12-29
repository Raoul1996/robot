# egg-react-robot

> 悲从心头起，锅从天上来。体验一波 SSR

脚手架文档[在这里](OLDREADME.md)

## 技术栈
- Egg 版本： ^2.x.x
- Node 版本: Node ^8.x.x+,  Node 6.x.x 版本请见 [Egg 1.0 + Node6分支](https://github.com/hubcarl/egg-react-webpack-boilerplate/tree/node6)
- Webpack 版本: ^3.5.5, 对应 `easywebpack-react` 版本为 3.0.0,  Webpack2 版本项目骨架请见 `feature/webpack2` 分支, 对应 `easywebpack-react` 版本为 1.0.0
- React 版本: ^15.0.0, ^16.0.0,

## 开发日记

#### 20171230 配置 travis-ci
- egg 在编译的时候需要 `.eslintrc` 配置文件，所以部署到服务器的时候需要将项目中的隐藏文件一起打包,解决方法见 [`.travis.yml`](.travis.yml) 中这个部分：
    ```
    # 压缩，为上传准备
    # 因为 egg 进行编译的时候会需要 ESLint 的配置文件，所以隐藏文件需要打包
    - tar -jcf robot.tar.bz2 * .*
    ```
