// Esta es la función para cargar los datos de las skins desde tu fuente de datos
function loadSkinsFromAPI() {
    // Realiza la solicitud para obtener los datos de las skins (puedes usar fetch o axios)
    // Cuando obtengas los datos, llama a renderSkins para mostrarlos.
    fetch('skins.json')
        .then((response) => response.json())
        .then((skinsData) => {
            // Llama a la función renderSkins con los datos de las skins
            renderSkins(skinsData);
        })
        .catch((error) => {
            console.error('Error al cargar los datos de las skins:', error);
        });
}

// Esta es la función para mostrar las skins en la página
function renderSkins(skinsData) {
    const skinsList = document.querySelector('.skins-list');

    // Filtra las skins solo para la categoría "Pistolas"
    const pistolSkins = skinsData.filter((skin) => skin.category.name === "Pistolas");
    

    // Recorre las skins de pistolas y genera el HTML para cada una
    pistolSkins.forEach((skin) => {
        const skinItem = document.createElement('div');
        skinItem.classList.add('skin-item');

        // Construye la ruta de la imagen relativa
        const imageName = `${skin.weapon.id}_${skin.pattern.id}_light.png`;
        const imagePath = `public/images/econ/default_generated/${imageName}`;

        // Agrega la imagen de la skin
        const skinImage = document.createElement('img');
        skinImage.src = imagePath;

        // Agrega el nombre y otros detalles de la skin
        const skinName = document.createElement('h3');
        skinName.textContent = skin.name;
        const skinDescription = document.createElement('p');
        skinDescription.textContent = skin.description;

        // Agrega la imagen, el nombre y la descripción al elemento de skin
        skinItem.appendChild(skinImage);
        skinItem.appendChild(skinName);
        skinItem.appendChild(skinDescription);

        // Agrega el elemento de skin a la lista
        skinsList.appendChild(skinItem);
    });
}

// Llama a la función para cargar los datos de las skins al cargar la página
window.addEventListener('load', () => {
    loadSkinsFromAPI();
});
