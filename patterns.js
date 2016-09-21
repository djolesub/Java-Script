/**
 * Created by Milenica on 9/20/2016.
 */
//Module pattern - we using this pattern to crate private fields
// We are using immediatley invoked function expression (IIFE) that returns an object
var person = (function(){
    var age = 27;

    return {
        name : "Djordje",

        getAge: function(){
            return age;
        },
        growOlder:function(){
            age++;
        }

    };

}());
console.log("########################################");
console.log("Module Pattern: ");
console.log("Person age person.age: "+person.age);
console.log("Person name person.name: "+person.name);
console.log("Person age person.getAge(): "+person.getAge());
person.growOlder();
console.log("Call function growOlder");
console.log("Person age person.age: "+person.getAge());
console.log("########################################");
//#####################################################################################################################//
//Revealing module pattern

var student = (function(){
    var name = "Djordje";
    age = 26;

    function getAge(){
        return age;
    }

    function getName(){
        return name;
    }

    return {
        getAge:getAge,
        getName:getName
    }

}());

console.log("Revealing pattern");
console.log("Name-student.name: "+student.name);
console.log("Age-student.age: "+student.age);
console.log("Name-student.getName(): "+student.getName());
console.log("Age-student.getAge(): "+student.getAge());
console.log("###########################################");
//######################################################################################################################//
//Private members for Constructors

function Person(name) {
    //Defining variable only accessible inside of constructor
    var age = 27;
    this.name = name;

    this.getAge = function(){
        return age;
    };

    this.growOlder = function(){
        age++;
    };

    this.setName = function(name){
        this.name = name;
    }

}
var p1 = new Person("Djordje");
console.log("####################################################");
console.log("Private constructor Members:");
console.log("Person name-p1.name: "+p1.name);
console.log("Person age-p1.age: "+p1.age);
console.log("Person age-p1.getAge(): "+p1.getAge());
p1.growOlder();
console.log("Grow older function");
console.log("Person age-p1.getAge(): "+p1.getAge());
console.log("Trying setter");
p1.setName("Milos");
console.log(p1);
console.log("####################################################");
//#####################################################################################################################//
//Hybrid pattern - This is combination of module and constuctor pattern
//We use this approach when we want to share data between all instances
var Person = (function(){
    //Everyone one shares the same age
    var age = 300;

    function InnerPerson(name){
        this.name = name;
    }

    InnerPerson.prototype.getAge = function(){
        return age;
    }

    InnerPerson.prototype.getName = function(){
        return name;
    }

    InnerPerson.prototype.growOlder= function(){
        age++;
    }

    return InnerPerson;

}());
var m1 = new Person("Ana");
var m2 = new Person("Marija");
console.log("###############################################");
console.log("Hybrid Pattern");

console.log("Person1 name-m1.name: "+m1.name);
console.log("Person1 age-m1.age: "+m1.age);
console.log("Person1 age-m1.getAge(): "+m1.getAge());
m1.growOlder();
console.log("Grow older function");
console.log("Person1 age-m1.getAge(): "+m1.getAge());

console.log("PERSON 2");
console.log("Person2 name-m2.name: "+m2.name);
console.log("Person2 age-m2.age: "+m2.age);
console.log("Person2 age-m2.getAge(): "+m2.getAge());
m1.growOlder();
console.log("Grow older function");
console.log("Person2 age-m2.getAge(): "+m2.getAge());
console.log("Person 1 age-m1.getAge(): "+m1.getAge());

console.log("###############################################");
//######################################################################################################################//
//Mixins - Object inherits properties of another one object

function mixin(reciver,supplier){
    for(var property in supplier){
        if(supplier.hasOwnProperty(property)){
            reciver[property] = supplier[property];
        }
    }
    return reciver;

}
























