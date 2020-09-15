// Functionalities:
// [ ] The ID-number and name
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

            document.getElementById("id").innerHTML = data.id
            document.getElementById("name").innerHTML = data.name
            document.getElementById("img").setAttribute = ("src", data.sprites.front_default)

        })
    })
})
    ();

            /*function showPokemon() {


                document.getElementsByClassName("moves").innerHTML = data.moves
                let moves = []
                let random = []
                let x = "";

                if (data.moves.length < 4) {
                    x = 1;
                } else {
                    x = 4;
                }
                random.push(Math.floor(Math.random() * moves.length))

                let result = document.getElementById("tmp-pokemon").content.cloneNode(true);
                return result;
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