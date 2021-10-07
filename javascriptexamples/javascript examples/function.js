'use strict '
const bookings = []; // array for storing values .
const createBooking = function(flightNum, numPassengers, price) {
    // use the data in we need to push it into a object and later in to  a array . 
    const booking = {
        flightNum,
        numPassengers,
        price,
    }
    console.log(booking); // to print the object .
    bookings.push(booking); // push the object to array from object .
};
createBooking('LH123', 2, 1234);