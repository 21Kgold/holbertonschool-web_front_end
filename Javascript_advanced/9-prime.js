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

// time needed to execute the function
const t0 = performance.now();
countPrimeNumbers();
const t1 = performance.now();
console.log (`Execution time of printing countPrimeNumbers was ${t1 - t0} milliseconds.`);
