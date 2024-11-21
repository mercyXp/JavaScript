//strings
//strings in JavaScript can be represented in double quotes or single quotes
var name = 'Mercy';
console.log('My name is ' + name);

var str = "Hey there ";
var message = "The length of \""+ str+ "\" is: ";
console.log(message, str.length);

//Strings can be used as objects by using the keyword 'new'.

// Declare a string
var x = "Heaven is the goal";    
        
// Declare an object
var y = new String("Heaven is the goal");
   
console.log(typeof(x) , typeof(y));

//String Methods
/*
Built-in string methods of JavaScript:
search(): It is used to search a string for a specific value or an expression. It returns the position of the match.
split(): It is used to split a string into an array of substrings.
startsWith(): It is used to check whether a string begins with the specified characters.
slice(): It is used to extract a part of a string and return a new string.
concat(): It is used to combine texts of two strings and return a new string.
charAt(): It is used to return the character at the specified index.
indexOf() It is used to return the index, within the string object, which occurs first, of the specified value. It returns -1 if the object is not found.
lastIndexOf(): It is used to return the index, within the string object, which occurs last, of the specified value. It returns -1 if the object is not found.
match(): It is used to match a regular expression against a string.
replace(): It is used to find a match between a regular expression and a string. The matched substring is replaced with a new substring.
substr(): It is used to return the characters in a string, beginning at the specified location, through the specified number of characters.
substring(): It is used to return the characters in a string between the two specified indexes.
toLowerCase(): It is used to convert the string value which is called, to lower case.
toUpperCase(): It is used to convert the string value which is called, to upper case.
valueOf(): It is used to return the primitive value of the specified object.


User-defined string methods: The methods that are defined by the user to perform a particular task.
logIt(): It is used to log a parameter back to the console, when the code is executed.
return(): It is used to return a specific value, explicitly.

*/