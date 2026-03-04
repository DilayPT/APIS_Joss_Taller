// mainWeather.js
import { ObtenerClima, ObtenerImagen } from "./obtenerClima.js";

const searchINPUT = document.querySelector("#ciudad-input");
const searchBTN = document.querySelector("#buscar-btn");

searchBTN.addEventListener("click", initAPP);

searchINPUT.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        initAPP();
    }
});

async function initAPP() {
    const ciudad = searchINPUT.value.trim();
    if (!ciudad) return;

    const clima = await ObtenerClima(ciudad);

    if (clima) {
        // Actualizar Textos
        document.querySelector("#temperatura").textContent = `${Math.round(clima.main.temp)}°C`;
        document.querySelector("#tiempo-atmosferico").textContent = clima.weather[0].description;
        document.querySelector("#ciudad-nombre").textContent = clima.name;
        document.querySelector("#humedad").textContent = `${clima.main.humidity}%`;
        document.querySelector("#viento").textContent = `${clima.wind.speed} km/h`;

        // Actualizar Imagen
        const urlImagen = ObtenerImagen(clima.weather[0].icon);
        document.querySelector("#clima-icono").src = urlImagen;
        
        // Limpiar input
        searchINPUT.value = "";
    } else {
        alert("No se pudo encontrar la ciudad. Intenta de nuevo.");
    }
}