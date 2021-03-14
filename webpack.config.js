const path = require("path");

const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
	entry: "./src/index.js",
	mode: process.env.WEBPACK_MODE || "production",
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
	],
};
