
displayData(getData('trondheim')); //default value

const searchBtn = document.querySelector('#search-button');
const form = document.querySelector('form');
form.addEventListener('submit', (e) => {
    e.preventDefault();
});
searchBtn.addEventListener('click', submitWeather);

function submitWeather(e){
    const input = document.querySelector('#location');
    const location = input.value;
    displayData(getData(location));
}

 //CONVENTIONAL VERSION
/*function apiRequest(location){
    fetch('https://api.openweathermap.org/data/2.5/weather?q=London&APPID=bcc19efb154f39f58361cf61886628fd', {
        mode: 'cors'
    })
    .then(function(response){
        return response.json();
    })
    .then(function(response) {
        return response;
    });
}*/

// ASYNC VERSION

async function getData(location){
    try {
        let response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&APPID=bcc19efb154f39f58361cf61886628fd`, {
            mode: 'cors'
        });
        let catData = await response.json();
        console.log(catData);
        return processData(catData);
    } catch (error){
        console.log(error);
    }
}

function processData(data){
    const place = data.name;
    const country = data.sys.country;
    const feelTemp = data.main.feels_like;
    const actualTemp = data.main.temp;
    const humidity = data.main.humidity;
    const wind = data.wind.speed;
    const lat = data.coord.lat;
    const lon = data.coord.lon;
    const min = data.main.temp_min;
    const max = data.main.temp_max;
    const description = data.weather[0].description;
    const main = data.weather[0].main;

    return {
        place,
        feelTemp,
        actualTemp,
        humidity,
        wind,
        country,
        lat,
        lon,
        min,
        max,
        description,
        main
    }
}

function displayData(data){
    data.then(function(response){
        const temp = document.querySelector('.temp');
        temp.textContent = Math.round((response.actualTemp-273.15)*10)/10 + '°C';
        const min = document.querySelector('.min');
        min.textContent = Math.round((response.min-273.15)*10)/10 + '°C';
        const max = document.querySelector('.max');
        max.textContent = Math.round((response.max-273.15)*10)/10 + '°C';
        const wind = document.querySelector('.wind');
        wind.textContent = response.wind + 'km/h';
        const humidity = document.querySelector('.humidity');
        humidity.textContent = response.humidity + '%';
        const description = document.querySelector('.description');
        description.textContent = response.description;
        const img = document.querySelector('.img');
        img.style.cssText = `background-image: url(./weather-icons-png/${getIcon(response.main)})`;
        const city = document.querySelector('.city');
        city.textContent = `${response.place}, ${response.country}`;
        /*const coords = document.querySelector('.coords');
        coords.textContent = `${response.lat}, ${response.lon}`;*/
    })
}

function getIcon(main){
    let file = '';
    switch(main){
        case 'Clouds':
            file = 'Cloudy.png';
        break;
        case 'Clear':
            file = 'Sunny.png';
        break;
        case 'Snow':
            file = 'OccLightSnow.png';
        break;
        case 'Rain':
            file = 'HeavyRain.png';
        break;
        case 'Drizzle':
            file = 'ModRainSwrsDay.png';
        break;
        case 'Thunderstorm':
            file = 'CloudRainThunder.png';
        break;
        default:
            file = 'Sunny.png';
    }
    return file;
}

