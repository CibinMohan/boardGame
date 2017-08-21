import express from 'express';
import path from'path';
import webpack from 'webpack';
import bodyParser from 'body-parser';
import users from './routes/users';
import auth from './routes/auth';
import webpackHotMiddleware from 'webpack-hot-middleware';
import webpackMiddleware from 'webpack-dev-middleware';
import webpackConfig from '../webpack.config.dev';
let app = express();

app.use(bodyParser.json());
//app.use('/api/users', users);

app.use('/api/users', users);
app.use('/api/auth', auth);
const compile = webpack(webpackConfig);
app.use(webpackMiddleware(compile,{
    hot: true,
    publicPath: webpackConfig.output.publicPath,
    noInfo: true
}));
app.use(webpackHotMiddleware(compile));

app.get('/*',(req,res)=>{
res.sendFile(path.join(__dirname,'./index.html'));
});

app.listen(3000, () => console.log('listen on ser 3000'));


