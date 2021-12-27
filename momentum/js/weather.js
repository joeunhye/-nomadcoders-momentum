const API_KEY = "78e38bb13350e577edf378b7319831c0";

function onGeoOk(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    console.log(url)
    fetch(url)
    .then((response) => response.json())
    .then((data) => {
        console.log(data);
        const weatherIcon = document.querySelector('#top-menu .weather-icon');
        const weather = document.querySelector('#top-menu .weather');
        const temp = document.querySelector('#top-menu .temp');
        const city = document.querySelector('#top-menu .city');
        temp.innerText = `${data.main.temp}°C`;
        weather.innerText = `${data.weather[0].main}`;
        city.innerText = `🌏 ${data.name}`;

        if(data.weather[0].main == 'Rain') {
            weatherIcon.innerText = '🌧'
        }else if(data.weather[0].main == 'Thunderstorm') {
            weatherIcon.innerText = '🌩'
        }else if(data.weather[0].main == 'Drizzle') {
            weatherIcon.innerText = '🌦'
        }else if(data.weather[0].main == 'Snow') {
            weatherIcon.innerText = '🌨'
        }else if(data.weather[0].main == 'Atmosphere') {
            weatherIcon.innerText = '🌫'
        }else if(data.weather[0].main == 'Clear') {
            weatherIcon.innerText = '☀'
        }else if(data.weather[0].main == 'Clouds') {
            weatherIcon.innerText = '☁'
        }
    });
}
function onGeoError() {
    alert("can't find you");
}
navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);