//use this format if you don't know what the values are.
console.log("hamster stuff", hamster["name"]);

//dot notation, preferred way if you know values.
console.log("hamster stuff", hamster.name);

//targeting hamster children and selecting first one.
console.log("hamster children", hamster.children[0]);

//This is a template string. Part is a string, part is a variable to be evaluated.
//Dollar sign and curly brackets mean it's evaluating within the string.
console.log(`The hamster's children are ${hamster.children[0]}, ${hamster.children[1]}, and ${hamster.children[2]}`);

for (let i = 0; i < hamster.children.length; i++) {
    console.log(`Hamster child: ${i + 1} is ${hamster.children[i]}`);
}

//forEach function: First you define the array, then for each "item" (child, etc.) 
//console log with back tics. Evaluate index (value), then give the "item."
hamster.children.forEach((item, index) => {
    console.log(`Hamster child ${index} ${item}`);
});