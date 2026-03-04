// obtenerClima.js
export async function ObtenerClima(city) {
    const apiKey = `2f95eeafcfc64918ec440582885afd1c`; // Tu nueva clave API
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    try {
        const response = await fetch(apiUrl);
        if (!response.ok) throw new Error("Ciudad no encontrada");
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Error al obtener el clima:", error);
        return null;
    }
}

export function ObtenerImagen(iconCodigo) {
    if (!iconCodigo) return null;
    // Usamos la versión @4x para mejor resolución en el diseño moderno
    return `https://openweathermap.org/img/wn/${iconCodigo}@4x.png`;
}