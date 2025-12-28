"use strict";
let myName = 'Dhinesh'; //here we explictly told this is string
//even if we didn't ste string, it will implictly infer as string
//myName = 45 -? This will throw an error as it only accepts string
let myData; //just decalring
myData = 'hello this is data';
let meaningOfLife;
let isLoading;
//any will allow any datatype but this defeats the typescript functionality
let album;
//union so it can be eithrt of strin or number
let newAlbum;
let isActive;
meaningOfLife = 45;
isLoading = true;
const sum = (a, b) => {
    return a + b; //by hovering over sum we get to know it returns number
};
let re = /\w+/g; //here it auto inferes as regular expression
