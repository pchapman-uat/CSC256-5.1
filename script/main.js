// Global Varriables
var games = []
var REMOVE_FORM;
var ADD_FORM;

// On Content Loaded
document.addEventListener("DOMContentLoaded", onLoad)

// Remove game from list
function removeGame(e){
    // Prevent default submit function
    e.preventDefault();
    // Get the index of the item
    // The value of the selection is the index of the game
    let index = REMOVE_FORM.inputs.dropGame.value
    console.log(index)
    // Remove the game from the list
    games.splice(index, 1)
    // Update the form
    REMOVE_FORM.update();
}

// Add game to list
function addGame(e){
    // Get the value of the inputed game
    let value = ADD_FORM.input.textGame.value
    // Prevent default submit function
    e.preventDefault();
    // If the value is blank, stop function
    if(value =="") return;
    // Append game to the list
    games.push(value);
    // Sort the list 
    games.sort();
    console.log(games)
    // Clear the input
    ADD_FORM.input.textGame.value = ""
    // Update the form
    REMOVE_FORM.update();
}

function onLoad(){
    // This is an object that containes elements, as well as functions
    REMOVE_FORM = {
        // Main Element for the form
        element: document.getElementById("remove"),
        // Inputs for the form
        inputs: {
            dropGame: document.getElementById("selectedGame")
        },
        // Update the form
        update() {
            // Clear values and selection
            this.inputs.dropGame.innerHTML = ""
            LIST.innerHTML = ""
            // For each game
            games.forEach((element, i) => {
                // Create an element
                let option = document.createElement("option")
                // Set value to index
                option.value = i;
                // Set html to the value
                option.innerHTML = element;
                // Add to inputs
                this.inputs.dropGame.appendChild(option)
                // Create list element
                let item = document.createElement("li");
                // set html for item
                item.innerHTML = element;
                // add item to list
                LIST.appendChild(item);
            });
            if(games.length == 0){
                LIST.innerHTML = "No games added"
            }
        },
        // Reset the list
        resetList(){
            // Alert the user
            alert("Reset List");
            // Clear games list
            games = []
            // Update the forms
            this.update();
            console.log(games)
        }
    }
    // Add form object
    ADD_FORM = {
        // Main element
        element: document.getElementById("add"),
        // Inputs for form
        input: {
           textGame: document.getElementById("inputGame")
        }
    }
    
    // Constant variables
    const RESET_BTN = document.getElementById("reset");
    const LIST = document.getElementById("list");
    // Event Listeners for buttons
    REMOVE_FORM.element.addEventListener("submit", (e) => removeGame(e))
    ADD_FORM.element.addEventListener("submit",(e) => addGame(e))
    RESET_BTN.addEventListener("click",(e) => REMOVE_FORM.resetList(e))
}

