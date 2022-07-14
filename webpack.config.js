const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const path = require('path');
// const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = {
  entry: path.resolve(__dirname, "src/index.js"),
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'main.js',
    publicPath: '/'

  },
  mode: 'development',
  devServer: {
    historyApiFallback: true,
    static: path.resolve(__dirname, "./build"),
    compress: true,
    port: 8080,
    open: true,
    hot: true,
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        use: "babel-loader",
        exclude: "/node_modules/"
      },
      {
        test: /\.(s*)css$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: {
                mode: "local",
                localIdentName: "[local]__[hash:base64:5]",
                localIdentHashSalt: "my-custom-hash",
                auto: /\.module\.\w+$/i,
              },
            }
          },
          // { loader: 'sass-loader' }
        ]
      },
      // {
      //   test: /\.(scss|css)$/,
      //   use: ['style-loader', 'css-loader', 'postcss-loader', 'sass-loader'],
      // },
      {
        test: /\.(png|jpg|gif|woff(2)?|eot|ttf|otf)$/,
        type: "asset/resource"
      },
      {
        // Работа с svg
        test: /\.svg$/,
        use: ["@svgr/webpack", "url-loader"],
      },
      {
        test: /\.ts$/,
        use: 'ts-loader'
      },
    ],
  },
  resolve: {
    extensions: [".js", ".jsx", ".json"]
  },
  plugins: [
    new webpack.ProgressPlugin(),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "public/index.html"),
      // favicon: "src/assets/favicon.svg"
    }),
    // new CleanWebpackPlugin(),
  ],
  infrastructureLogging: {
    level: "warn"
  }
}