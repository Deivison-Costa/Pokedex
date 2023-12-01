const apiUrl = 'https://pokeapi.co/api/v2/pokemon/';

async function fetchRandomPokemon() {
    const randomId = Math.floor(Math.random() * 898) + 1; // There are 898 Pokémon as of the last update (Gen 8)
    
    try {
        const response = await fetch(apiUrl + randomId);
        const data = await response.json();

        displayPokemon(data);
    } catch (error) {
        console.error('Error fetching Pokemon data:', error);
    }
}

function displayPokemon(data) {
    const nameElement = document.querySelector('.pokemon-name');
    const imageElement = document.querySelector('.pokemon-image');
    const typeElement = document.querySelector('.pokemon-type');

    nameElement.textContent = data.name;
    imageElement.src = data.sprites.front_default;
    typeElement.textContent = `Type: ${data.types.map(type => type.type.name).join(', ')}`;
}

// Fetch a random Pokémon when the page loads
fetchRandomPokemon();
