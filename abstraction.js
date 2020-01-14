// Abstraction means hiding the complexity/details and showing only the essentials.  : DVD player
// We can hide the details by using private members. Replace "this" with "let". 

/* function Circle(radius) { 
    
    this.radius = radius; 
               
    this.defaultLocation = {x:0,y:0};  
    
    this.computeOptimumLocation = function() {
        console.log("computing optimum location");
    }

    this.draw = function(){
        this.computeOptimimLocation();
        console.log("Draw Circle with radius = "+ radius);
    }

 }  


 function AbstractCircle(radius) { 
    // Public member 
    this.radius = radius; 

    // Private member
    let defaultLocation = {};  
    
    let computeOptimumLocation = function() {
        console.log("computing optimum location");
    }

    this.draw = function(){
        computeOptimimLocation();
        console.log("Draw Circle with radius = "+ radius);
    }

 }  

 const circle  = new Circle() */
// circle: if public can change the default location and logic of optimum loca !!!
// circle.


//-----------------------------------------------------------------------------------------------

//  SCOPE vs CLOSURE

/* function Circle(radius) { 
    let color = 'red'; // not part of object as its local !! : can hide details 

    this.radius = radius; 
               
    defaultLocation = {x:0,y:0};  
    
    computeOptimumLocation = function() { // not part of object
        console.log("computing optimum location");
    }

    this.draw = function(){ // function inside function

        computeOptimimLocation(); // able to call even its not part of the object: How ?
        // Because of CLOSURE !!

        let x, y ; // local to draw , when draw finishes x and y are gone. Scope is limited to draw.
        // In conrast to it CLOSURE : determines which variable are accesible will acceisble in the inner function
        
        // All local + variable define in the parent function

        // SCOPE is temp
        // CLOSURE: STAYS there. color stays as it part of closure where as x, y not as part of scope.

        console.log("Draw Circle with radius = "+ radius);
    }

 }   */


 //-----------------------------------------------------------------------------------------------

 function Circle(radius) { 
   
    this.radius = radius; 
               
    let defaultLocation = {x:0,y:0};  
    
    this.getdefaultLocation = function() {
        debugger;
        return defaultLocation;
    }
    // To define a getter/setter, use Object.defineProperty():
/* 
    Object.defineProperty(this, 'defaultLocation', {
        get: function() { return defaultLocation; },
        set: function(value) { defaultLocation = value; }
    });
 */
    this.draw = function(){ // function inside function
        console.log("Draw Circle with radius = "+ radius);
    }

 } 

 const circle  = new Circle(1) 
 circle.draw();
