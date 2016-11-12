"use strict";

let addMessage = (element, message) => {
	let messageElement = document.createElement("li");
	messageElement.textContent = message;
	element.appendChild(messageElement);
};

let first = document.getElementById("first");
addMessage(first, "Page loading...");

document.body.addEventListener("mousemove", () => {
	let second = document.getElementById("second");
	addMessage(second,  "Event: mousemove");
});

document.body.addEventListener("click", () => {
	let second = document.getElementById("second");
	addMessage(second,  "Event: click");
});

