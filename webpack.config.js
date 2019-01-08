const webpack = require("webpack");

module.exports = {
  entry: `./client/src/Components/pet_info.jsx`,
  output: {
    filename: "bundle.js",
    path: __dirname + "/client/dist",
    publicPath: "/"
  },
  devServer: {
    contentBase: "./dist"
  },
  module: {
    rules: [
      {
        test: /\.jsx?/,
        exclude: "/node_modules/",
        use: ["babel-loader"]
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      }
    ]
  },
  resolve: {
    extensions: [".jsx", ".ts", ".js"]
  }
};
