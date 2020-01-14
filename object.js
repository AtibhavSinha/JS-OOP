// console.log("Hello World");

/* Objects: JavaScript is fundamentally about objects. Arrays are objects. Functions are objects. Objects are objects. 
So what are objects? Objects are collections of name-value pairs. 
The names are strings, and the values are strings, numbers, booleans, and objects (including arrays and functions). 
Objects are usually implemented as hashtables so values can be retrieved quickly.
 */


// How to create Object :

// Way 1 : Object Literal

/* var obj = new Object();

var obj = {name:"Atibhav"};
 */

//-------
/* const circle = {
    radius : 1,
    location: {
        x: 1,
        y: 2
    },
    draw: function(){ // method
        console.log("Draw Circle")
    }
} 
circle.draw(); */
//-------

// Way 2 : Factories
// Not good : multiple circles : boiler plate !!

//-------

/* function createCircle(radius) {
    return {
        radius: radius,
        draw: function(){
            console.log("Draw Circle with radius:"+radius)
        }
    }
}
const circle1 = createCircle(1);
circle1.draw();
const circle2 = createCircle(2);
circle2.draw(); */

/* var obj = {name: "Atibhav"};

obj.name = "Simon";
let name = obj.name;

obj["name"] = "Simon";
let name = obj["name"];
 */



//-------

// Way 3 : Constructor
/* function Circle(radius) { // 'C'
    // console.log(this);
    this.radius = radius,
    this.draw = function(){
        console.log("Draw Circle with radius = "+ radius);
    }
}
const circle3 = new Circle(3);
circle3.draw(); */

// this : by default points to global object : Window in browser
// new : 3 things :  creates a empy object {} AND Set 'this' to that object AND return the object from 'Circle funtion' implicitely
// Dont define variables in Global Object as its bad practice 
// Factories == Constructor : Only way and they way we create 

//-------------------------------------------------------------------------------------------


// Constructor : To initilize the object
// Every obj in JS ---> property --> constructor --> used to create object !!

// circle3.constructor
// circle1.constructor
// ƒ Object() { [native code] } --> buil in constructor Function, circle 1 we are using object literal synatx. So
// internally its created like below :

// let x= {} ==> let x = new Object();


// Built in Constructors / Types :
//Number
//String
//Boolean
//Symbol
//Object
    // Function
    // Array
    // Date

//-----------------------------------------------------------------------------------------------


/* let x = {}
undefined
typeof(x)
"object"
let y = "Stings"
undefined
typeof(y)
"string"
let z = 1
undefined
typeof(z)
"number"
 */

 //-----------------------------------------------------------------------------------------------

 // FUCNTIONS ARE OBJECTS

// Functions are function objects. 
// In JavaScript, anything that is not a primitive type ( undefined, null,boolean, number, or string) is an object.
//  In JavaScript, functions are objects. They have properties and methods. 

/*  function Circle(radius) { 
    console.log(this);
    this.radius = radius,
    this.draw = function(){
        console.log("Draw Circle with radius = "+ radius);
    }
}
 */
// Circle -- > in an Object --> Funtion Object 
// Which constructor created it : Function

/* Circle.name
"Circle"
Circle.constructor
ƒ Function() { [native code] } */

// Creating Circle using Function
/* const CircleUsingFunc = new Function('radius',`
this.radius = radius,
 this.draw = function(){
     console.log("Draw Circle with radius = "+ radius);
 }
`)

const circleObjUsingFunct = new CircleUsingFunc(1);
const circleFunct = new Circle(1); */

// Methods on Function Object

/* Circle.call({}, 1); //Calling a function :  {} --> Empty Object --> refers to this in the Circle Function, List of args. It will execute the function.

const c5 = new Circle(1); */

// Above 2 are same.


 //-----------------------------------------------------------------------------------------------

 // Value vs Reference Type

 // Primitive : Value Type: Num,String, Boolean, Symbol, null, undefined : Copy by value

// Reference Type: Object, Function, Array : Copy by reference

/* let x = 10;

let y = x; // independent of each other

x=20;

// y ?

let x = {value: 10};

let y = x; // same object in the memory

x.value = 20;

// y.value ?

let number = 10 ;

function increase(number) {
    number++;
}

increase(number);
console.log(number) */


/* let number = {value:10};

function increase(number) {
    number.value++;
}

increase(number);
console.log(number)
 */

  //-----------------------------------------------------------------------------------------------

 // Add / remove property : Back end delete user pw.: Need not to change the class !!


/*  function Circle(radius) { // 'C'
    // console.log(this);
    this.radius = radius,
    this.draw = function(){
        console.log("Draw Circle with radius = "+ radius);
    }
}

const circle = new Circle();

circle.location = {x:1, y:2};

const propName = 'location'; // Not know initially !!
circle[propName] = {x:1, y:2};

// delete
delete circle.location; 

 */
   
 
//-----------------------------------------------------------------------------------------------

// To enumerate the members in an object: 
/* for (let key in circle) console.log(key, circle[key]);

Object.keys(circle); 
    
const keys = Object.keys(circle);

// To see if an object has a given property
if ('location' in circle) {

}
 */




