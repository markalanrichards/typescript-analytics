var HtmlWebpackPlugin = require('html-webpack-plugin')
const entries = {
    index: "./src/page/index.tsx"
}
module.exports = {
    devServer: {
        host: "0.0.0.0"
    },
    entry: entries,
    output: {
        filename: "[name].bundle.js",
        path: __dirname + "/target"
    },

    // Enable sourcemaps for debugging webpack's output.
    devtool: "source-map",

    resolve: {
        // Add '.ts' and '.tsx' as resolvable extensions.
        extensions: [".ts", ".tsx", ".js", ".json", ".html"]
    },

    module: {
        rules: [
            // All files with a '.ts' or '.tsx' extension will be handled by 'awesome-typescript-loader'.
            {test: /\.tsx?$/, loader: "awesome-typescript-loader"},

            // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
            {enforce: "pre", test: /\.js$/, loader: "source-map-loader"}
        ]
    },

    devtool: 'inline-source-map',
    plugins: Object.entries(entries).map(arr => new HtmlWebpackPlugin({
        chunks: [arr[0]],
        filename: `${arr[0]}.html`,
        template: `src/page/${arr[0]}.html`
    }))

    // When importing a module whose path matches one of the following, just
    // assume a corresponding global variable exists and use that instead.
    // This is important because it allows us to avoid bundling all of our
    // dependencies, which allows browsers to cache those libraries between builds.
    // externals: {
    //     "react": "React",
    //     "react-dom": "ReactDOM"
    // },
};
