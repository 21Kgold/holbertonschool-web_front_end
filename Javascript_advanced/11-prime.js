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

function display() {
    console.log (`Execution time of calculating prime numbers 100 times was ${t2 - t0} milliseconds.`);
}

setTimeout(display, 0); // Delayed by 0 milliseconds

// time needed to execute the function 100 times
const t0 = performance.now();
//console.log("t0 " + t0);

for (let i = 0; i < 100; i++) {
    countPrimeNumbers();
}

const t2 = performance.now();
//console.log("t2 " + t2);

/*
Execution time of calculating prime numbers 100 times was 3.100000023841858 milliseconds.
*/
