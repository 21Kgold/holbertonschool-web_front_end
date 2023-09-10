function createClassRoom (numbersOfStudents) {
    
    function studentSeat (seat) {
        return function () {
            return seat;
        }
    }

    let students = [];
    for (let i = 0; i < numbersOfStudents; i++) {
        students.push(studentSeat(i + 1));  // Generates an array of functions
    }
    return students;
}

let classRoom = createClassRoom(10);

// Access the [x] element of the array that classRoom function returns
console.log(classRoom[0]()); 
console.log(classRoom[3]());
console.log(classRoom[9]());

/*
The studentSeat function may seem redundant, but without it, the script would
return the error: Uncaught TypeError: classRoom[0] is not a function

When the studentSeat function is not present, the createClassRoom function
creates an array of integers and returns it.
*/