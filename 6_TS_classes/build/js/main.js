"use strict";
class coder {
    constructor(name, music, age, lang = "TypeScript") {
        this.name = name;
        this.music = music;
        this.age = age;
        this.lang = lang;
        this.name = name; // even though we create the constructor but the property required above
        this.music = music; // if the above property are not required it can be handled using **publi* in constructor
        this.age = age;
        this.lang = lang;
    }
    //protected can be access in sub class if the code class is dervied
    getAge() {
        return `Hello, I'm ${this.age}`; //private can be accessed inside  the class
    }
}
const Dhinesh = new coder("Dhinesh", "U1", 16);
console.log(Dhinesh.getAge());
//console.log(Dhinesh.age) //here age is private and can't be accssed directly outside as property
console.log(Dhinesh.music); //public can be accessble
//protected also can't be accessd outside
class webDev extends coder {
    constructor(computer, name, music, age) {
        super(name, music, age);
        this.computer = computer;
        this.computer = computer;
    }
    getLang() {
        return `I write ${this.lang}`; //here even though we have not taken in the constructor, it will use it from parent
    }
}
const fet = new webDev('windows', 'Dhine', 'Melody', 31);
console.log(fet.getLang());
class Guitarist {
    constructor(name, insrument) {
        this.name = name,
            this.instrument = insrument;
    }
    play(action) {
        return `${this.name} ${action} the ${this.instrument} `;
    }
}
const Page = new Guitarist('FET', 'Viloin');
console.log(Page.play("Strums"));
//************************************************************************************************ */
//static member in the class
class Peeps {
    static getCount() {
        return Peeps.count;
    }
    constructor(name) {
        this.name = name;
        this.name = name;
        this.id = ++Peeps.count; //increment of count, pre-increment
    }
}
Peeps.count = 0; //here static it can be used without initiation of the class
const quest = new Peeps('Quest');
const fq = new Peeps('FEtquest');
console.log(Peeps.count); //here it will give 2
//*********************************************************************************** */
//getters and setters
class Badnds {
    constructor() {
        this.dataState = [];
    }
    get data() {
        return this.dataState;
    }
    set data(value) {
        if (Array.isArray(value) && value.every(el => typeof el === 'string')) {
            this.dataState = value;
            return;
        }
        else {
            throw new Error('Parm is not arry and string');
        }
    }
}
const Mybands = new Badnds();
Mybands.data = ['dsd', 'fdf'];
console.log(Mybands.data);
