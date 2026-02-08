
const menu = document.getElementById('menu');
const menuButton = document.getElementById('menuButton');

//toggle the menu visibility when the menu button is clicked
menuButton.addEventListener('click', function() {
    if (menu.style.display === 'none') {
        menu.style.display = 'block';
    } else {
        menu.style.display = 'none';
    }

});

//alert message
alertButton.addEventListener('click', function (){
    alert('Hello! This is an alert message.');
});

//increment and decrement counter
const counterDisplay = document.getElementById('counter');
const incrementButton = document.getElementById('incrementButton');

//initialize counter
let counter = 0;

//increment the counter and update the display when the button is clicked
incrementButton.addEventListener('click', function(){
counter += 1; //increment the counter by 1
counterDisplay.textContent = counter; //update the counter display
});

//decrememnt the counter and update the display when the button is clicked
decrementButton.addEventListener('click', function(){
counter -= 1; //decrement the counter by 1
counterDisplay.textContent = counter; //update the counter display
});

//Reset button
const resetButton = document.getElementById('resetButton');

//add an event listener to the reset button to refresh the page
resetButton.addEventListener('click', function(){
location.reload(); //refresh the page

});

const usernameInput = document.getElementById('username');
const greetButton = document.getElementById('greetButton');
const greetingMessage = document.getElementById('greetingMessage');

//Get references to the form elements

//function to check if the input contains only letters
function isValidName(name) {
    const namePattern = /^[a-zA-Z\s]+$/; // Regular expression to allow only letters and spaces
    return namePattern.test(name);
}

// Add an event listener to the button 
greetButton.addEventListener('click', function(){
// Get the value of the input
const username = usernameInput.value.trim();

// Check if the input is not empty and valid
if (username === '') {
    greetingMessage.textContent = 'Please enter your name.';
} else if (!isValidName(username)) {
    greetingMessage.textContent = 'Invalid input. Please use only letters.';
} else {
    // Set the greeting message
    greetingMessage.textContent = `How are you today, ${username}!`;
}
});
   

const addParagraphButton = document.getElementById('addParagraphButton');
const paragraphContainer = document.getElementById('paragraphContainer');

addParagraphButton.addEventListener('click', function(){

    //create a new paragraph element
    const newParagraph = document.createElement('p')

    //set its text content
    newParagraph.textContent = 'Congratulations on learning practical javascript!';

    //append the paragraphto the center
    paragraphContainer.appendChild(newParagraph);
});