var games = []
var REMOVE_FORM;
var ADD_FORM;

document.addEventListener("DOMContentLoaded", onLoad)

function removeGame(e){
    e.preventDefault();
    alert("Removed")
    let index = REMOVE_FORM.inputs.dropGame.value
    console.log(index)
    games.splice(index, 1)
    REMOVE_FORM.update();
}

function addGame(e){
    let value = ADD_FORM.input.textGame.value
    e.preventDefault();
    alert("Added")
    games.push(value);
    games.sort();
    console.log(games)
    ADD_FORM.input.textGame.value = ""
    REMOVE_FORM.update();
}

function resetList(){
    alert("Reset List");
    games = []
    REMOVE_FORM.update();
    console.log(games)
}

function onLoad(){
    REMOVE_FORM = {
        element: document.getElementById("remove"),
        inputs: {
            dropGame: document.getElementById("selectedGame")
        },
        update() {
            this.inputs.dropGame.innerHTML = ""
            games.forEach((element, i) => {
                let option = document.createElement("option")
                option.value = i;
                option.innerHTML = element;
                this.inputs.dropGame.appendChild(option)
            });
        }
    }
    ADD_FORM = {
        element: document.getElementById("add"),
        input: {
           textGame: document.getElementById("inputGame")
        }
    }
    
    const RESET_BTN = document.getElementById("reset");

    REMOVE_FORM.element.addEventListener("submit", (e) => removeGame(e))
    ADD_FORM.element.addEventListener("submit",(e) => addGame(e))
    RESET_BTN.addEventListener("click",(e) => resetList(e))
}
