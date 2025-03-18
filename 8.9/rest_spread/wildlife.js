/* Task 1: Track Animal Sightings */
// TODO: Write a function with rest parameters to print sightings of different animals within the sanctuary. This function should accept an arbitrary number of animal names.

const sightings = (...animals) => console.log(animals)
sightings('dogs','cats','lions')


/* Task 2: Merge Habitat Areas */
const forestHabitats = ["Forest A", "Forest B"];
const savannahHabitats = ["Savannah C", "Savannah D"];
// TODO: You are given two arrays of habitat names. Use the spread operator to combine them into a comprehensive list of protected areas within the sanctuary.
const merged_habitats = [ ...forestHabitats , ...savannahHabitats]
console.log(merged_habitats)

/* Task 3: Update Conservation Status */
const rhinoStatus = {
	population: 500,
	status: "Endangered"
};
// TODO: You are given an object representing an animal's conservation status. Use the spread operator to update this status with new information, such as an increase in population or a change in habitat.

const updatedStatus = { ...rhinoStatus, status : "Normal"}
console.log(updatedStatus)

/* Task 4: Catalog Genetic Diversity */
const lionProfile = {
	name: "Leo",
	age: 5,
	species: "Lion"
};

const lionProfileCopy = {...lionProfile};
lionProfile.genetics = {
	genetics: "Genetic"
}

console.log(lionProfile)
console.log(lionProfileCopy)
// TODO: Duplicate an animal profile object using a shallow copy. Add genetic diversity information using the `genetics` property to this copy. Observe and explain how changes to nested properties affect both the original and the copied object.
/*
 * Observations:
 * TODO: Explain here.
 * Modifying the copied version using spread operator does not affect the original copy as it was a one level deep copy
 */



/* Task 5: Analyze Ecosystem Health */
const ecosystemHealth = {
	waterQuality: "Good",
	foodSupply: {
		herbivores: "Abundant",
		carnivores: "Sufficient"
	}
};

let ecosystemHealthCopy = {...ecosystemHealth}
ecosystemHealthCopy.foodSupply.herbivores = "In Demand"

console.log(ecosystemHealth)
console.log(ecosystemHealthCopy)
// TODO: You are given an object with a nested structure detailing the ecosystem's health, including water quality and food supply. Perform a shallow copy and modify a nested property. Observe and explain how changes to nested properties affect both the original and the copied object.
/*
 * Observations:
 * TODO: Explain here.
 * Since spread operator is a one level deep copy, modifying the nested object will affect the original copy since it was passed
 * by reference.
 */
