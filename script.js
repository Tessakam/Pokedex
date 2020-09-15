// Functionalities:
// The ID-number and name
// An image (sprite)
// At least 4 "moves
// for the moves, use  = Math.floor(Math.random());
// add extra alert message: you cannot use characters = search for input validations (alert("Please check your input, is this a number or ID?")
// error when the field is empty
// afterwards make the field empty again
// typo corrections

(() => {

    document.getElementById("search").addEventListener("click", () => {

        let input = document.getElementById("input").value;
        console.log("input:" + input)

        fetch('https://pokeapi.co/api/v2/pokemon/' + input)
            .then(response => {
                return response.json()
            }).then(data => {
            showPokemon(data)
            document.getElementsByClassName("id").innerHTML = data.id
            document.getElementsByClassName("name").innerHTML = data.name
            document.getElementsByClassName("moves").innerHTML = data.moves
            document.getElementsByClassName("img").setAttribute = ("src", data.sprites.front_default)
        })
    })
})
();

function showPokemon(data) {
    // Loop through each of the pokémons and show the requested name or ID number.
    let result = document.getElementById("tmp-pokemon").content.cloneNode(true);

    document.getElementById("tmp-pokemon").innerHTML
    target.innerHTML = " "
    console.log("result:" + result)
}


/* toevoegen van loop + in de result ook laten zien
    let moves = [];
    let x = "";
    let data = "";
    if (data.moves.length < 4) {
        x = 1;
    } else {
        x = 4;
    }*/