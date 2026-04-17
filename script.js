//script,js
document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.getElementById('search-input');
    const searchBtn = document.getElementById('search-btn');

    // Función para simular el manejo de la b[usqueda
    const performSearch = () => {
        const query = searchInput.value.trim();
        if (query) {
            alert(`Simulando búsqueda en Google para: "${query}"`);
            searchInput.value = '';
        } else {
            alert("por favor ingresa un término de búsqueda");
        }
    };

    // Evento al  hacer click
    searchBtn.addEventListener('click', performSearch);

    // Evento al presionar Enter
    searchInput.addEventListener('keypress', (event) => {
        if (event.key === 'Enter') {
            performSearch();
        }
    });
});
