//Type Alias

type stringOrNumber = string | number;

type stringOrNumberArray = (string | number)[];

type Guitarist = {
    //type defined in advanced
    name: string;
    active?: boolean; //by adding ? it become union, either boolean or undefined
    albums: stringOrNumberArray;
};

type userId = stringOrNumberArray;

//***************************************************************** */
//************************* Literals ********************************* */
let myName: 'Dhinesh'; // Using : makes it literal and can't be reassigned
//myName = 'FET';

let userName: 'Dhinesh' | 'FET' | 'Quest'; //here any of these values can be reassigned

userName = 'FET'; //Here FET is reassigned

//*********************************************************************** */
//*************************Functions ************************************** */

const add = (a: number, b: number): number => {
    return a + b;
};

//function without return
const logMsg = (message: any): void => {
    console.log(message);
};

logMsg('hello');
//add('d', 2); -> it is not allowed

let subtract = function (c: number, d: number): number {
    return d - c;
};

type mathFunction = (a: number, b: number) => number;

let multiply: mathFunction = function (c, d) {
    //alias function
    return c * d;
};

logMsg(multiply(2, 2));

//optional parameters - by using ? which makes the variable any
//it should be last in decaration
const addAll = (a: number, b: number, c?: number): number => {
    if (typeof c != 'undefined') {
        return a + b + c;
    }

    return a + b;
};

//default value
const sumAll = (a: number = 1, b: number, c: number = 2): number => {
    return a + b + c;
};

logMsg(addAll(2, 3, 4));
logMsg(addAll(2, 3));
logMsg(sumAll(2, 3));
logMsg(sumAll(undefined, 3)); //to skip the particular variable we have to use undefined

//Rest Paramter
//rest of the parameter -> ...nums is like rest of other parmters, it should come last
//if there is a variable a then (a, ...nums)
const total = (...nums: number[]): number => {
    return nums.reduce((prev, curr) => prev + curr);
};

logMsg(total(1, 2, 3, 4));

//*********************************************************************** */
//**********************Never Type ************************************** */

const createError = (errMSG: string): never => {
    throw new Error(errMSG);
};

const infite = () => {
    //this is never ending loop
    let i: number = 1;
    while (true) {
        i++;
        if(i > 100) break //here we breaking
    }
};


//custom type guard
const isNumber = (value: any): boolean => {
    return typeof value === 'number' ? true:falses
}


//use of the nerver type
const numberOrString = (value: number | string): string =>{
    if (typeof value === 'string') return 'string'

    if (isNumber('number')) return 'number'

    return createError('This should never ahppen! ')
}
