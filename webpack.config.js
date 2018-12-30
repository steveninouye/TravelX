const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
   entry: './client/src/App.jsx',
   output: {
      path: path.resolve(__dirname, 'client', 'dist'),
      filename: 'bundle.js'
   },
   module: {
      rules: [
         {
            test: [/\.jsx$/, /\.js$/],
            exclude: /(node_modules)/,
            use: {
               loader: 'babel-loader',
               options: {
                  presets: ['@babel/preset-env', '@babel/preset-react']
               }
            }
         },
         {
            test: /\.html$/,
            use: ['html-loader']
         },
         {
            test: /\.(jpeg|jpg|png)$/,
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
         }
      ]
   },
   resolve: {
      extensions: ['.jsx', '.js']
   },
   plugins: [new HtmlWebpackPlugin({ template: 'client/src/index.html' })],
   devtool: 'source-map',
   devServer: {
      contentBase: path.resolve(__dirname, 'client', 'dist'),
      port: 3000,
      compress: true,
      open: true,
      stats: 'errors-only',
      proxy: [{ context: ['/api'], target: 'http://localhost:8080' }]
   }
};
