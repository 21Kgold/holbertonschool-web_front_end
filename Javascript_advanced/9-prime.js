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
const startTime = performance.now();
countPrimeNumbers();
const endTime = performance.now();
const executionTime = endTime - startTime;
console.log ("Execution time of printing countPrimeNumbers was " + executionTime, "milliseconds.");
