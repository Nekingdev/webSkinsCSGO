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
  
//---------------------------AGENTES------------------------------------------------------------


  // Función para cargar datos de los agentes desde el archivo agents.json
function loadAgentsFromJSON() {
  fetch('agents.json') // Reemplaza 'agents.json' con la ruta correcta a tu archivo JSON de agentes
      .then((response) => response.json())
      .then((agentsData) => {
          // Llama a la función para mostrar los agentes
          renderAgents(agentsData);
      })
      .catch((error) => {
          console.error('Error al cargar los datos de los agentes:', error);
      });
}

// Función para mostrar los agentes en la página
function renderAgents(agentsData) {
  const agentsList = document.querySelector('.agents-list'); // Reemplaza con el selector correcto

  // Recorre los datos de los agentes y genera el HTML para cada uno
  agentsData.forEach((agent) => {
      const agentItem = document.createElement('div');
      agentItem.classList.add('agent-item');

      // Agrega la imagen del agente
      const agentImage = document.createElement('img');
      agentImage.src = agent.image; // Reemplaza con el campo correcto en tus datos

      // Agrega el nombre y otros detalles del agente
      const agentName = document.createElement('h3');
      agentName.textContent = agent.name;
      const agentDescription = document.createElement('p');
      agentDescription.innerHTML = agent.description; // Usamos innerHTML para procesar las etiquetas HTML

      // Agrega el imagen, el nombre y la descripción al elemento del agente
      agentItem.appendChild(agentImage);
      agentItem.appendChild(agentName);
      agentItem.appendChild(agentDescription);

      // Agrega el elemento del agente a la lista de agentes
      agentsList.appendChild(agentItem);
  });
}

// Llama a la función para cargar los datos de los agentes al cargar la página
window.addEventListener('load', () => {
  loadAgentsFromJSON();
});

// Función para cargar los datos de los stickers desde tu fuente de datos
function loadStickersFromAPI() {
  // Realiza la solicitud para obtener los datos de los stickers (puedes usar fetch o axios)
  fetch('stickers.json') // Asegúrate de que el archivo JSON tenga la estructura adecuada
      .then((response) => response.json())
      .then((stickersData) => {
          // Llama a la función renderStickers con los datos de los stickers
          renderStickers(stickersData);
      })
      .catch((error) => {
          console.error('Error al cargar los datos de los stickers:', error);
      });
}


//---------------------------stickers--------------------------------------------------- 

// Esta es la función para cargar los datos de las pegatinas desde tu fuente de datos
function loadStickersFromAPI() {
  // Realiza la solicitud para obtener los datos de las pegatinas (puedes usar fetch o axios)
  // Cuando obtengas los datos, llama a renderStickers para mostrarlos.
  fetch('stickers.json')
      .then((response) => response.json())
      .then((stickersData) => {
          // Llama a la función renderStickers con los datos de las pegatinas
          renderStickers(stickersData);
      })
      .catch((error) => {
          console.error('Error al cargar los datos de las pegatinas:', error);
      });
}

// Esta es la función para mostrar las pegatinas en la página
function renderStickers(stickersData) {
  const stickersList = document.querySelector('.stickers-list');

  stickersData.forEach((sticker) => {
      // Crea un elemento de contenedor para la pegatina
      const stickerItem = document.createElement('div');
      stickerItem.classList.add('sticker-item');

      // Crea un elemento de imagen para la pegatina
      const stickerImage = document.createElement('img');
      stickerImage.src = sticker.image;

      // Crea un elemento para el nombre de la pegatina
      const stickerName = document.createElement('h3');
      stickerName.textContent = sticker.name;

      // Crea un elemento para la descripción de la pegatina
      const stickerDescription = document.createElement('p');
      stickerDescription.textContent = sticker.description;

      // Agrega la imagen, el nombre y la descripción al elemento de pegatina
      stickerItem.appendChild(stickerImage);
      stickerItem.appendChild(stickerName);
      stickerItem.appendChild(stickerDescription);

      // Agrega el elemento de pegatina a la lista
      stickersList.appendChild(stickerItem);
  });
}

// Llama a la función para cargar los datos de las pegatinas al cargar la página
window.addEventListener('load', () => {
  loadStickersFromAPI();
});


//--------------------------------------------------------------------------------
// Función para cargar skins aleatorias desde tu fuente de datos
function loadRandomSkinsFromAPI() {
  // Realiza la solicitud para obtener los datos de todas las skins (puedes usar fetch o axios)
  // Cuando obtengas los datos, elige un número específico de skins de manera aleatoria.
  // Luego, llama a renderRandomSkins para mostrar las skins aleatorias.
  fetch('skins.json')
      .then((response) => response.json())
      .then((skinsData) => {
          const numberOfSkinsToDisplay = 5; // Puedes ajustar este número según tus necesidades
          const randomSkins = getRandomSkins(skinsData, numberOfSkinsToDisplay);
          renderRandomSkins(randomSkins);
      })
      .catch((error) => {
          console.error('Error al cargar los datos de las skins:', error);
      });
}

// Función para seleccionar skins aleatorias
function getRandomSkins(skinsData, number) {
  const randomSkins = [];
  for (let i = 0; i < number; i++) {
    const randomIndex = Math.floor(Math.random() * skinsData.length);
    randomSkins.push(skinsData[randomIndex]);
  }
  return randomSkins;
}

// Función para mostrar las skins aleatorias en el carrusel
function renderRandomSkins(randomSkins) {
  const carousel = document.querySelector('.carousel');

  randomSkins.forEach((skin) => {
      const skinItem = document.createElement('div');
      skinItem.classList.add('carousel-item');

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

      // Agrega la imagen, el nombre y la descripción al elemento del carrusel
      skinItem.appendChild(skinImage);
      skinItem.appendChild(skinName);
      skinItem.appendChild(skinDescription);

      // Agrega el elemento del carrusel al contenedor
      carousel.appendChild(skinItem);
  });
}



//---------------------------buscador------------------------------


// Agrega un evento de escucha al botón de búsqueda
searchButton.addEventListener('click', () => {
  const searchText = searchInput.value.toLowerCase();

  // Filtra las skins y busca una coincidencia exacta en el nombre
  const filteredSkins = skinsData.filter((skin) => {
      return skin.name.toLowerCase() === searchText;
  });

  // Limpia la lista actual
  skinsList.innerHTML = '';

  // Renderiza la skin filtrada (si se encontró una coincidencia)
  if (filteredSkins.length > 0) {
      renderSkins(filteredSkins);
  } else {
      // Si no se encuentra una coincidencia, puedes mostrar un mensaje de "No se encontraron resultados".
      skinsList.innerHTML = '<p>No se encontraron resultados.</p>';
  }
});


  
