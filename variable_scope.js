/**
 * Created by Milenica on 9/18/2016.
 */
//Recipie 11: Closures
//######################################################################################################################//
function makeSandwitch(){
    var magic_ingrediant = "penat butter";
    function make(filling){
        return magic_ingrediant+ " and " + filling;
    }

    return make("jelly");

}
console.log("#####################################");
console.log("Closure makeSandwitch");
console.log("Simple Closure makeSandwitch() function");
console.log(makeSandwitch()); //It prints penat butter and jelly
console.log("#####################################");
//#####################################################################################################################//
function makeSandwitchI(){
    var magic_ingrediant = "penat butter";
    function make(filling){
        return magic_ingrediant+ " and " + filling;
    }

    return make;

}

var f = makeSandwitchI();
console.log("#####################################");
console.log("Function makeSundwitchI");
console.log("First makeSandwitch() function");
console.log(f("jelly")); //penat butter and jelly
console.log(f("bannana")); //penat butter and bannana
console.log(f("nuttela")); //penat butter and nuttela
console.log("#####################################");
//#####################################################################################################################//
function makeSandwitchII(ingrediant){
    function make(filling){
        return ingrediant + " and " + filling;
    }
    return make;
}

var hamAnd = makeSandwitchII("ham");
var sarma = makeSandwitchII("kiseli kupus");
console.log("#####################################");
console.log("Second makeSandwitch() function");
console.log(hamAnd("eggs"));
console.log(sarma("mleveno meso"));
console.log("#####################################");
//#####################################################################################################################//
function makeSandwitchIII(ingrediant){
    //Retuning anonymus finction with function expression
    return function (filling){
        return ingrediant + " and " + filling;
    }

}
console.log("#####################################");
console.log("Third makeSandwitch() function");
var sarma = makeSandwitchII("kulen");
console.log(hamAnd("slanina"));
console.log("#####################################");
//######################################################################################################################//
function Box(){
    var val = undefined;
    return {
        set:function(newVal){ val = newVal;},
        get:function(){return val;},
        type: function(){ return typeof val;}

    }
}
console.log("#####################################");
console.log("Changing variable with closure:");
var b = Box();
console.log(b.type());
console.log(b.get());
console.log(b.set(100));
console.log(b.get());
console.log("#####################################");
//######################################################################################################################//
//Recipie 12 - Variable Hoisting
//######################################################################################################################//
function wrapElementsI(a){
    var result = [],i,n;
    for(i = 0;i<a.length;i++){
        result[i] = function(){ return a[i];}
    }
    return result;
}

function wrapElements(a) {
    var result = [];
    for (var i = 0, n = a.length; i < n; i++) {
        (function(j) {
            result[i] = function() { return a[j]; };
        })(i);
    }
    return result;
}
console.log("#####################################");
console.log("Wraped elements");
var wrapped = wrapElements([10,20,30,40,50,60,70,80,90]);
var f = wrapped[0];
console.log(f());
console.log("#####################################");

//######################################################################################################################//
var a = function declare(){ console.log("I am declaring outside");}
function test(){
    console.log(a);
    console.log(b);

    var a = function declare(){ console.log("I am declaring");}
    var b = function express(){ console.log("I am expresing");}

    console.log(a);
    console.log(b);

}

test()