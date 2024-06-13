document.addEventListener("DOMContentLoaded", () => {
    const REMOVE_FORM = {
        element: document.getElementById("remove"),
        input: document.getElementById("selectedGame")
    }
    const ADD_FORM = {
        element: document.getElementById("add"),
        input: document.getElementById("inputGame")
    }

    REMOVE_FORM.element.addEventListener("submit", (e) => {
        alert("Removed")
    })
    ADD_FORM.element.addEventListener("submit", (e) => {
        alert("Added")
    })
})