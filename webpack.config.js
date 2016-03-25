module.exports = {
    entry: "./js/homepage.js",
    output: {
        path: __dirname,
        filename: "bundle.js"
    },
    module: {
        loaders: [
            {test: /\.css$/, loader: "style!css"},
            {test: /\.scss$/, loader: "style!css!sass"},
            {test: /\.(jpg|png)$/, loader: "url?limit=8192&name=../images/[name].[ext]"}
        ]
    }
};