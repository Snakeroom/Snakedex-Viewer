const base = "https://snakeroom.github.io/Snakedex/";

/**
 * Resolves an absolute URL to the generated Snakedex from a relative path.
 * @param path The relative path to resolve.
 */
export function snakedexUrl(path: string | null): string {
	if (path === null) {
		return "";
	} else if (typeof path !== "string") {
		throw new TypeError("Path should be a string");
	} if (path.startsWith("/")) {
		throw new TypeError("Path should not start with forward slash");
	}

	return base + path;
}
