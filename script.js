class Animal{
    constructor(name, cuteFactor, dangerFactor, meatEater){
        this.name = name;
        this.cuteFactor = cuteFactor;
        this.dangerFactor = dangerFactor;
        this.meatEater = meatEater;
    }

    static classType='Animal'

    speak(){
        console.log('hello, i am a ' + this.name)
    }

    hugRatio(){
        return this.cuteFactor/this.dangerFactor
    }

    info(){
        console.log(this.name + " is a " + Animal.classType + " with a hug ratio of " + this.hugRatio())
    }
}

let dog = new Animal('dog', 10, 4, true)
let cat = new Animal('cat', 20, 4, true)
let hamster = new Animal('hamster', 30, 4, true)
let monkey = new Animal('monkey', 15, 4, true)
let platypus = new Animal('platypus', 25, 10, true)
dog.info()
cat.info()
hamster.info()
monkey.info()
platypus.info()