// Functionalities:
// [x] The ID-number and name
// [x] An image (sprite)
// [x] At least 4 "moves - tip for the moves, use = Math.floor(Math.random());
// [ ] add extra alert message: you cannot use characters = search for input validations (alert("Please check your input, is this a number or ID?")
// [ ] error when the field is empty
// [ ] afterwards make the field empty again
// [ ] typo corrections

(() => {

    document.getElementById("search").addEventListener("click", () => {

        let input = document.getElementById("input").value;

        function validateInput() {
            document.getElementById("input").value = "";
            if (input == "" || input == null) {
                alert("Please check your input, is this a number or ID?");
                return false;
            }
        }

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
    })
})
();

