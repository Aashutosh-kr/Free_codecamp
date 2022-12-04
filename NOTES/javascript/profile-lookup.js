// Setup
const contacts = [
    {
        firstName: "Akira",
        lastName: "Laine",
        number: "0543236543",
        likes: ["Pizza", "Coding", "Brownie Points"],
    },
    {
        firstName: "Harry",
        lastName: "Potter",
        number: "0994372684",
        likes: ["Hogwarts", "Magic", "Hagrid"],
    },
    {
        firstName: "Sherlock",
        lastName: "Holmes",
        number: "0487345643",
        likes: ["Intriguing Cases", "Violin"],
    },
    {
        firstName: "Kristian",
        lastName: "Vos",
        number: "unknown",
        likes: ["JavaScript", "Gaming", "Foxes"],
    },
];

function lookUpProfile(name, prop) {
    // Only change code below this line

    for (let index = 0; index < contacts.length; index++) {
        if (contacts[index].firstName === name) {
            if (contacts[index].hasOwnProperty(prop)) {
                return contacts[index][prop];
            } else {
                return 'No such property';
            }
        }
        // Only change code above this line
    }
    return 'No such contact';
}

console.log(lookUpProfile("Kristian", "lastName"));   // Vos
console.log(lookUpProfile("Sherlock", "likes"));   // ["Intriguing Cases", "Violin"]
console.log(lookUpProfile("Harry", "likes"));   // array
console.log(lookUpProfile("Bob", "number"));   // No such contact

console.log(lookUpProfile("Bob", "potato"));   // No such contact
console.log(lookUpProfile("Akira", "address"));   // No such property
console.log(lookUpProfile("Akira", "likes"));   // array

// console.log(contacts[0].hasOwnProperty("number"))