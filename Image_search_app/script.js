const apiKey = 'I3bRpuwSVRnfVS9o7RbsdI2xsIPA4dgQestRnN4oo5rDz1y2LPH7VH5x';
const endpoint = 'https://api.pexels.com/v1/curated';
const searchEndpoint = 'https://api.pexels.com/v1/search';

let dados;

async function fetchData(url) {
  try {
    const response = await fetch(url, {
      headers: {
        Authorization: apiKey,
      },
    });

    dados = await response.json();

    return dados;
  } catch (error) {
    console.error('Erro ao fazer a requisição:', error);
  }
}

async function searchImages(query) {
  const url = `${searchEndpoint}?query=${encodeURIComponent(query)}`;

  return fetchData(url);
}

async function usarDadosArmazenados(data) {
  const gallery = document.getElementById('teste');
  gallery.innerHTML = '';

  if (data) {
    data.photos.forEach(item =>
      gallery.innerHTML += `
        <a class="gallery-item" href="${item.url}">
          <img src="${item.src.medium}" alt="${item.alt}">
          <span class="overlay">
            <h2>${item.photographer}</h2>
          </span>
        </a>
      `
    );
  } else {
    console.log('Dados não disponíveis. Chame fetchData primeiro.');
  }
}

document.addEventListener('DOMContentLoaded', function () {
  const searchForm = document.getElementById('searchForm');
  const searchInput = document.getElementById('searchInput');

  searchForm.addEventListener('submit', function (event) {
    event.preventDefault();

    const searchTerm = searchInput.value.trim();

    if (searchTerm !== '') {
      searchImages(searchTerm)
        .then(data => {
          usarDadosArmazenados(data);
        })
        .catch(error => {
          console.error('Erro ao pesquisar imagens:', error);
        });
    }
  });

  fetchData(endpoint).then(data => {
    usarDadosArmazenados(data);
  });
});
