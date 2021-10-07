'use strict'
console.log(this);
const calcAge= function (birhtYear){
    console.log(2037-birhtYear);
    console.log(this);

}
calcAge(1991);

const calcAgeArooe=birhtYear=>{
    console.log(2037-birhtYear);
    console.log(this);
};
calcAgeArooe(1990);