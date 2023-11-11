const apiKey = 'I3bRpuwSVRnfVS9o7RbsdI2xsIPA4dgQestRnN4oo5rDz1y2LPH7VH5x';
const endpoint = 'https://api.pexels.com/v1/curated';

fetch(endpoint, {
  headers: {
    Authorization: apiKey,
  },
})
  .then(response => response.json())
  .then(data => {

    console.log(data);
  })
  .catch(error => {

    console.error('Erro ao fazer a requisição:', error);
  });

