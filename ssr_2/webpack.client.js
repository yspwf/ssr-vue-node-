const path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin');

const VueSSRClientPlugin = require('vue-server-renderer/client-plugin');

module.exports = {
    entry:{
        main:'./entry-client.js'
    },
    output:{
        path:path.resolve(__dirname, './dist'),
        filename:'build.js'
    },
    module:{
        rules:[
            {
                test:/\.js$/,
                use:{
                    loader:'babel-loader',
                    options:{
                        presets:[
                            ['@babel/preset-env',{
                                targets:{
                                    browsers:['> 1%', 'last 2 versions']
                                }
                            }]
                        ]
                    }
                }
            },
            {
                test:/\.vue$/,
                use:['vue-loader']
            }
        ]
    },
    resolve:{
        alias:{
            'vue$':'vue/dist/vue.esm.js'
        }
    },
    plugins:[
        new VueLoaderPlugin(),
        new VueSSRClientPlugin()
    ],
    // devServer:{
    //     port:5000,
    //     historyApiFallback: true
    // }
}
