var path = require("path");
var webpack = require("webpack");
var HtmlWebpackPlugin = require('html-webpack-plugin');
var CleanWebpackPlugin = require("clean-webpack-plugin");
module.exports = {
    mode: 'development',
    entry: "./src/index.tsx",
    output: {
        filename: "[name].bundle.js",
        chunkFilename: "[name].[chunkhash].chunk.js",
        path: path.resolve(__dirname, "dist"), //必须是绝对路径
        publicPath: "/"
    },
    resolve: {
        extensions: ['.ts', '.js', '.json', '.tsx'],
        alias: {
            "@": path.resolve(__dirname, "src/components/")
        }
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ['@babel/env', "@babel/typescript", "@babel/react"],
                        plugins: ["syntax-dynamic-import",
                            [
                                "@babel/plugin-proposal-decorators",
                                {
                                    "legacy": true
                                }
                            ],
                            [
                                "@babel/plugin-proposal-class-properties",
                                {
                                    "loose": true
                                }
                            ]]
                    }
                }
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: 'index.html',
            inject: 'body',
            title: 'React'
        })
    ]
}