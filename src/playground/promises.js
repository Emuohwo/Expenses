const promise = new Promise((resolve, reject) => {
    setTimeout(()=> {
        // resolve('this data have been resolve')
        reject('Something went wrong. please try again')
    }, 6000)
});
console.log('before');

promise.then((data) => {
    console.log(data)
}).catch((error) => {
    console.log('error: ', error)
})

console.log('after');
