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
    return count;
}

// time needed to execute the function 100 times
const t0 = performance.now();
for (let i = 0; i < 100; i++) {
    countPrimeNumbers();
}
const t1 = performance.now();
console.log (`Execution time of calculating prime numbers 100 times was ${t1 - t0} milliseconds.`);

/*
Execution time of calculating prime numbers 100 times was 3.600000023841858 milliseconds.
*/
