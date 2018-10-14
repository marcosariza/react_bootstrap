var webpack = require("webpack");
var path = require("path");
var MiniCssExtractPlugin = require("mini-css-extract-plugin");
var HtmlWebpackPlugin = require("html-webpack-plugin");
var CleanWebPackPlugin = require('clean-webpack-plugin');


var DIST_DIR = path.resolve(__dirname, "dist");
var SRC_DIR = path.resolve(__dirname, "src");

var config = {
  mode: "development",
  entry: SRC_DIR + "/app/index.js",
  output: {
    path: DIST_DIR + "/app",
    filename: "bundle.js",
    publicPath: "/app/"
  },
  module: {
    rules: [
      // Regla 1
      {
        test: /\.js?/,
        include: SRC_DIR,
        loader: "babel-loader", // Loader y Use funcionan para lo mismo
        query: {
          presets: ["react", "es2015", "stage-2"]
        }
      },

      // Regla 2
      {
        test: /\.css$/,
        include: SRC_DIR,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {}
          },
          'css-loader'
        ]
      },

      // Regla 3
      {
        test: /\.(jpg|png)$/,
        include: SRC_DIR,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'img/',
              publicPath: 'img/'
            }
          }
        ]
      },


      // Regla 4
      {
        test: /\.scss$/,
        include: SRC_DIR,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {}
          },
          'css-loader',
          'sass-loader'
        ]
      }

      // - FIN -
    ]
  },
  plugins: [
  new MiniCssExtractPlugin({filename: 'style.css'}),
  // new HtmlWebpackPlugin ({ template: 'src/index.html' }),
  // new CleanWebPackPlugin(['dist'])
  ],
};

module.exports = config;
