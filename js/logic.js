console.log("logic js for functions and such");

const firstName = "Leigh";
const LastName = "Rogers";

function fullName() {
    const myName = `${firstName} ${LastName}`;
    console.log("My name is", myName);
}
fullName();

const crayonColors = ["Cadet Blue", "Marigold", "Indian Red"];
const fullBox = 4;

function addColor(newColor) {
    crayonColors.push(newColor);
    return crayonColors.length;
} 
let crayonBoxNumber = addColor("Mulberry");
if (crayonBoxNumber < fullBox) {
    console.log("pick more colors");
} else {
    console.log("your box is full");
}

console.log("crayonColorLength", crayonColors.length);


//create an array using objects with Little Debbie cakes.
let littleDebbie = [
    roll = {
        holiday: "Christmas",
        color: "Red",
        month: "December",
    }, 
    circle = {
        holiday: "Halloween",
        color: "Orange",
        month: "October",
    },
    brick = {
        holiday: "Valentine's Day",
        color: "Pink",
        month: "February",
    }
]

littleDebbie = [roll, circle, brick];
console.log("littleDebbie", littleDebbie);

//Apple Delights: Arrow replaces "function"

const sweetArray = [
    {
        name: "Apple Delights",
        event: "Back to School",
        count: 8
    },
    {
        name: "Pumpkin Delights",
        event: "Halloween",
        count: 8
    },
    {
        name: "Happy Camper",
        event: "Summer",
        count: 8
    }
]

//what matters is the .name/.event/.count - the argument/parameter doesn't matter.
//It's just what you pass in, or a reference.
const createSweetComponent = (item) => {
    return `
        <div>
            <h2>${item.name}</h2>
            <p>${item.event}</p>
            <p>${item.count}</p>
        </div>
    `
}

//console.log(createSweetComponent());

const sweetContainer = document.querySelector("#container");

for (let i = 0; i < sweetArray.length; i++) {
    console.log("loop of the array", i, sweetArray[i]);
    sweetContainer.innerHTML += createSweetComponent(sweetArray[i]);
}

//forEach knows how to go through each item in the array. Use this for array objects.
//in a forEach, the second argument is always going to be the index.
//syntax: array.forEach(function(currentValue, index, array), this value)
sweetArray.forEach(sweetItem => {
    sweetContainer.innerHTML += createSweetComponent(sweetItem);
});

//debugger - can go anywhere on a page. 
//Whatever line you put it on, it will stop running the code.


