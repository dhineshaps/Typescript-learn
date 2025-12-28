class coder {
    
    // name: string  // property ******************
    // music: string
    // age: number
    // lang: string
   
    secondLang !: string

    constructor(public name: string,public music: string, private age:number, protected lang:string = "TypeScript"){ //public //private //protected
        this.name = name   // even though we create the constructor but the property required above
        this.music = music // if the above property are not required it can be handled using **publi* in constructor
        this.age = age
        this.lang = lang
    }

    //protected can be access in sub class if the code class is dervied
    
    public getAge(){
        return `Hello, I'm ${this.age}` //private can be accessed inside  the class
    }
}
const Dhinesh = new coder("Dhinesh","U1",16)

console.log(Dhinesh.getAge())
//console.log(Dhinesh.age) //here age is private and can't be accssed directly outside as property
console.log(Dhinesh.music) //public can be accessble
//protected also can't be accessd outside


class webDev extends coder {
    constructor(public computer: string,
        name: string,
        music: string,
        age: number,
    ){
        super(name,music,age)
        this.computer= computer
    }

    public getLang(){
        return `I write ${this.lang}` //here even though we have not taken in the constructor, it will use it from parent
    }
}

const fet = new webDev('windows','Dhine','Melody',31)

console.log(fet.getLang())
//even protected can't be accessed as property drectly

//****************************************** Interface********************************************************* */


//interface -> when it get implemented using class, it should have all 
// the proeprty and method decalred in interface should be in the class
interface Musician {
    name: string, //property
    instrument: string, //property

    play(action: string): string //method
}

class Guitarist implements Musician {

     name: string
     instrument: string

     constructor(name: string, insrument:string){
         this.name = name,
         this.instrument = insrument
     }

     play(action: string): string {
         return `${this.name} ${action} the ${this.instrument} `
     }

}

const Page = new Guitarist('FET','Viloin')

console.log(Page.play("Strums"))


//************************************************************************************************ */

//static member in the class

class Peeps{
    static count: number =0 //here static it can be used without initiation of the class

    static getCount() : number{
        return Peeps.count
    }

    public id: number

    constructor(public name: string) {
        this.name = name
        this.id = ++Peeps.count //increment of count, pre-increment
    }
}

const quest = new Peeps('Quest')
const fq = new Peeps('FEtquest')

console.log(Peeps.count) //here it will give 2

//*********************************************************************************** */

//getters and setters

class Badnds {
    private dataState : string[]

    constructor() {
        this.dataState = []
    }

    public get data() : string[] {
        return this.dataState
    }

    public set data(value: string[]) {
        if(Array.isArray(value) && value.every(el => typeof el === 'string')) {
            this.dataState = value
            return
        } else{
            throw new Error('Parm is not arry and string')
        }
    }

}

const Mybands = new Badnds()
Mybands.data = ['dsd','fdf']
console.log(Mybands.data)   