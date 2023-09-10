// Function factory of functions that change the styling of the body element
function changeMode (size, weight, transform, background, color) {
    return function () {
        document.body.style.fontSize = size;
        document.body.style.fontWeight = weight;
        document.body.style.textTransform = transform;
        document.body.style.backgroundColor = background;
        document.body.style.color = color;
    }
}

function main () {
    // Form closures
    const spooky = changeMode(9, "bold", "uppercase", "pink", "green");
    const darkMode = changeMode(12, "bold", "capitalize", "black", "white");
    const screamMode = changeMode(12, "normal", "lowercase", "white", "black");

    // Create elements
    const p = document.createElement("p");
    const button_spooky = document.createElement("button");
    const button_darkMode = document.createElement("button");
    const button_screamMode = document.createElement("button");

    // Set the HTML content of the elements
    p.innerHTML = "Welcome Holberton!";
    button_spooky.innerHTML = "Spooky";
    button_darkMode.innerHTML = "Dark mode";
    button_screamMode.innerHTML = "Scream mode";

    // Append the elements to the body of the page
    document.body.appendChild(p);
    document.body.appendChild(button_spooky);
    document.body.appendChild(button_darkMode);
    document.body.appendChild(button_screamMode);

    // Set closures as onclick events of the buttons
    button_spooky.onclick = spooky;
    button_darkMode.onclick = darkMode;
    button_screamMode.onclick = screamMode;
}

main();