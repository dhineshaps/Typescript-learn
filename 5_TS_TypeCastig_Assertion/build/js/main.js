"use strict";
//convert to more or less specific
let a = 'hello';
let b = a; //less specific
let c = a; //more specific
//other ways to convert
let d = 'word';
let e = 'word';
//function
const addOrConcat = (a, b, c) => {
    if (c === 'add')
        return a + b;
    return '' + a + b;
};
let myVal = addOrConcat(2, 2, 'concat'); //a s myVa is string even though both 2 and 2 is number , by saying as string it make it as string
//Be watchful ! TS sees no problem - but  a string is returned
let myVal_num = addOrConcat(2, 2, 'concat');
//1 as string
//we can't convert number as string directly, it can be done by using the 'unknow' then converting to string
10;
//The DOM
const img = document.querySelector('img'); //here it infered as image by hovering over img
const myImg = document.getElementById('#img'); //here it infered as element
const nextImg = document.getElementById('#img');
img.src; // without using 'as HTMLImageElement' it considered as both image and null which is error
//BY using ! it amkesthe image element only
myImg.src;
