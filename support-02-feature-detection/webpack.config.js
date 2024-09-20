const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin'); // Updated

module.exports = {
  mode: 'development',
  entry: './src/app.js',
  output: {
    filename: 'app.js',
    path: path.resolve(__dirname, 'assets', 'scripts'),
    publicPath: 'assets/scripts/'
  },
  devtool: 'eval-source-map', // Updated for Webpack 5
  // devServer: {
  //   static: './'  // For webpack-dev-server (if used)
  // },
  module: {
    rules: [
      {
        test: /\.(js|mjs|cjs)$/,  // Shortened test regex
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              ['@babel/preset-env', {useBuiltIns: 'usage', corejs: {version: 3}}]
            ]
          }
        }
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin() // Updated
  ]
};


// const path = require('path');
// const CleanPlugin = require('clean-webpack-plugin');

// module.exports = {
//   mode: 'development',
//   entry: './src/app.js',
//   output: {
//     filename: 'app.js',
//     path: path.resolve(__dirname, 'assets', 'scripts'),
//     publicPath: 'assets/scripts/'
//   },
//   devtool: 'cheap-module-eval-source-map',
//   // devServer: {
//   //   contentBase: './'
//   // }
//   module: {
//     rules: [
//       {
//         test: /\.(?:js|mjs|cjs)$/,
//         exclude: /node_modules/,
//         use: {
//           loader: 'babel-loader',
//           options: {
//             presets: [
//               ['@babel/preset-env']
//             ]
//           }
//         }
//       }
//     ]
//   },
//   plugins: [
//     new CleanPlugin.CleanWebpackPlugin()
//   ]
// };