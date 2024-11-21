//A function is a set of statements that take inputs, do some specific computation, and produce output.

//function definition
function add(num1, num2){ //named function
    return num1 + num2;
}
var addd = function(a, b){ //Anonymous function- we use a variable to assign it
    return a + b;
}
//calling a function
console.log(add(4,4)); //for the first function
console.log(addd(0,4)); //for the second function

//nested functions
function msg(firstName) {
    function hey() {
      console.log("Hey " + firstName);
    }

    return hey();
  }

  msg("Mercy");
//We may assign a function to a variable and then utilize that variable as a function in JavaScript. It is known as a function expression.
var welcome = function(){
    return "Welcome to my repository";
  }

  var repo = welcome();

  console.log(repo);

  // Immediately invoked function expression
  /*let message = (function() {
    return "Welcome to GfG";
  })(); /// This “();” immediately invokes the function.  
  console.log(message);*/