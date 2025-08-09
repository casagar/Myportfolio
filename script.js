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


// select all buttons inside the project cards
const projectButtons= document.querySelectorAll('.project-card button')

//loop thru all buttons that was found
projectButtons.forEach(button =>{

    //add a click listner to the current button in the loop
    button.addEventListener('click',function(){
    
        //find the parent element of the clicked button (the /project-card div)
        const card= button.parentElement;

    //find the paragraph specifically inside that card
    const paragraph = card.querySelector('p');

    // change the paragraph text
    paragraph.textContent="Button clicked! You can put new project details here"
    }); 
});