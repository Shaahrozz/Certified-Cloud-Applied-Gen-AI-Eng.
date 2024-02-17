//They think of something you could store in a TypeScript Object. Write a program that creates Objects containing these items.


// Define a type for landmark
type Landmark = {
    name: string;
    location: string;
    description: string;
};

// Create objects for famous landmark
let eiffelTower: Landmark = {
    name: "Eiffel Tower",
    location: "Paris, France",
    description: "A wrought-iron lattice tower"
};

console.log("1. Name:", eiffelTower.name);
console.log("   Location:", eiffelTower.location);
console.log("   Description:", eiffelTower.description);