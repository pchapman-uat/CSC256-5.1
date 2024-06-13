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

    REMOVE_FORM.element.addEventListener("submit", (e) => {
        e.preventDefault();
        alert("Removed")
    })
    ADD_FORM.element.addEventListener("submit", (e) => {
        e.preventDefault();
        alert("Added")
        games.push(ADD_FORM.input.textGame.value);
        console.log(games)
    })
})