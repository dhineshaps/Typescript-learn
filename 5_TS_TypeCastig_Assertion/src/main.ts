type one = string
type two = string | number
type three = 'hello'


//convert to more or less specific

let a: one = 'hello'

let b = a as two //less specific

let c = a as three //more specific


//other ways to convert

let d = <one>'word'
let e = <string | number>'word'


//function

const addOrConcat = (a:number,b:number, c: 'add' | 'concat'): number | string => {

    if (c === 'add') return a + b
    return ''+a+b
}

let myVal: string = addOrConcat(2,2,'concat') as string //a s myVa is string even though both 2 and 2 is number , by saying as string it make it as string


//Be watchful ! TS sees no problem - but  a string is returned
let myVal_num: number = addOrConcat(2,2,'concat') as number


//1 as string

//we can't convert number as string directly, it can be done by using the 'unknow' then converting to string
(10 as unknown) as string

//The DOM

const img = document.querySelector('img')! //here it infered as image by hovering over img

const myImg = document.getElementById('#img') as HTMLImageElement //here it infered as element

const nextImg = <HTMLImageElement>document.getElementById('#img')


img.src // without using 'as HTMLImageElement' it considered as both image and null which is error
//BY using ! it amkesthe image element only
myImg.src