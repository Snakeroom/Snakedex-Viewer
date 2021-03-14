/**
 * Gets the image URL for a snake.
 * @param {Object} snake The snake to get the image URL from.
 */
function getSnakeImage(snake) {
	if (typeof snake.images === "object" && snake.images !== null) {
		return snake.images.full || snake.images["128x"];
	} else if (typeof snake.image === "string") {
		return snake.image;
	}
}
module.exports = getSnakeImage;
