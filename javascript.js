//question 1 

for (let i = 1; i<=5; i++)
{
    console.log("Harry", "Hermoine", "Ron", "Draco", "Luna")
}

//question 2
let firstName = "Harry";
let house = "Gryffindor";
let greeting = `Welcome, ${firstName} of ${house} !`;
{
    console.log(greeting)
}

//question 3
let characterName= "Hermoine";
console.log(characterName);

//question 4
let spell = "Expelliarmus";
console.log(spell);

let str1 = " Hello, JavaScript! ";
console.log("${str1.trim()}");



//question 5
let quote = 'I solemnly swear that I am up to no good'
console.log(quote);

let slicedquote = quote.slice(10, 17);
console.log(slicedquote);

//question 6
let firstname = "Ron";
let lastname = "Weasley";
let combined = firstname.concat(", ", lastname, "!");
console.log(combined);

//question 7
let sentence = "Draco is a good wizard";
let replacedsentence = sentence.replace("good", "bad");
console.log(replacedsentence);

//question 8
let houses = ['Gryffindor', 'Hufflepuff', 'Ravenclaw'];
console.log(houses);

houses.push('Slytherin')
console.log(houses);

let lastElement = houses.pop();
console.log(houses);
console.log(lastElement);

//question 9
let spells = ['Alohomora', 'Lumos', 'Nox'];
console.log(spells);

spells.unshift('Accio');
console.log(spells);

let firstElement = spells.shift();
console.log(spells);
console.log(firstElement);

//question 10
let professors = ['Dumbledore', 'McGonagall', 'Snape', 'Hagrid']
console.log(professors);

let slicedProfessors = professors.slice(2, 3);
console.log(slicedProfessors);

//question 11
let students = ['Neville', 'Seamus', 'Dean', 'Parvati'];
console.log(students);

students.splice(1, 2); 
console.log(students);

//question 12

//question 13
let wizards = ['Harry', 'Hermione', 'Ron']
console.log(wizards);

wizards.push('Luna', 'Draco');
console.log(wizards);

//question 14
let message = 'Welcome to Hogwarts School of Witchcraft and Wizardry';
console.log(message);

let slicedmessage = message.slice (4,5);
console.log(slicedmessage);
