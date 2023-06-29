const path = require("path");

module.exports = {
    mode:'development',
    devtool: 'source-map',
  entry: {
    app: ["babel-polyfill", "./src/assets/js/app.js"],
  },
  output: {
    path: path.resolve(__dirname, "src"),
    filename: "[name].js",
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },
    ],
  },
};
