/**
 * Creates an element, giving it certain classes.
 * @param tagName The tag name of the element to create.
 * @param classes The classes to add to the created element.
 */
export function createClassElement(tagName: keyof HTMLElementTagNameMap, ...classes: string[]) {
	const element = document.createElement(tagName);
	element.classList.add(...classes);
	return element;
}
