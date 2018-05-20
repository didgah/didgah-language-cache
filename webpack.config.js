const path = require("path");
module.exports = {
    entry: {
        'didgah-language': './src/language'
    },
    output: {
        path: path.join(__dirname, 'build'),
        filename: '[name].js'
    },
    devtool: "source-map",
    module: {
        rules: [
            { test: /\.tsx?$/, loader: 'ts-loader' }
        ],
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js', '.json']
    },
    externals: {
        "didgah/global": "window",
    }
};