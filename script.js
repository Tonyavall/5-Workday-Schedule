let grabCurrentDate = moment().format('MMMM Do, YYYY');
let grabCurrentHour = moment().format('h');
let buttons = document.querySelectorAll('.saveBtn')
let userInput = document.querySelectorAll('.user-input')

// Check if current date works
// console.log(grabCurrentDate)

// Check to see if the current hour works
// console.log(grabCurrentHour)

// Check to see if buttons is a nodeList
// console.log(buttons)

// Check to see if userInput is a nodeList
// console.log(userInput)

renderInput();

// Using jquery to set the currentDay text content to grabCurrentDate
$('#currentDay').text(grabCurrentDate);

// Using jquery and event delegation to handle all the buttons
$('#container').on('click', function(targ) {
    // If the target (clicked element) is a button
    if (targ.target && targ.target.matches('.saveBtn')) {
        // console check
        // console.log('I was clicked!')

        // grabbing the clicked btn's block value
        btnBlockValue = targ.target.dataset.block;
        
        // Looping over all input fields and matching it's block value with current button
        for (var i = 0; i < userInput.length; i++) {
            // if the userInput block value is equal to the btn block value
            if (userInput[i].dataset.block === btnBlockValue && userInput[i].textContent !== "") {
                // concatenating to make a dynamic storage item name based on its block value
                localStorage.setItem('userInput' + userInput[i].dataset.block, userInput[i].textContent)
            }
        }
    }
})

function renderInput() {
    // Looping over userInput fields
    for (var i = 0; i < userInput.length; i++) {
        userInputBlock = userInput[i].dataset.block;

        // Getting the userInput local storage item based on the current field input block value
        userInputValue = localStorage.getItem('userInput' + userInputBlock)
        // If the current item in the local storage doesn't exist, skip current iteration.
        if (userInputValue === undefined || userInputValue === null) {
            continue;
        }

        // Setting the text content of current input field
        userInput[i].textContent = userInputValue;
    };
}