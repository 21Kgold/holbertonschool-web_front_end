function divideBy (firstNumber) {
    return function (secondNumber) {
        return secondNumber / firstNumber;
    }
}

function addBy (firstNumber) {
    return function (secondNumber) {
        return secondNumber + firstNumber;
    }
}

// Closures

const addBy100 = addBy(100);
const addBy1000 = addBy(1000);
const divideBy10 = divideBy(10);
const divideBy100 = divideBy(100);

/*
console.log(addBy100(20));
console.log(divideBy10(20));
console.log(divideBy100(200));
console.log(addBy1000(20));

120
2
2
1020
*/

/* 
In essence, addBy and divideBy are function factories. addBy() creates
functions that can add a specific value to their argument. In the above
example, addBy creates two new functions—one that adds one hundred to
its argument, and one that adds one thousand. addBy100 and addBy1000 both form
closures. They share the same function body definition, but store different
lexical environments. In addBy100's lexical environment, firstNumber is 100,
while in the lexical environment for addBy1000, firstNumber is 1000.
 */
