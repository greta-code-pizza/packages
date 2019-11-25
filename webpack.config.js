const path = require("path");

const config = {
    mode: "development",
    entry: "./index.js",
    output: {
        path: path.resolve(__dirname, "./dist"),
        filename: "./bundle.js"
    }
};

module.exports = config;