// Esta es la función para cargar los datos de las skins desde tu fuente de datos
function loadSkinsFromJSON(category) {
    fetch('skins.json') // Reemplaza 'skins.json' con la ruta correcta a tu archivo JSON
      .then((response) => response.json())
      .then((data) => {
        // Llama a la función renderSkins con los datos cargados y la categoría
        renderSkins(data, category); // Asegúrate de que "category" esté definido
      })
      .catch((error) => {
        console.error('Error al cargar los datos de las skins:', error);
      });
  }
  
  // Esta es la función para mostrar las skins en la página
  function renderSkins(skinsData, categoryId) {
    const skinsList = document.querySelector('.skins-list');
  
    // Filtra las skins por categoría utilizando el "id" de la categoría
    const filteredSkins = skinsData.filter((skin) => skin.category.id === categoryId);
  
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
  
      // Agrega el imagen, el nombre y la descripción al elemento de skin
      skinItem.appendChild(skinImage);
      skinItem.appendChild(skinName);
      skinItem.appendChild(skinDescription);
  
      // Agrega el elemento de skin a la lista
      skinsList.appendChild(skinItem);
    });
  }
  
  // Extrae el valor de la categoría del parámetro "category" de la URL
  const urlParams = new URLSearchParams(window.location.search);
  const category = urlParams.get("category");
  
  // Llama a la función loadSkinsFromJSON para cargar los datos de las skins
  if (category) {
    loadSkinsFromJSON(category);
  }
  
  
