const arr = [1, 2, 3];
const newarr = [4, 5, ...arr];
console.log(newarr);
'use strict'
const restaurant = {
    name: 'classico Italiano',
    location: 'via Angelo Tavanti 23, Firenze Italy',
    categories: ['Italian', 'Pizzeria', 'vegetarian', 'organic'],
    startermenu: ['Focaccia', 'Brushchetta', 'garlic', 'Bread', 'Caprese Salad'],
    mainMenu: ['pizza', 'pasta', 'Risotto'],
};

// const arr = [1,2,3,4];
// const a = arr[0];
// const b = arr[1];
// const c = arr[2];
// const d = arr[3];
// const [w,x,y,z]=arr;
// console.log(w,x,y,z);
// console.log(w);
// console.log(x);
// console.log(y);
// console.log(z);
// const [first,,second]=restaurant.categories;
// console.log(first,second);
// const [,fourth,fifth] = restaurant.startermenu;//destructing the arrays using we can split them
// console.log(fourth,fifth);
const restaurantcopy = {...restaurant };
restaurantcopy.name = 'abcd';
console.log(restaurantcopy.name);
console.log(restaurant.name);
console.log(restaurantcopy);
const restaurantcopy1 = {...restaurant, specials: ["veg", 'non -veg'] };
console.log(restaurantcopy1);