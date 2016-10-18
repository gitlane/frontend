let webpack = require('webpack');
let ExtractTextPlugin = require('extract-text-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	entry:__dirname + '/src/app.js',
	output:{
		filename:'bundle.js',
		path: __dirname + "/dist",
	},
	devtool:"source-map",
	module:{
		loaders:[
			{
				test:/\.js$/, 
				exclude:/node_modules/, 
				loader:'babel-loader'
			},
			{ 
				test: /\.sass$/,
				loader: ExtractTextPlugin.extract('style',['css','sass']),
				include:/components/
			}
		 ]
	},
	plugins:[
		new ExtractTextPlugin('main.css'),
		new HtmlWebpackPlugin({
			template:'src/index.html',
			inject:'body'
		}),
		new webpack.optimize.DedupePlugin(),
	    new webpack.optimize.OccurenceOrderPlugin(true)
	]
}