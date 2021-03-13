function createClassElement(tagName, ...classes) {
	const element = document.createElement(tagName);
	element.classList.add(...classes);
	return element;
}
module.exports = createClassElement;