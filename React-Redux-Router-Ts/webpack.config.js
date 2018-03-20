var webpack = require("webpack");
module.exports = {
    entry: "./src/Index.tsx",
    output: {
        path: __dirname + "/dist",
        filename: "bundle.js"
    },
    resolve: {
        extensions: [".tsx", ".ts", ".js", ".json"]
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader'
            }

        ]
    },
    devServer: {
        port: 3000
    },
    plugins: [
        new webpack.DefinePlugin({
            "process.env.NODE_ENV": JSON.stringify("development")
        }),
    ],
    externals: {
        "react": "React",
        "react-dom": "ReactDOM",
        "react-router":"ReactRouter",
        "jquery": "jQuery",
        "jquery": "$",
        "lodash": "_"
    }
}