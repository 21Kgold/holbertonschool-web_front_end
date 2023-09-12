// function that returns the number of prime numbers from 2 to 100
function countPrimeNumbers() {
    let count = 0;
    for (let i = 2; i < 101; i++) {
        for (let j = 2; j < i + 1; j++) {
            if (i % j == 0 && i != j) {
                break;
            } else if (i % j == 0 && j == i) {
                count += 1;
            }
        }
    }
    // console.log(count);
    return count;
}

// time needed to execute the function 100 times
const t0 = performance.now();
// console.log("t0 " + t0);

for (let i = 0; i < 100; i++) {
    setTimeout(countPrimeNumbers, 0)
}

setTimeout(() => {
    const t1 = performance.now();
    // console.log("t1 " + t1);
    const executionTime = t1 - t0;
    console.log (`Execution time of calculating prime numbers 100 times was ${executionTime} milliseconds.`);
}, 0);

/*
Console output when console.log are not commented
t0 22104263.199999988
25 (100 times)
t1 22104270.399999976
Execution time of calculating prime numbers 100 times was 4.399999976158142 milliseconds.
*/
