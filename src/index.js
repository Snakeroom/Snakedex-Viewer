require("file-loader?name=[name].[ext]!./index.css");

const container = document.getElementById("snakes");
const snakeInfo = document.getElementById("snakeinfo");

const createClassElement = require("./utils/create-class-element.js");
const getSnakeHeader = require("./utils/get-snake-header.js");
const getSnakeImage = require("./utils/get-snake-image.js");
const snakedexUrl = require("./utils/snakedex-url.js");

/**
 *
 */
async function fetchAndAdd() {
	const response = await fetch(snakedexUrl("listing/all.json"));
	const json = await response.json();

	snakeInfo.textContent = [
		"There",
		json.length === 1 ? "is" : "are",
		"currently",
		json.length,
		"snake" + (json.length === 1 ? "" : "s"),
		"in the Snakedex.",
	].join(" ");

	for (const snake of json.snakes) {
		const element = createClassElement("div", "snake");

		const imageWrapper = createClassElement("div", "imagewrapper");
		element.append(imageWrapper);

		const image = document.createElement("img");
		image.src = snakedexUrl(getSnakeImage(snake));
		imageWrapper.append(image);

		const content = createClassElement("div", "content");
		element.append(content);

		if (snake.name || snake.snakeNumber) {
			const header = document.createElement("h2");
			header.textContent = getSnakeHeader(snake);
			content.append(header);
		}

		if (snake.description) {
			const description = document.createElement("p");
			description.textContent = snake.description;
			content.append(description);
		}

		container.append(element);
	}
}
fetchAndAdd();
