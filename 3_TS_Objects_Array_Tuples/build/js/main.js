"use strict";
let strigArr = ['One', 'Two', 'Three']; //strin arrayy
let guitars = ['start', 'Les', 55]; //union type
let mixedData = ['EVH', 54, true]; //union type
strigArr[0] = 'Df'; //only allows string else it throw error
guitars[0] = 51; //here won't demand for only string as it is union of str and number
guitars.unshift('fet'); //fet-string at begining - it is acceptable
//guitars.push = 45 //creatin error
//strigArr = guitars; //it will throw error as stringArr is complete String
//but guitars can be string array
guitars = strigArr; // as guitars is mixed dataof numbers and string
let test = []; //it will be empty type
let bands = []; //decalring type to the array
bands.push('hello'); //now the string can be pushed
/************************************************************************ */
//to define a specific array at defines position then tuple can be used
//*******************************Tuple ************************************/
//here it is more position defined, it will throw error if mismatch in the position
//can't add more then defined
let myTuple = ['Dhinesh', 30, true];
let mixed = ['dhin', 32, true];
mixed = myTuple; //this is allowed  as mixed is union type of all allowed
//myTuple = mixed; //this is not allowed
myTuple[1] = 55; //on;y allows the number
//************************************************************************ */
//********************************Objects ***********************************/
let myObject;
myObject = []; //in javascript even the array is also a obejct
console.log(typeof myObject);
myObject = bands;
console.log(myObject);
myObject = {};
console.log(myObject);
const exampleObj = {
    name: 'Dhinesh',
    Skill: 'Technology',
    alive: true,
};
exampleObj.Skill = 'Mainframe'; //only the the parent type is allowed, string can't be number
let evh = {
    //it should have all the properties else error
    name: 'Dhine',
    active: true, //if ? is there then we can skip active
    albums: [1995, 'woo'],
};
//new property can't be added
//function
const greetGuitarist = (guit) => {
    return `Hello ${guit.name}`;
};
//passing the type variable to the above function
console.log(greetGuitarist(evh));
/*
interface Guitarist = {
    //type defined in advanced
    name: string;
    active?: boolean; //by adding ? it become union, either boolean or undefined
    albums: (string | number)[]; //array
};
*/ //---> this works same as as type
//interface can be used when using the class
//************************************************************************ */
//*********************** Enums ********************************************/
/*Unlike Most TS featuers, Enums are not type level addition to javascript
but something added to the language and runtime */
var Grade;
(function (Grade) {
    Grade[Grade["U"] = 1] = "U";
    Grade[Grade["D"] = 2] = "D";
    Grade[Grade["C"] = 3] = "C";
    Grade[Grade["B"] = 4] = "B";
    Grade[Grade["A"] = 5] = "A";
})(Grade || (Grade = {}));
console.log(Grade.U); //it will start with  be default but can be changed
