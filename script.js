// Functionalities:
// [x] The ID-number and name
// [ ] An image (sprite)
// [ ] At least 4 "moves - tip for the moves, use = Math.floor(Math.random());
// [ ] add extra alert message: you cannot use characters = search for input validations (alert("Please check your input, is this a number or ID?")
// [ ] error when the field is empty
// [ ] afterwards make the field empty again
// [ ] typo corrections

(() => {

    document.getElementById("search").addEventListener("click", () => {

        let input = document.getElementById("input").value;
        console.log("input:" + input)

        fetch('https://pokeapi.co/api/v2/pokemon/' + input)
            .then(response => {
                return response.json()
            }).then(data => {

            document.getElementById("id").innerHTML = "ID-number: " + data.id
            document.getElementById("name").innerHTML = "Name: " + data.name
            document.getElementById("img").setAttribute = ("src", data.sprites.front_default)
            document.getElementById("moves").innerHTML = "Moves: " + data.moves

            let i = 0;
            for (i; i < 4; i++) {
                if (data.moves.length < 4) {
                    i = 1;
                } else {
                    i = 4;
                }
                moves = data.moves[i].data.moves.name
            }
        })
    })
})
();

/*if (input == data) {
showPokemon()
} else {
alert("Please check your input, is this a number or ID?")
}*/