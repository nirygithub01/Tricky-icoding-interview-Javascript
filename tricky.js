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

//String coercion

var x = 3;

var y = "3";

console.log(x + y);
