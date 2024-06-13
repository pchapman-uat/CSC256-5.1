var games = []

document.addEventListener("DOMContentLoaded", () => {
    const REMOVE_FORM = {
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
        let value = ADD_FORM.input.textGame.value
        e.preventDefault();
        alert("Added")
        games.push(value);
        games.sort();
        console.log(games)
  
        REMOVE_FORM.update();
    })
    RESET_BTN.addEventListener("click", () => {
        alert("Reset List");
        games = []
        console.log(games)
    })
})
