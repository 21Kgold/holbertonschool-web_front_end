const globalVariable = "Welcome";

function outer () {
    alert(globalVariable);
    const course = "Holberton";         // course is a local variable created by outer

    function inner () {                 // the inner() function, forms a closure
        alert(globalVariable + course); // use variable declared in parent function
        const exclamation = "!";

        function inception () {
            alert(globalVariable + course + exclamation);
        }
        inception();
    }
    inner();
}
outer();