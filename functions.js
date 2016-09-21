/**
 * Created by Milenica on 9/18/2016.
 */
//Recipie 18 - Functions
//######################################################################################################################//
//This keyword #########################################################################################################//
function Person(name,age){
    //This will be in context of new object crated
    this.name = name;
    this.age = age;
    this.info = function(){
        console.log("Name is: "+this.name+" Age is: "+this.age);
    }

}

//######################################################################################################################//
var game = "footbal";
var user = {
    game:"basketball",
    data:[
        {"name":"Djordje","age":"27"},
        {"name":"Milena","age":26}
    ],
    clickHandler:function(event){
        var randomNum = ((Math.random () * 2 | 0) + 1) - 1;//Random number between 0 or 1
        console.log(this.data[randomNum].name + " " + this.data[randomNum].age);
    },
    click:function(event){
        var objThis = this;
        this.data.forEach(function(person){
            //In this situation,because of anonymus function this is pointing to global scope
            //So we must create variable objThis that will contain this of the object
            //console.log("Person is : person.name "+"and THIS game is: " +this.game);//This is football
            console.log("Person is : person.name "+"and THIS game is: " +objThis.game);//This is basketball
        });
    }
}
console.log("#####################################");
user.clickHandler(); //It works
user.click();
console.log("#####################################");
//######################################################################################################################//
//If we assigne method that uses this to a variable,this is bound to another bject
var data = [
    {"name":"Stefan","age":10},
    {"name":"Milos","age":12}

]

var person = {
    data : [
        {"name":"Stefana","age":100},
        {"name":"Milka","age":120}
    ],
    showData: function(event) {
        var randNum = ((Math.random() * 2 | 0) + 1) - 1; // random number between 0 and 1​
        console.log("Person is: "+this.data[randNum].name + " And have "+this.data[randNum].age+" years");
    }
}
console.log("#####################################");
console.log(person.showData());//Works just fine
//If we put assigne user.showData() to variable, we will change context of this
//Now this is not refer to object person  data properties. This is refer to global data
var per = person.showData;
per();

//To fix problem we need to use bind
var per1 = person.showData.bind(person);
per1();
console.log("#####################################");
//######################################################################################################################//
var fns = [];

function definer(){
    for (var i=0;i<5;i++){
        fns.push(function(){
            return i;
        });
    }
};
definer();
//Call the functions inside fns. I would say that will return 1,2....4.length,but it wouldn't
//It prints 5,every time
console.log("############################################");
console.log("Functions in array: ");
for (var i in fns) {
    console.log(fns[i]());
}

console.log("############################################");