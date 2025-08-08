const myName = "birbal";// A string (text)
let myAge = 30;//A number

// print them in console
console.log(myName);
console.log(myAge);

//THIS DEFINES FUNCTION
function greet (name){
    console.log("Hello, " + name + "!")
}

//This Calls the function
greet ("Sagar");
greet("Birbal");

// calculator function
function add (num1, num2){
    return num1+num2;
}

//call the function and store the returned value in a new variable
const  result = add(5,10);

console.log ("the result of the addition is:");
console.log (result); // this sjhould be printed


const myButton = document.querySelector('#myTestButton');
const mainHeading = document.querySelector('#main-heading')
myButton.addEventListener('click', function()
{
    //this will be run only after button is clicked
    mainHeading.textContent = 'This text was changed by JavaScript!';
});

