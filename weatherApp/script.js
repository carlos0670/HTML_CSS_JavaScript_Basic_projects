document.addEventListener('DOMContentLoaded', function () {
    document.querySelector('form').addEventListener('submit', function (e) {
        e.preventDefault();

        const cityName = document.getElementById('city-input').value;
        const apiKey = '123ddb1a944d0c039f9e3f30792750b2';

        fetch(`http://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric`)
            .then(response => response.json())
            .then(data => {
                updateWeather(data);
            })
            .catch(error => {
                console.error('Error fetching weather data:', error);
                alert('Error');
            });
    });
});

function updateWeather(data) {
    const iconElement = document.querySelector('.icon img');
    const temperatureElement = document.querySelector('.temperature');
    const descriptionElement = document.querySelector('.description');
    const feelsElement = document.getElementById('feels');
    const humidityElement = document.getElementById('humidity');
    const windElement = document.getElementById('wind');

    iconElement.setAttribute('src', `http://openweathermap.org/img/wn/${data.weather[0].icon}.png`);
    temperatureElement.innerText = `${data.main.temp}ºC`;
    descriptionElement.innerText = data.weather[0].description;
    feelsElement.innerText = `Feels Like: ${Math.round(data.main.feels_like)}ºC`;
    humidityElement.innerText = `Humidity: ${data.main.humidity}%`;
    windElement.innerText = `Wind Speed: ${data.wind.speed} m/s`;
}
