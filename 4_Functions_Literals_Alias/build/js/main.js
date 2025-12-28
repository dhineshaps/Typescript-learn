"use strict";
//Type Alias
//***************************************************************** */
//************************* Literals ********************************* */
let myName; // Using : makes it literal and can't be reassigned
//myName = 'FET';
let userName; //here any of these values can be reassigned
userName = 'FET'; //Here FET is reassigned
//*********************************************************************** */
//*************************Functions ************************************** */
const add = (a, b) => {
    return a + b;
};
//function without return
const logMsg = (message) => {
    console.log(message);
};
logMsg('hello');
//add('d', 2); -> it is not allowed
let subtract = function (c, d) {
    return d - c;
};
let multiply = function (c, d) {
    //alias function
    return c * d;
};
logMsg(multiply(2, 2));
//optional parameters - by using ? which makes the variable any
//it should be last in decaration
const addAll = (a, b, c) => {
    if (typeof c != 'undefined') {
        return a + b + c;
    }
    return a + b;
};
//default value
const sumAll = (a = 1, b, c = 2) => {
    return a + b + c;
};
logMsg(addAll(2, 3, 4));
logMsg(addAll(2, 3));
logMsg(sumAll(2, 3));
logMsg(sumAll(undefined, 3)); //to skip the particular variable we have to use undefined
//Rest Paramter
//rest of the parameter -> ...nums is like rest of other parmters, it should come last
//if there is a variable a then (a, ...nums)
const total = (...nums) => {
    return nums.reduce((prev, curr) => prev + curr);
};
logMsg(total(1, 2, 3, 4));
//*********************************************************************** */
//**********************Never Type ************************************** */
const createError = (errMSG) => {
    throw new Error(errMSG);
};
const infite = () => {
    //this is never ending loop
    let i = 1;
    while (true) {
        i++;
    }
};
