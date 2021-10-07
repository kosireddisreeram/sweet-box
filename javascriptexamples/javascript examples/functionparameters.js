'use strict'
const flightNUmber = 'we12';
const jonas = {
    name: "jonas schedman",
    passport: 12345
}
const p = function(flightNUmber, jonas) {
    jonas.name = "mr" + jonas.name; //here we are adding the changes to the object so we can call the object 
    // by calling it by hte object name and the property name and change and assign the value
    if (jonas.passport === 12345) {
        alert('check in');
    } else {
        alert('wrong passporrt');
    }
}
const newpassport = function(person) { // for any of the person
    person.passport = 90;
}
newpassport(jonas) // passing in to the object jonas to newpassport
    // console.log(jonas);
    // the value has paseed
p(flightNUmber, jonas); // passing the parameters in 
console.log(flightNUmber);