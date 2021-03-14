/**
 * Creates an element, giving it certain classes.
 * @param {keyof HTMLElementTagNameMap} tagName The tag name of the element to create.
 * @param {...string} classes The classes to add to the created element.
 */
function createClassElement(tagName, ...classes) {
	const element = document.createElement(tagName);
	element.classList.add(...classes);
	return element;
}
module.exports = createClassElement;
