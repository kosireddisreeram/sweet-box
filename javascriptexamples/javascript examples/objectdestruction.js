'use strict'
const restaurant = {
    Name:'classico Italiano',
    Locatin:'via Angelo Tavanti 23, Firenze Italy',
    categories:['Italian','Pizzeria','vegetarian','organic'],
    startermenu:['Focaccia','Brushchetta','garlic','Bread','Caprese Salad'],
    mainMenu:['pizza','pasta','Risotto'],
    openingHours:{
        thu:{
            open:12,
            close:22,
        },
        fri:{
            open:11,
            close:23,
        },
        sat:{
            open:0,
            close:24,
        },
    },
    order: function(starterIndex,mainIndex)
    {
        return [this.startermenu[starterIndex],this.mainMenu[mainIndex]];
    },
    
};
const {Name,openingHours,categories,startermenu,mainMenu,Locatin} = restaurant;
console.log (openingHours,categories,Name,startermenu,mainMenu,Locatin);

