// const person = {
//     name: 'Philip',
//     age: 34,
//     location: {
//         city: 'New York',
//         temp: 89
//     }
// };

// console.log(`${person.name} is ${person.age} years old.`);

// // destructured person in next line
// const {name = 'Anonymous', age } = person;
// console.log(`${name} is ${age} years old.`);

// if (person.location.temp && person.location.city) {
//     console.log(`It is ${person.location.temp} degree in ${person.location.city}`)
// }

// // destructured below
// const { city, temp: temperature } = person.location;
// if (temperature && city) {
//     console.log(`It is ${temperature} degree in ${city}`)
// }

// const book = {
//     title: 'Ego is he Enemy',
//     author: 'Ryan Holday',
//     publisher: {
//         // name: 'Penguin'
//     }
// };

// const {name: publisherName = 'Self-Published'} = book.publisher;

// console.log(publisherName);


// ARRAY DESTRUCTURING

const address = ['234 Akinwunmi', 'Lekki', 'Lagos', 'Nigeria'];

console.log(`It's ${address[1]}, ${address[2]}`);

const [ street, location, city, country] = address;
console.log(`It's ${location}, ${city}`);


const item = ['Coffee (hot)', '$2.3', '$3.05', '$6.00', '$9.00'];

const [ Coffee, , medium, , xlarge] = item;

console.log(`A medium ${Coffee} costs ${medium}`)