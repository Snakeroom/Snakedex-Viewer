/* eslint-disable @typescript-eslint/no-var-requires */

const path = require("path");

const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ForkTsCheckerWebpackPlugin = require("fork-ts-checker-webpack-plugin");

module.exports = {
	entry: "./src/index.ts",
	mode: process.env.WEBPACK_MODE || "production",
	module: {
		rules: [{
			include: path.resolve(__dirname, "./src"),
			loader: "ts-loader",
			options: {
				transpileOnly: true,
			},
			test: /\.ts$/,
		}],
	},
	output: {
		filename: "index.[hash].js",
		path: path.resolve(__dirname, "./dist"),
	},
	plugins: [
		new CleanWebpackPlugin(),
		new HtmlWebpackPlugin({
			meta: {
				viewport: "width=device-width, initial-scale=1, viewport-fit=cover",
			},
			title: "Snakedex Viewer",
		}),
		new ForkTsCheckerWebpackPlugin(),
	],
	resolve: {
		extensions: [
			".js",
			".ts",
		],
	},
};
