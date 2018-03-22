var webpack = require("webpack");
module.exports = {
    entry: "./src/Index.tsx",
    output: {
        path: __dirname + "/dist",
        filename: "bundle.js"
    },
    devtool: 'inline-source-map',
    resolve: {
        extensions: [".tsx", ".ts", ".js", ".json"]
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/
            }

        ]
    },
    devServer: {
        port: 3001,
        hot: true,
        historyApiFallback: true
    },
    plugins: [
        new webpack.DefinePlugin({
            "process.env.NODE_ENV": JSON.stringify("development")
        }),
        new webpack.HotModuleReplacementPlugin()
    ],
    externals: {
        "react": "React",
        "react-dom": "ReactDOM",
        "react-router": "ReactRouter",
        "jquery": "jQuery",
        "jquery": "$",
        "lodash": "_"
    }
}