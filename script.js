// The ID-number and name
// An image (sprite)
// At least 4 "moves

(() => {

    document.getElementById("search").addEventListener("click", () => {

        let inputdata = document.getElementById("input").value;
        console.log(inputdata)

        // Make a Pokédex using API https://pokeapi.co/ and fetch
        fetch('https://pokeapi.co/api/v2/pokemon/' + inputdata)
            .then(response => response.json())
            .then(data => showPokemon(data))
    })


        function showPokemon(data) {

            // Loop through each of the pokémons and show the requested name or ID number.
            for (let i = 0; i < data.length; i++) {
                let list = data[i];
                let result = document.getElementById("target").content.cloneNode(true);
                let input = document.querySelectorAll("#input").value;

                //At least 4 "moves" / some have only 1 move!
                let moves = [];
                let x = "";
                let data = "";
                if (data.moves.length < 4) {
                    x = 1;
                } else {
                    x = 4;

                if (input == data[i]) {
                    result.querySelector('.id').innerText = list.id;
                    result.querySelector('.name').innerText = list.name;
                    result.querySelector('.moves').innerText = list.moves;
                    result.querySelector('.image').innerText = list.sprites;
                    target.appendChild(result);
                    target.innerHTML = " ";
                }
                console.log("result: " + result)
                console.log("input: " + input)
            }
        }
    })
();
// for the moves, use  = Math.floor(Math.random());
// add extra alert message: you cannot use characters = search for input validations
// error when thhe field is empty
// afterwards make the field empty again
// typo corrections