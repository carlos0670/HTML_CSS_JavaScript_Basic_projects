document.querySelector('form').addEventListener('submit', async function (e) {
    e.preventDefault();
    const pokemonName = document.getElementById('pokemon-input').value;
    const fetchApi =  fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}/`)
    .then((response) => response.json())
    .then((data) => {
            return data.name;
    });

        console.log(await fetchApi);
});

