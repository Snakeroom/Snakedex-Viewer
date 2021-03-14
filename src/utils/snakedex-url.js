const base = "https://snakeroom.github.io/Snakedex/";

/**
 * Resolves an absolute URL to the generated Snakedex from a relative path.
 * @param {string} path The relative path to resolve.
 */
function snakedexUrl(path) {
	if (typeof path !== "string") {
		throw new TypeError("Path should be a string");
	} if (path.startsWith("/")) {
		throw new TypeError("Path should not start with forward slash");
	}

	return base + path;
}
module.exports = snakedexUrl;
