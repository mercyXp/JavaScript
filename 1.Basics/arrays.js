var names = ["Delphine", "Favour", "Samuel","Mercy", "Joel"];
console.log(names);

var surnames = new Array ("Comoros","Ifeanyi","Chuks","Zenzi","Ostin");
console.log(surnames);

// Storing number, boolean, strings in an Array
var diverse =["true", "1245", "$20", "g","!"];
console.log(diverse);
console.log("Cost of a pair of shoes is: " + diverse[2]);

names.push("Micheal");//Adding Element at the end of an Array
console.log(names);

surnames.unshift("McClure"); //Adding elements at the front of an Array 
console.log(surnames);

surnames.pop(); //Removing element from the end of an array  
console.log(surnames);

surnames.shift(); //Removing elements at the beginning of an array 
console.log(surnames);

// splice()
// deletes 3 elements starting from 1
names.splice(1, 3);
console.log(names);

// doesn't delete but inserts 3, 4, 5
// at starting location 1
surnames.splice(1, 0, 3, 4, 5);
console.log(surnames);