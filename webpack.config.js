var path = require('path');

module.exports = {
   entry: "./app/appp.jsx",
   output:{
       path: path.resolve(__dirname, './public'),
       publicPath: '/public/',
       filename: "bundle.js"
       //path: path.resolve(__dirname, 'dist')
   },
   devServer: {
     historyApiFallback: true,
   },
   module:{
       rules:[
           {
               test: /\.jsx$/,
               exclude: /(node_modules)/,
               loader: "babel-loader",
               options:{
                   presets:["env", "react"]    
               }
           },
           {
             test: /\.css$/,
             use: [
               'style-loader',
               'css-loader'
             ]
           },
           {
            test: /\.(png|svg|jpg|jpeg|gif)$/,
            use: [
           'file-loader'
         ]
       }
       ]
   }
}
