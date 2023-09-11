function processPayment(amount) {
    console.log("Collecting payment of " + amount);
}

function processOrder(orderId, amount) {
    console.log(orderId + " is being processed");
    processPayment(amount);
    console.log(orderId + " has been fully processed");
}

console.log("Processing orders");
processOrder(12321, 10.99);
processOrder(12322, 12.99);
processOrder(12323, 15.0);
console.log("All the orders have been processed");

/*
Processing orders
12321 is being processed
Collecting payment of 10.99
12321 has been fully processed
12322 is being processed
Collecting payment of 12.99
12322 has been fully processed
12323 is being processed
Collecting payment of 15
12323 has been fully processed
All the orders have been processed
*/