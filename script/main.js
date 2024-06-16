var games = []
var REMOVE_FORM;
var ADD_FORM;

document.addEventListener("DOMContentLoaded", onLoad)

function removeGame(e){
    e.preventDefault();
    let index = REMOVE_FORM.inputs.dropGame.value
    console.log(index)
    games.splice(index, 1)
    REMOVE_FORM.update();
}

function addGame(e){
    let value = ADD_FORM.input.textGame.value
    e.preventDefault();
    if(value =="") return;
    games.push(value);
    games.sort();
    console.log(games)
    ADD_FORM.input.textGame.value = ""
    REMOVE_FORM.update();
}

function onLoad(){
    REMOVE_FORM = {
        element: document.getElementById("remove"),
        inputs: {
            dropGame: document.getElementById("selectedGame")
        },
        update() {
            this.inputs.dropGame.innerHTML = ""
            LIST.innerHTML = ""
            games.forEach((element, i) => {
                let option = document.createElement("option")
                option.value = i;
                option.innerHTML = element;
                this.inputs.dropGame.appendChild(option)
                let item = document.createElement("li");
                item.innerHTML = element;
                LIST.appendChild(item);
            });
            if(games.length == 0){
                LIST.innerHTML = "No games added"
            }
        },
        resetList(){
            alert("Reset List");
            games = []
            this.update();
            console.log(games)
        }
    }
    ADD_FORM = {
        element: document.getElementById("add"),
        input: {
           textGame: document.getElementById("inputGame")
        }
    }
    
    const RESET_BTN = document.getElementById("reset");
    const LIST = document.getElementById("list");
    REMOVE_FORM.element.addEventListener("submit", (e) => removeGame(e))
    ADD_FORM.element.addEventListener("submit",(e) => addGame(e))
    RESET_BTN.addEventListener("click",(e) => REMOVE_FORM.resetList(e))
}

