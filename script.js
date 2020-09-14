(() => {


    document.getElementById("search").addEventListener("click", () => {

        // Make a Pokédex using API https://pokeapi.co/
        fetch('https://pokeapi.co/api/v2/pokemon/') // example ditto
            .then(response => response.json())
            .then(data => showPokemon(data))
        console.log(data)
    })

    function showPokemon(data) {
        // Loop through each of the pokémons and show the requested name or ID number.
        for (let i = 0; i < tmpl.length; i++) {
            let list = data[i];
            let name = document.getElementById('tpl-pokemon').content.cloneNode(true);
            let input = document.querySelectorAll("#inputName").value;

            if (input == data[i]) {
                name.querySelector('.inputIDname').innerText = list.name;
                target.appendChild(Name); // and display it in the tag whose id is "target"
                target.innerHTML = " ";
            }
            console.log(name, input)
            console.log("test is something is appearing?")
        }
    }
    //let moves = Math.floor(Math.random());
})
();
