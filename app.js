// /********Quest. 1/2/3 **********/

// var num = +prompt("Enter a number to round of");
// document.write("Number: " + num + "<br>")
// document.write("Roundof Value: " + Math.round(num) + "<br>")
// document.write("Floor Value: " + Math.floor(num) + "<br>")
// document.write("Ceil Value: " + Math.ceil(num) + "<br>")

// var num = +prompt("Enter a negative floating point number to round of");
// document.write("Number: " + num + "<br>")
// document.write("Roundof Value: " + Math.round(num) + "<br>")
// document.write("Floor Value: " + Math.floor(num) + "<br>")
// document.write("Ceil Value: " + Math.ceil(num) + "<br>")


var num = +prompt("Enter a number to check its absolute value");
if(num < 0)
{
    document.write("absolute value of " + num + "is: " + -num + "<br>")
}else{
    document.write("absolute value of " + num + "is: " + num + "<br>")
}

/**********Quest. 4/5/6/7 *******/

var num = Math.random() * 6
document.write("Random dice Value: " + Math.round(num))

var num = Math.random() * 1;
var val = Math.round(num);
if(val === 0){
    console.log(val)
    document.write("Random coin Value: Heads");
}else{
        document.write("Random coin Value: Tails");
        console.log(val)
    
    }
    
    var num = Math.random() * 100;
    document.write("Random Value between 1 - 100 is: " + Math.round(num));


// /********Quest. 8 *********/
var value = Math.random() * 10;
var num  = Math.round(value)
var inp = Number(prompt("Guess the secret number 1 - 10 :"))
if(inp === num){
    alert("Congrats! you win.");
}else if(inp === num - 1 || inp === num + 1){
    alert("You were so close, Try Again.");
}
else{
    alert("Try again");
}