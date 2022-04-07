require("file-loader?name=[name].[ext]!./index.css");

import { createClassElement } from "./utils/create-class-element";
import { getSnakeHeader } from "./utils/get-snake-header";
import { getSnakeImage } from "./utils/get-snake-image";
import { snakedexUrl } from "./utils/snakedex-url";

async function fetchAndAdd() {
	const container = document.getElementById("snakes") as HTMLDivElement;
	const snakeInfo = document.getElementById("snakeinfo") as HTMLParagraphElement;

	if (snakeInfo === null) {
		throw new Error("Snake info element not loaded yet");
	}

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
		image.alt = snake.snakeNumber ? "Snake #" + snake.snakeNumber : "Snake";
		imageWrapper.append(image);

		const content = createClassElement("div", "content");
		element.append(content);

		if (snake.name || snake.snakeNumber) {
			const header = document.createElement("h2");
			if (header !== null) {
				header.textContent = getSnakeHeader(snake);
				content.append(header);
			}
		}

		if (snake.description) {
			const description = document.createElement("p");
			description.textContent = snake.description;
			content.append(description);
		}

		container.append(element);
	}
}

/* eslint-disable-next-line unicorn/prefer-top-level-await */
fetchAndAdd();
