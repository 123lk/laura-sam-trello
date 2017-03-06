const path = require('path');

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname,'public','js'),
        publicPath: '/'
    },
    devtool: 'eval-source-map',
    module: {
        rules: [
            {
                test: /.jsx?$/,
                include: path.resolve(__dirname, 'src'),
                loader: 'babel-loader',
                options: {
                    presets: ['react','es2015']
                }
            },
            {
                test: /.css$/,
                use: ['style-loader','css-loader']
            },
            {
                test: /\.(jpe?g|png)$/,
                loader: 'url-loader'
            }
        ]
    },
    devServer: {
        contentBase: path.resolve(__dirname,'public'),
        publicPath: '/js/',
        port: 9191
    }
};