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
console.log(newAnimal);