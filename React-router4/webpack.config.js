let webpack = require('webpack');
module.exports = {
    entry: ["./src/index.tsx", "webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000&reload=true"],
    output: {
        publicPath: "/dist/",
        filename: "bundle.js",
        path: __dirname + "/dist"
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader'
            }
        ]
    },
    resolve: {
        extensions: [".tsx", ".ts", ".js", ".json"]
    },
    plugins: [
        new webpack.optimize.OccurrenceOrderPlugin(),
        new webpack.HotModuleReplacementPlugin()
    ],
    // externals: {
    //     'react': 'React',
    //     'react-dom': 'ReactDOM'
    // }

}