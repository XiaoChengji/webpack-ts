const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin }  = require('clean-webpack-plugin')

const plugins = [
    new CleanWebpackPlugin({
        cleanOnceBeforeBuildPatterns: ['./dist']
    }),
    new HtmlWebpackPlugin({
        template: './src/template/index.html'
    })
]

module.exports = {
    mode: process.env.NODE_ENV || 'production',
    entry: './src/main.ts',
    output: {
        path: path.resolve(process.cwd(), 'dist'),
        filename: 'main.js',
        publicPath: '/'
    },
    resolve: {
        extensions: ['.ts','tsx','.js'],
        alias: {
            '@': path.resolve(process.cwd(), 'src')
        }
    },
    module:{
        rules:[
            {
                test: /\.tsx?$/,
                use: [
                    {
                        loader: 'ts-loader',
                        options: { configFile: path.resolve(process.cwd(), 'tsconfig.json') } 
                    }
                ],
                exclude: /node_modules/
            }
        ]
    },
    devtool: process.env.NODE_ENV === 'production' ? false : 'inline-source-map',
    devServer: {
        contentBase:'./dist',
        open: true,
        overlay: {
            warnings: true,
            errors: true
        },
        host: 'localhost',
        port: 5000
    },
    plugins
}