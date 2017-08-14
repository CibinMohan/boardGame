import path from 'path';
import webpack from 'webpack';
export default{
devtool: 'eval-source-map',
entry: [
    path.join(__dirname, '/client/index.js'),
    'webpack-hot-middleware/client'
    
] ,
output:{
    filename: "bundle.js",
    path:'/',
    publicPath:'/'
},

plugins:[
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin()
],
module:{
    loaders:[
        {
            test: /\.js$/,
            include: path.join(__dirname,'client'),
            loaders:['react-hot-loader','babel-loader']
        }
    ]
},
resolve:{
    extensions:['*', '.js', '.jsx']
}

}