import { Snake } from "./snake";

/**
 * Gets the primary name of a snake.
 * @param snake The snake to get the name from.
 * @returns The name of the snake, or `null` if none was found.
 */
function getSnakeName(snake: Snake): string | null {
	if ("names" in snake && Array.isArray(snake.names) && typeof snake.names[0] === "string") {
		return snake.names[0];
	} else if ("name" in snake && typeof snake.name === "string") {
		return snake.name;
	} else {
		return null;
	}
}

/**
 * @param snake The snake to get the header from.
 */
export function getSnakeHeader(snake: Snake): string | null {
	const name = getSnakeName(snake);
	if (name && snake.snakeNumber) {
		return name + " — #" + snake.snakeNumber;
	} else if (name) {
		return name;
	} else if (snake.snakeNumber) {
		return "#" + snake.snakeNumber;
	}

	return null;
}
