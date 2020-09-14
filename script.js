(() => {
    //link with localhost
    fetch('https://pokeapi.co/')
        .then(response => response.json())
        .then(tmpl => showPokémon(tmpl))

    function showPokémon(tmpl) {
        // Loop through each of the pokémons and add them to the Xmen list.
        for (let i = 0; i < tmpl.length; i++) {
            let list = tmpl[i];
            let name = document.getElementById('tpl-pokémon').content.cloneNode(true);
            let input = document.querySelectorAll("#hero-id").value;

            if (input == tmpl[i]) {
                name.querySelector('.IDnumber').innerText = list.id;
                name.querySelector('.IDname').innerText = list.name;
                name.querySelector('.alter-ego').innerText = list.sprites;
                name.querySelector('.powers').innerText = list.abilities;
                target.appendChild(name); // and display it in the tag whose id is "target"
                target.innerHTML = " ";
            }
        }
    }
})
();
