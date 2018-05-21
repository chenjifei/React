let webpack = require("webpack");
let path = require("path");
let express = require("express");
let webpackDevMiddleWare = require("webpack-dev-middleware");
let webpackHotMiddleWare = require("webpack-hot-middleware");
let webpackConfig = require("./webpack.config.js");
let app = express();
let compiler = webpack(webpackConfig);
app.use(express.static(path.join(__dirname, "/")));
app.use(webpackDevMiddleWare(compiler, {
    publicPath: webpackConfig.output.publicPath
}));
app.use(webpackHotMiddleWare(compiler, {
    heartbeat: 2000
}));

app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "index.html"))
});
app.listen(8375, "localhost", () => {
    console.log('listening as http://localhost:8375')
})