function Warning() {
    alert ("Warning danger you have not filled everything");
    console.log("Warning danger you have not filled everything");
    }

function Confirmation(){
     var Val = confirm("Do you want to continue ?");
        if( Val == true ){
            console.log(" CONTINUED!");
            return true;
        }
        else{
            console.log("NOT CONTINUED!");
            return false;
        }
        }

function Value(){
     var Val = prompt("Enter your name : ", "name");
     console.log("You entered : " + Val);
}

if (true) {
    var x = 12;
}
document.write(x + "<br>"); // Output: 10 (accessible outside the block)

if (true) {
    let y = 10;
    document.write(y);
}
//document.write(y); // Error: y is not defineds