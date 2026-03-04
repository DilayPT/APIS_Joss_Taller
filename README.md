# 🚀 Taller de Consumo de APIs - Desarrollo Web Moderno

Este repositorio contiene una serie de proyectos prácticos diseñados para demostrar el consumo de servicios externos (APIs) utilizando **JavaScript moderno (ES6+)**, **CSS3 con enfoque en Glassmorphism** y estructuras de datos dinámicas.

## 🛠️ Proyectos Incluidos

### 1. 🔍 Pokedex Pro (PokemonAPI)
Una enciclopedia Pokémon completa que permite explorar los 151 pokémon originales de Kanto.
* **Funcionalidades:** Buscador en tiempo real por nombre, visualización de tipos, habilidades y estadísticas base (Ataque/HP).
* **Tecnologías:** PokeAPI, CSS Grid responsivo, Async/Await.

### 2. ☁️ Weather Glass-App (OpenWeatherMap)
Aplicación meteorológica con una interfaz elegante y minimalista.
* **Funcionalidades:** Búsqueda por ciudad, visualización de temperatura, humedad, velocidad del viento y estado atmosférico con iconos dinámicos.
* **Tecnologías:** OpenWeather API, Módulos de JS (import/export), Glassmorphism UI.

### 3. 🖼️ Art Gallery (JSONPlaceholder)
Galería de fotos dinámica con persistencia de datos local.
* **Funcionalidades:** Carga infinita de imágenes (de 10 en 10), contador acumulativo de fotos y limpieza de galería.
* **Tecnologías:** JSONPlaceholder API, LocalStorage para persistencia, Bootstrap Icons.

---

## 🎨 Estética y Diseño
El repositorio ha sido actualizado con un estilo visual **Premium Dark**:
* **Glassmorphism:** Uso de `backdrop-filter: blur()` para efectos de cristal esmerilado.
* **Responsividad:** Diseños adaptables a móviles y escritorio mediante **CSS Grid** y **Flexbox**.
* **Tipografía:** Integración de fuentes modernas como *Syne* para títulos y *Inter* para lectura clara.

---

## 🚀 Instalación y Uso

1.  **Clonar el repositorio:**
    ```bash
    git clone [https://github.com/tu-usuario/nombre-del-repo.git](https://github.com/tu-usuario/nombre-del-repo.git)
    ```
2.  **Configuración de la API del Clima:**
    El proyecto utiliza una clave de API para OpenWeatherMap. Puedes encontrarla o actualizarla en el archivo `openWeather/obtenerClima.js`.
3.  **Ejecución:**
    Debido al uso de módulos de JavaScript (`type="module"`), se recomienda abrir los archivos `index.html` utilizando un servidor local (como la extensión **Live Server** de VS Code).

---

## 📂 Estructura del Repositorio
```text
├── galeriaFotos/      # Lógica y estilos de la galería de imágenes
├── openWeather/       # Aplicación del clima con módulos JS
├── pokemonApi/           # Buscador y visualización de Pokémon
└── README.md          # Documentación del proyecto
