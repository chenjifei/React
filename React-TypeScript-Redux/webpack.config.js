var path = require('path');
var devServer = require("webpack-dev-server");
var webpack = require('webpack');
module.exports = {
    entry: "./src/index.tsx",
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "bundle.js"
    },
    resolve: {
        extensions: [".tsx", ".ts", ".js", ".json"]
    },
    devServer: {
        port: 8989,
        progress: true,
        compress: true,
        hot: true,
        open: true
    },
    devtool: 'inline-source-map',
    externals: {
        "react": "React",
        "react-dom": "ReactDOM",
        "jquery": '$'
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: "ts-loader"
            },
            {
                test: /\.less$/,
                use: ['style-loader', 'css-loader', 'less-loader']
            },
            {
                test: /\.(png|jpe?g)/,
                use: 'url-loader'
            }
        ]
    },
    plugins: [new webpack.DefinePlugin({
        'process.env.NODE_ENV':JSON.stringify(process.env.NODE_ENV || 'production')
    })]
}