var games = []

document.addEventListener("DOMContentLoaded", () => {
    const REMOVE_FORM = {
        element: document.getElementById("remove"),
        inputs: {
            dropGame: document.getElementById("selectedGame")
        }
    }
    const ADD_FORM = {
        element: document.getElementById("add"),
        input: {
           textGame: document.getElementById("inputGame")
        }
    }
    const RESET_BTN = document.getElementById("reset");
    REMOVE_FORM.element.addEventListener("submit", (e) => {
        e.preventDefault();
        alert("Removed")
    })
    ADD_FORM.element.addEventListener("submit", (e) => {
        e.preventDefault();
        alert("Added")
        games.push(ADD_FORM.input.textGame.value);
        console.log(games)
        let element = document.createElement("option");
        element.setAttribute("value", games.length-1);
        element.innerHTML = ADD_FORM.input.textGame.value
        REMOVE_FORM.inputs.dropGame.appendChild(element)
    })
    RESET_BTN.addEventListener("click", () => {
        alert("Reset List");
        games = []
        console.log(games)
    })
})