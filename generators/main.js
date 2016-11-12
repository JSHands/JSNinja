"use strict";

let printPokemon = (pokemon) => {
	console.log(`*********************************`);
	console.log(`Name: ${pokemon.name}`);
	console.log(`Type: ${pokemon.type}`);
	console.log(`Color: ${pokemon.color}`);
	console.log(`*********************************`);
};

function* PokemonGenerator() {
	
	yield "Pikachu";
	
	console.log("This is a fire Pokemon");
	let firePokemon = [];
	
	firePokemon.push({
		name: "Charmander",
		type: "Fire",
		color: "Orange"
	});
	
	firePokemon.push({
		name: "Ponyta",
		type: "Fire",
		color: "White"
	});
	
	firePokemon.push({
		name: "Ninetales",
		type: "Fire",
		color: "Pearl"
	});
	
	yield firePokemon[Math.floor(Math.random() * firePokemon.length)];
	yield* TrainerGenerator();
	yield firePokemon[Math.floor(Math.random() * firePokemon.length)];
	yield firePokemon[Math.floor(Math.random() * firePokemon.length)];
}

function* TrainerGenerator() {
	
	yield "Ash";
	
	let trainers = [];
	
	trainers.push({
		name: "Brock",
		type: "Rock",
		town: "Rockville"
	});
	
	trainers.push({
		name: "Misty",
		type: "Water",
		town: "Waterville"
	});
	
	trainers.push({
		name: "Gary",
		type: "Awesome",
		town: "Swag City"
	});
	
	yield trainers[Math.floor(Math.random() * trainers.length)];
	yield trainers[Math.floor(Math.random() * trainers.length)];
	yield trainers[Math.floor(Math.random() * trainers.length)];
}


// Generating IDs

function* IDGenerator() {
	let id = 0;
	while (true) {
		yield id++;
	}
}

// Sending Data Back to the Generator

function* NinjaGenerator(action) {
	const imposter = yield ("Hatori " + action);
	
	yield ("Yoshi (" + imposter + ") " + action);
}

const ninjaIterator = NinjaGenerator("skulk");

