'use strict';

// Hamster
class Hamster{
    constructor(name){
        this.owner = '';
        this.name = name;
        this.price = 15;
    }
    wheelRun(){
        console.log('squeak squeak');
    }
    eatFood(){
        console.log('nibble nibble');
    }
    getPrice(){
        return this.price;
    }
}
const lucky = new Hamster('Lucky');
lucky.owner = 'Mark';

// Person
class Person{
    constructor(name){
        this.name = name;
        this.age = 0;
        this.height = 0;
        this.weight = 0;
        this.mood = 0;
        this.hamsters = [];
        this.bankAccount = 0;
    }
    getName(){
        return this.name;
    }
    getAge(){
        return this.age;
    }
    getWeight(){
        return this.weight;
    }
    greet(){
        console.log(`Hello, I am ${this.name}.`)
    }
    eat(){
        this.weight++
        this.mood++
    }
    exercise(){
        this.weight--
    }
    ageUp(){
        this.age++
        this.height++
        this.weight++
        this.mood--
        this.bankAccount+=10
    }
    buyHamster(hamster){
        this.hamsters.push(hamster);
        this.mood+=10;
        this.bankAccount-=hamster.getPrice();
    } 
      
}
const mark = new Person('Mark');
for(let i =0; i < 9; i++){
    mark.ageUp()
}
mark.buyHamster(lucky)
console.log(mark)




// Chef should be a factory of Dinner
// Add a constructor to dinner that sets the string properties, appetizer, entree and dessert.
// Add a method on chef that takes three arguments and returns a new Dinner based on those arguments.
// Have the Chef create 3 dinners, log the dinners
class Dinner {
    constructor(appetizer,entree,dessert){
        this.appetizer = appetizer;
        this.entree = entree;
        this.dessert = dessert;
    }
    cook(){
       console.log(`Dinner is served ${this.appetizer},${this.entree} and ${this.dessert}`)
    }
}

class Chef {
    constructor(name,cook){
        this.name = name;
        this.cook = cook;
    }
    cookDinner(Dinner){
        this.cookDinner = Dinner.cook();
        return this.cookDinner;
    }
}
const dinner1 = new Dinner('bread','pizza','cheesecake')
const dinner2 = new Dinner('salad','fried chicken','ice cream')
const dinner3 = new Dinner('soup','sandwich','Strawberry Cake')
const todaychef = new Chef(dinner1)
