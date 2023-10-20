'use strict';

class Animal{
    constructor(type,numLeg,fur,horns,tail){
        this.type = type;
        this.numLeg = numLeg;
        this.fur = fur;
        this.horns = horns;
        this.tail = tail;
    }
}


const newAnimal = new Animal("cow",4,false,true,true)
console.log(newAnimal,typeof newAnimal);
const newBird = new Animal("robin",2,false,0,true,)
console.log(newBird)