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

const book = {
    title: 'Ego is he Enemy',
    author: 'Ryan Holday',
    publisher: {
        // name: 'Penguin'
    }
};

const {name: publisherName = 'Self-Published'} = book.publisher;

console.log(publisherName);
