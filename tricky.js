// //console.log('Hello world');

// /** 
// const name ="Venkat";
// const age = 30;
// const person = {name, age};

// console.log(person);
// */

// /** */
// /**
// function x() {
//     return 'hello'
// }
// const sentence =x('hi');
// console.log(sentence);//hello
// */

// /** 
// function x() {
//     console.log(y) //undefiend
//     var y = 1;
// }

// x();
// */

// /** 
// var grand_Total= eval('10*10+5');
// console.log(grand_Total);  // 105 as an integer
// */

// /** 
// const arr=['p','q', 'r','s','t'];

// const Array1 = arr.reduce((acc,current) => {

//     return acc + current
// }, "")
// console.log(Array1);//pqrst
// */
// /** 
// var x =0 
// for(x; x < 5; x++) {
//     console.log(x);  // 0, 1, 2, 3, 4
// }
// */

// /** 
// let a =5, b, c 
// console.log(a, b, c)//5 undefined undefined
// b= --a
// console.log(a, b, c) // 4 4 undefined
// c = a --
// console.log(a, b, c)  // 3 4 4        
// */

// /** 
// let a = 5
// let b = 0 == 2 && a++
// console.log(a,b)
// */

// /** 
// let apple = 10;

// let bat = 0, cat = 100, dog = apple;

// while(bat <= cat) {
//     let mid = Math.floor((bat = cat) / 2);
//     if(mid = mid <= apple) {
//         dog = mid ;
//         bat = mid - 1;
//     }
//     else {
//         cat = mid - 1 ;

//     }
// }
// console.log(dog);

// */
// /** 
// console.log("start") 
// setTimeout(() => {console.log("in settimeout")}, 0)
// console.log('end'); //start end in settimeout
// */

// /** 
// var values = [1, 2, 3, 4]
// var ans = values.slice(1)
// console.log(ans) // [ 2, 3, 4 ]
// //documet.writeln(ans);
// */
 /**

 var str = "vivek singh bist";
var str2 = 'John Doe';
console.log(typeof(str))
console.log(typeof(str2));

 var x = 3 ;
 var y = 3.6;

 console.log(typeof(x));
console.log(typeof(y));

 var bigint = 12345678919876655;//number
 console.log(typeof(bigint));

 var a = 2;
 var b = 3;
 var c = 2;


 if(a == b){
     console.log (true);
 }else{
     console.log (false);
 }

if (a == c){
    console.log (true);
}else{
    console.log (false);
}

 var z = null;
 console.log(typeof(z));//object

 var symbol = Symbol('+');
 console.log(typeof(symbol));//symbol
*/

/** 
var obj1 = {
    x : 43,
    y: "Hello World",
    z:function (){
        return this.x;
        //console.log (this.x); // nothing printed
    }
    
}
//collection of data as an ordered list

var array1 = [5, "Hello", true, 4.1];

console.log(obj1);
console.log(obj1.x);
console.log(obj1.z);
console.log(array1);
*/


/**HoistedVariable =>the variable moved at top in irrespective way */

//hoistedVariable = 3;
//console.log(hoistedVariable); 
//var hoistedVariable;


/** 
function simpleFunction() {
    console.log("Hello world !");// nothing print
}


function simpleFunction() {
    console.log("Hello world !");// nothing print
}
console.log("Hello brother");//Hello brother

hoistedFunction () ;
function hoistedFunction() {
    console.log("Hello world !");//Hello World !
}
*/

//Hoisting takes place in the local scope as well 
//hoistedFunction();
//function doSomething() {
  //  x = 33;
  //  console.log(x);
    //var x;
//}

//let x;
//console.log(x);
//x = 23;

/** 
"Use strict";

x = 23;
var x;
console.log (x);
*/

/** 
//String coercion

var x = 3;

var y = "3";

console.log(x + y);//33

var a = 24;
var b = "Hello ";

console.log(a + b);//24Hello 


var name = "vivek";

var surname = "Bisht";

console.log(name + surname);//vivekBisht

var p = 3;
var q = "3";

console.log(p-q);//0

let c = 3;
let d = "4";

console.log(c * d);//12
*/

/** */
//Bolean 

/** 
var x = 0;
var y = 23;

if(x) {console.log(x)} // value of x will not printed because of value of x is 0(false)
if(y) {console.log(y)} // value of y is printed 23;
*/

/** 
var x = 220;
var y = "Hello";
var z = undefined;
x || y
x || z

if(x || y){
return true;
    //console.log("Hwello brother");
}else if(x || z) {

    console.log("Hello dear");

}else if(x && y) {
    return true;
}else if(y && z) {
    console.log("Hello bro");
}else {
    console.log("well");
}
*/

/** 
var a = 12;
var b = "12";

a == b;
*/

/** 
console.log(isNaN ("Hello"))//true
console.log(isNaN (345));//false
console.log(isNaN ('1'));//false
console.log(isNaN (true));//false
console.log(isNaN (false));//false
console.log(isNaN (undefined));//true
*/

//var a = 23;
//var a= "Hello world";

//console.log(a)

//let b = 34;
//let x = "Hello bro";

//console.log(b);
//console.log(x)
//const c = 45 ;
//const y =" Yes I got it";
//console.log(c);
//console.log(y);

/** 
var y = 8454;
var z = y;
console.log(z);
var z = 5411;

y = 23;
console.log(z);
*/

/** 
var obj = {name: "vivek", surname:"Bisht"};
var obj1 = obj;
console.log(obj1);
*/

/**Immediately invoked Function */

/**Syntax of IIFE*/
/** 
(function() {
    console.log("Hello bro");

}) ();
*/


/**Higher Order Function */

/** 
function higherOrder(fn){
    fn();

}
higherOrder(function() {console.log("Hello world")
});

function highOrder2 () {
    return function() {
        console.log( "Do something");
    }
}
var x= highOrder2();

x();
*/

/** this keyword */

/** 
function thisKeywords() {
    console.log(this);

}
thisKeywords();
*/

/** 
var obj = {
    name: "Vivek",
    getName: function() {
        console.log(this.name);
    }
}
obj.getName();//Vivek
*/
/** 
var obj = {
    name :"Vivek",
    getName: function() {
        console.log(this.name);
    }
}
obj.getName();//Vivek
var getName = obj.getName;

var obj2 = {name:"akshay", getName};
obj2.getName();//akshay
*/