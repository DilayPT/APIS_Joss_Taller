let container = document.querySelector("#body");
let searchInput = document.querySelector("#poke-search");
let allPokemons = [];

async function cargarPokedex() {
    container.innerHTML = "<p style='grid-column: 1/-1; text-align:center;'>Cargando base de datos...</p>";
    
    try {
        const promises = [];
        for (let i = 1; i <= 151; i++) {
            promises.push(fetch(`https://pokeapi.co/api/v2/pokemon/${i}`).then(res => res.json()));
        }
        allPokemons = await Promise.all(promises);
        render(allPokemons);
    } catch (error) {
        container.innerHTML = "<p>Error al conectar con el servidor.</p>";
    }
}

function render(lista) {
    container.innerHTML = "";
    
    lista.forEach(poke => {
        const habilidades = poke.abilities.map(a => a.ability.name).join(', ');
        const hp = poke.stats[0].base_stat;
        const ataque = poke.stats[1].base_stat;

        container.innerHTML += `
            <div class="card">
                <p class="card-id">#${poke.id.toString().padStart(3, '0')}</p>
                <div class="card-sprite">
                    <img src="${poke.sprites.other["official-artwork"].front_default}" alt="${poke.name}"/>
                </div>
                <p class="card-name">${poke.name}</p>
                
                <div class="info-extra">
                    <span>Habilidades y Poderes</span>
                    <p>${habilidades}</p>
                </div>

                <div class="card-stats">
                    <div class="stat">
                        <p class="stat-label">Ataque</p>
                        <p class="stat-value">${ataque}</p>
                    </div>
                    <div class="stat">
                        <p class="stat-label">Vida (HP)</p>
                        <p class="stat-value">${hp}</p>
                    </div>
                </div>
            </div>
        `;
    });
}

searchInput.addEventListener("input", (e) => {
    const valor = e.target.value.toLowerCase();
    const filtrados = allPokemons.filter(p => p.name.includes(valor));
    render(filtrados);
});

cargarPokedex();

// Lógica del Buscador
searchInput.addEventListener("input", (e) => {
    const valor = e.target.value.toLowerCase();
    const filtrados = allPokemons.filter(p => p.name.includes(valor));
    render(filtrados);
});

cargarPokedex();