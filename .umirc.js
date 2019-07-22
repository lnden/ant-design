// ref: https://umijs.org/config/
const path = require('path');
export default {
    // history: 'hash',
    // base: '/react-umi',
    publicPath: '/react-umi/',
    treeShaking: true,
    plugins: [
        // ref: https://umijs.org/plugin/umi-plugin-react.html
        ['umi-plugin-react', {
            antd: true,
            dva: true,
            dynamicImport: false,
            title: 'ant-design-dva',
            dll: false,

            routes: {
                exclude: [
                    /models\//,
                    /services\//,
                    /model\.(t|j)sx?$/,
                    /service\.(t|j)sx?$/,
                    /components\//,
                ],
            },
        }],
    ],
    'proxy': {
        '/api': {
            'target': 'https://pvp.qq.com/web201605/js/',
            'changeOrigin': true,
            'pathRewrite': { '^/api': '' },
        },
    },
    alias: {
        utils: path.resolve(__dirname, 'src/utils'),
        services: path.resolve(__dirname, 'src/services'),
        models: path.resolve(__dirname, 'src/models'),
    },
};
