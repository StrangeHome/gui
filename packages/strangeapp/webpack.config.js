const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = (mode) => {
    return {
        mode: mode || 'production',
        target: 'browserlist',
        entry: path.resolve(__dirname, './src/index.html'),
        output: {
            path: path.resolve(__dirname, './dist'),
            globalObject: 'this',
            filename: 'index_bundle.js'
        },
        plugins: [
            new HtmlWebpackPlugin({
                template: path.resolve(__dirname, './src/index.html')
            }),
            // new CopyWebpackPlugin({
            //     patterns: [
            //         {
            //             context: path.resolve(__dirname, './node_modules/@webcomponents'),
            //             from: '*',
            //             to: '@webcomponents'
            //         }
            //     ]
            // })
        ],
        module: {
            rules: [
                {
                    test: /\.html$/,
                    use: [
                        {
                            loader: 'html-loader',
                            options: {
                                minimize: false
                            }
                        }
                    ]
                },
                {
                    test: /\.js$/,
                    loader: "babel-loader",
                    exclude: /node_modules\/(?!(@webcomponents\/shadycss|lit-html|@polymer|@vaadin)\/).*/,
                    options: {
                    cacheDirectory: true
                    }
                }
            ]
        },
        resolve: {
            modules: [
                'node_modules'
            ]
        },
        devServer: {
            contentBase: path.join(__dirname, 'dist'),
            compress: false,
            port: 9000
        }
    };
}