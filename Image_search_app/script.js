const apiKey = 'I3bRpuwSVRnfVS9o7RbsdI2xsIPA4dgQestRnN4oo5rDz1y2LPH7VH5x';
const endpoint = 'https://api.pexels.com/v1/curated';

let dados; 

async function fetchData() {
  try {
    const response = await fetch(endpoint, {
      headers: {
        Authorization: apiKey,
      },
    });

    dados = await response.json();

    // Você pode retornar os dados se necessário
    return dados;
  } catch (error) {
    console.error('Erro ao fazer a requisição:', error);
  }
}

async function usarDadosArmazenados() {
  await fetchData();
  const gallery = document.getElementById('teste');
  gallery.innerHTML = '';

  if (dados) {
    console.log(dados.photos);
    dados.photos.forEach(itens =>
      gallery.innerHTML += `
        <a class="gallery-item" href="${itens.url}">
					<img src="${itens.src.medium}" alt="${itens.alt}">
					<span class="overlay">
						<h2>${itens.photographer}</h2>
					</span>
				</a>


      `
     ); 
  
  } else {

    console.log('Dados não disponíveis. Chame fetchData primeiro.');
  }
}

usarDadosArmazenados()

