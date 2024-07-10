// const promise = new Promise((resolve, reject) => {
//     setTimeout(() => resolve('Alen'), 1000);
// });

// promise.then((data)=> console.log("Hello, world!", data));

function wait1(t) {
    return new Promise(resolve => {
        setTimeout(() => resolve(console.log('wait1 completed')), t * 1000);
    });
}

function wait2(t) {
    return new Promise(resolve => {
        setTimeout(() => resolve(console.log('wait2 completed')), t * 1000);
    });
}

function wait3(t) {
    return new Promise(resolve => {
        setTimeout(() => resolve(console.log('wait3 completed')), t * 1000);
    });
}

function calculateTime(t1, t2, t3) {
    const startTime = Date.now();

    return Promise.all([
        wait1(t1),
        wait2(t2),
        wait3(t3)
    ]).then(() => {
        const endTime = Date.now();
        return endTime - startTime;
    });
}

calculateTime(1, 2, 3).then(result => {
    console.log(result);
});