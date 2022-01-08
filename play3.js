const fetchData = () => {
    const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Done!');
        }, 1500);
    });
    return promise;
};

//asynchronous code
setTimeout(() => {
    console.log('Timer is done!');
    fetchData()
    .then(text => {
        console.log(text);
        return fetchData();
    })
    .then(text2 => {
        console.log(text2);
    });
}, 2000) // - asynchronous!

console.log('Hello!'); //no delay - synchronous
console.log('Hi!'); //no delay - synchronous

