# ant-design-dva
this is dva umi cli init project

init project is use umi + dva [Umi入门](https://www.yuque.com/umijs/umi)

### npm run build

setting .umirc.js 文件
```angular2html
    base: '/react-umi'
    publicPath: '/react-umi/'
```
cata

### request 404

由于`npm run build`之后d proxy 和 mock 都无效了，如果要挂在github以及静态服务器上面要添加一些假数据，下面每个页面下models里面的json文件就是模拟的假数据


### project catalogue

- dist 为 npm run build 打包之后生成的代码，部署服务器

- mock 模式请求添加假数据

- src 存放代码资源

    - components 存放公共组件
    - layouts 布局组件
    - models 为公共的 dva 数据流
    - pages 存放页面位置
        - hero、item、summoner 为初始化可视页面
        - home 为动态路由test页面
        - discover 使用dva实现加减法
        - products dva示例展示
    - services 请求抽离，类似api
    - utils 工具集

- .umirc.js umi配置文件
