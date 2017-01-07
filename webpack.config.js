const webpack = require('webpack');  
const webpackConfig = {  
     entry: './app/app.js',  
     output: {       
        path: `${__dirname}/dist`,      
        filename: 'bundle.js'   
}};
  
module.exports = webpackConfig;