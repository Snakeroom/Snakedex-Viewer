function getSnakeHeader(snake) {
	if (snake.name && snake.snakeNumber) {
		return snake.name + " — #" + snake.snakeNumber;
	} else if (snake.name) {
		return snake.name;
	} else if (snake.number) {
		return "#" + snake.snakeNumber;
	}
}
module.exports = getSnakeHeader;