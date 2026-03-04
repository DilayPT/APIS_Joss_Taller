const galeria = document.querySelector("#galeria");
const btnCargarMas = document.querySelector("#cargar-mas-btn");
const btnLimpiar = document.querySelector("#limpiar-btn");
const fotosCount = document.querySelector("#fotos-count");

let offset = 0;

function obtenerDatos() {
    const url = "https://jsonplaceholder.typicode.com/photos";
    fetch(url)
        .then((dato) => dato.json())
        .then((fotos) => {
            const nuevasFotos = fotos.slice(offset, offset + 10);
            nuevasFotos.forEach((foto) => {
                galeria.innerHTML += `
                    <div class="foto-card">
                        <img src="${foto.url}" class="foto-img" alt="img">
                        <div class="foto-info">
                            <h5 class="foto-titulo">${foto.title}</h5>
                            <p class="text-info small">ID: #${foto.id}</p>
                        </div>
                    </div>
                `;
            });
            offset += 10;
            actualizarContador(10);
        });
}

function actualizarContador(n) {
    let actual = parseInt(localStorage.getItem("total_vistas") || 0);
    actual += n;
    localStorage.setItem("total_vistas", actual);
    fotosCount.innerHTML = actual;
}

btnCargarMas.addEventListener("click", obtenerDatos);
btnLimpiar.addEventListener("click", () => {
    galeria.innerHTML = "";
    localStorage.setItem("total_vistas", 0);
    fotosCount.innerHTML = "0";
    offset = 0;
});