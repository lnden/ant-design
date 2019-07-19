# ant-design-dva
this is dva umi cli init project

init project is use umi + dva [Umi入门](https://www.yuque.com/umijs/umi)

### npm run build

setting .umirc.js 文件
```angular2html
    base: '/react-umi'
    publicPath: '/react-umi/'
```


### request 404

由于`npm run build`之后d proxy 和 mock 都无效了，如果要挂在github以及静态服务器上面要添加一些假数据，下面每个页面下models里面的json文件就是模拟的假数据
