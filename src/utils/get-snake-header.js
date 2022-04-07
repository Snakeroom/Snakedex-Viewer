/**
 * Gets the primary name of a snake.
 * @param {Object} snake The snake to get the name from.
 * @returns {string | null} The name of the snake, or `null` if none was found.
 */
function getSnakeName(snake) {
	if (Array.isArray(snake.names) && typeof snake.names[0] === "string") {
		return snake.names[0];
	} else if (typeof snake.name === "string") {
		return snake.name;
	} else {
		return null;
	}
}

/**
 * @param {Object} snake The snake to get the header from.
 */
function getSnakeHeader(snake) {
	const name = getSnakeName(snake);
	if (name && snake.snakeNumber) {
		return name + " — #" + snake.snakeNumber;
	} else if (name) {
		return name;
	} else if (snake.number) {
		return "#" + snake.snakeNumber;
	}
}
module.exports = getSnakeHeader;
