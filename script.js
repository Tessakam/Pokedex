// Functionalities:
// [x] The ID-number and name
// [x] An image (sprite)
// [x] At least 4 "moves - tip for the moves, use = Math.floor(Math.random());
// [x] add extra alert message: you cannot use characters = search for input validations (alert("Please check your input, is this a number or ID?")
// [x ] error when the field is empty
// [ ] afterwards make the field empty again
// [ ] typo corrections

(() => {

    document.getElementById("search").addEventListener("click", () => {

        let input = document.getElementById("input").value;

        fetch('https://pokeapi.co/api/v2/pokemon/' + input)
            .then(response => {
                return response.json()
            }).then(data => {

            document.getElementById("id").innerHTML = "ID-number: " + data.id
            document.getElementById("name").innerHTML = "Name: " + data.name

            let sprites = data.sprites.front_default
            document.querySelector("img").src = sprites;

            let moves = [];
            for (let i = 0; i < 4; i++) {
                moves.push(data.moves[i].move.name)
                //console.log(moves)

                let unique = [...new Set(moves)];
                document.getElementById("moves").innerHTML = "Moves: " + unique.join(', ');
            }
        })
            //error message
            .catch(function (error) {
                alert("ERROR!\nPlease check your input!\nIs the field empty?\nIs this a Pokémon name or number?")
                //console.log("error, not found")
            })
    })
})
();


