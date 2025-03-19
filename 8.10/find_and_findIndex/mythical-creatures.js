const mythicalCreatures = [
	{name: "Dragon", type: "Fire", lastSeen: "Volcano Valley"},
	{name: "Mermaid", type: "Water", lastSeen: "Coral Caves"},
	{name: "Unicorn", type: "Land", lastSeen: "Enchanted Forest"},
	{name: "Griffin", type: "Air", lastSeen: "Highwind Mountains"},
	{name: "Kraken", type: "Water", lastSeen: "Abyssal Depths"}
];

const waterCreature = mythicalCreatures.find(mythicalCreature => 
	mythicalCreature.type == "Water")

console.log(waterCreature)

const griffinIndex = mythicalCreatures.findIndex(mythicalCreature => 
	mythicalCreature.name == "Griffin")

console.log(waterCreature)
console.log(griffinIndex)


const creatureForest = mythicalCreatures.find(mythicalCreature => 
	mythicalCreature.lastSeen == "Enchanted Forest")

	console.log(creatureForest)
