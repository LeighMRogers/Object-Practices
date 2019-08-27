console.log("Is it working?");

const hamster = {
    fluffy: true, 
    name: "Hammond",
    age: 40,
    legs: 3,
    children: ["Captain Hook", "Peter Pan", "Sally"],
    nickname: "Ham Sir",
    chewing: function chew(what) {
        console.log("chewing", what);
    }
}

const mom = {
    name: "Patti",
    age: 71,
    home: ["Ann Arbor, Michigan", "Rio Verde, Arizona"],
    nice: true
}

const dad = {
    name: "Dave",
    age: 74,
    home: ["Ann Arbor, Michigan", "Rio Verde, Arizona"],
    nice: true
}

const sis = {
    name: "Anne",
    age: 34,
    home: "Atlanta, GA",
    nice: false
}

const spouse = {
    name: "Neil",
    age: 42,
    home: "Nashville, TN",
    nice: true
}

const familyMembers = [mom, dad, sis, spouse];

console.log("familyMembers", familyMembers);

//Lightning Exercise: Given the object below, output each of the values to the console using dot notation.

const wardrobe = {
    height: 80,
    manufacturer: "Killibrew & Sons",
    contents: ["Dress shirt", "Jeans", "Suit", "Skirt", "Tennis shoes"],
    depth: 38,
    width: 50
}

console.log("wardrobe height", wardrobe.height);
console.log("wardrobe manufacturer", wardrobe.manufacturer);
console.log("wardrobe contents", wardrobe.contents);
console.log("wardrobe depth", wardrobe.depth);
console.log("wardrobe height", wardrobe.width);

//Lightning exercises - Dot/Square notation
const empireStateBuilding = {
    stories: 103,
    height: 1453,
    address: "350 Fifth Avenue, Manhattan, New York 10118",
    squareFeet: 2768591,
    constructionDate: 1931,
    cost: 40948900,
    owner: "Empire State Realty Trust",
    eastWestLength: 424,
    northSouthLength: 187,
    architect: "Shreve, Lamb, and Harmon"
}

console.log("stories", empireStateBuilding.stories);
console.log("height", empireStateBuilding.height);
console.log("square feet", empireStateBuilding.squareFeet);
console.log("east west length", empireStateBuilding.eastWestLength);
console.log("north south length", empireStateBuilding.northSouthLength);

console.log(empireStateBuilding["address"], "is the address");
console.log(empireStateBuilding["constructionDate"]);
console.log(empireStateBuilding["owner"]);
console.log(empireStateBuilding["architect"]);
console.log(empireStateBuilding["cost"]);


//Lightning Exercise 1: Output the names of the part-time instructors followed by the names of the full-time instructors in the console.
const nashvilleSoftwareSchool = {
    founded: 2012,
    director: "John Wark",
    instructors: {
        fullTime: ["Jisie", "Brenda", "Steve", "Joe", "Andy"],
        partTime: ["Zoe", "Nathan"]
    },
    address: "500 Interstate Blvd. S"
}

console.log(`All the part-time instructors are ${nashvilleSoftwareSchool.instructors.partTime}, and the full-time instructors are ${nashvilleSoftwareSchool.instructors.fullTime}`);

//Lightning Exercise 2: Output only Andy and Zoe in the console.
console.log(`The part-time instructor is ${nashvilleSoftwareSchool.instructors.partTime[0]}, and the full-time instructor is ${nashvilleSoftwareSchool.instructors.fullTime[4]}`)

//Practice: Output the following value to the console.
const beatles = {
    albums: ["Abbey Road", "Sgt Peppers Lonely Heart's Club Band", "Revolver", "Magical Mystery Tour", "Something New"],
    history: {
        formed: 1960,
        disbanded: 1970
    },
    members: [
        {
            name: "George Harrison",
            birth: 1943,
            death: 2001
        },
        {
            name: "Paul McCartney",
            birth: 1942,
            death: null
        },
        {
            name: "John Lennon",
            birth: 1940,
            death: 1980
        },
        {
            name: "Ringo Starr",
            birth: 1940,
            death: null
        }
    ]
}

//Paul McCartney was in the Beatles from 1960 to 1970. He was born in 1942. 
//He contributed heavily to the Magical Myster Tour Album.

console.log(`${beatles.members[1].name} was in the Beatles from ${beatles.history.formed} to ${beatles.history.disbanded}. He was born in ${beatles.members[1].birth}. He contributed heavily to the ${beatles.albums[3]} album.`)

