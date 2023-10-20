// Esta es la función para mostrar las skins en la página
function renderSkins(skinsData, category) {
    const skinsList = document.querySelector('.skins-list');
    
    // Filtra las skins por categoría
    const filteredSkins = skinsData.filter((skin) => skin.category.name === category);

    // Recorre las skins y genera el HTML para cada una
    filteredSkins.forEach((skin) => {
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

