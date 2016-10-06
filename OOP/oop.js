//######################################################################################################################//
//####################################### JAva Script OOP ##############################################################//
//################## Creating Objects with object literals and Object constructor ######################################//
var person1 = {
    "name":"Djordje",
    "age":27
};

var person2 = new Object();
person2.name = "Milena";
person2.age = 26;
//Change properties
person2.name = "Milica";
person1.age = 30;
delete person1.name;

/*
Behind sceens JS using [[Put]] method to add property to object.This method create spot in object that will hold
the property.[[Put]] method is invoked two times.One time for name property and one time for age. The result is
creation of an own property on the object.Propperty is stored directly on the instance.

When a new value is assigne to existing property  the [[Set]] method is called behind sceens.

When we want to delete value [[Delete]] method is called
*/

//############################ Check if propertu Exists in Object #####################################################//
console.log(name in person1); //Good way but we dont know is this property owne or inherited
console.log(toString in person1) // Returns true
person1.hasOwnProperty("toString"); //Returns false
person1.hasOwnProperty("name"); // Returns truw

//############################ Properties Enumeration #################################################################//
/*
All properties that are added to Object are enumerable. We can use for-in loop to list all enumerable properties.
For-in loop return all properties,own properties and inherited
*/
for (i in person2){
    console.log("Name: "+i+" Value :"+person2[i]);
}
/*
If we want only own properties we should use Object.keys();
It returns keys and we can get values.
*/
var properties = Object.keys(person2);
console.log(properties);




































