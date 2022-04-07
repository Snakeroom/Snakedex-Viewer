import { Snake } from "./snake";

/**
 * Gets the image URL for a snake.
 * @param snake The snake to get the image URL from.
 */
export function getSnakeImage(snake: Snake): string | null {
	if ("images" in snake && typeof snake.images === "object" && snake.images !== null) {
		return snake.images.full || snake.images["128x"] || null;
	} else if ("image" in snake && typeof snake.image === "string") {
		return snake.image;
	}

	return null;
}
