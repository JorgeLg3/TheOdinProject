let darkMode = false;
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
    const time = data.dt;
    const timezone = data.timezone;

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
        main,
        time,
        timezone,
    }
}

function displayData(data){
    data.then(function(response){
        const temp = document.querySelector('.temp');
        temp.textContent = Math.round((response.actualTemp-273.15)) + '°C';
        const min = document.querySelector('.min');
        min.textContent = Math.round((response.min-273.15)) + '°C';
        const max = document.querySelector('.max');
        max.textContent = Math.round((response.max-273.15)) + '°C';
        const wind = document.querySelector('.wind');
        wind.textContent = Math.round(response.wind*3600/1000) + 'km/h';
        const humidity = document.querySelector('.humidity');
        humidity.textContent = 'HR: ' + response.humidity + '%';
        const description = document.querySelector('.description');
        description.textContent = response.description;
        
        const city = document.querySelector('.city');
        city.textContent = `${response.place}, ${response.country}`;
        const time = document.querySelector('.time');
        const timestamp = processUnixTime(response.time, response.timezone);
        time.textContent = `${timestamp.hours.substr(-2)}:${timestamp.minutes.substr(-2)}:${timestamp.minutes.substr(-2)}`;
        
        const body = document.querySelector('body');
        if(timestamp.hours < 7 || timestamp.hours > 21){
            darkMode = true;
            body.classList.add('dark-mode');
        }
        else {
            darkMode = false;
            body.classList.remove('dark-mode');
        }

        const img = document.querySelector('.img');
        img.style.cssText = `background-image: url(${getIcon(response.main)})`;
    })
}

function getIcon(main){
    let path = './imgs/day-icons/';
    if(darkMode){
        path = './imgs/night-icons/';
    }
    let file = '';
    switch(main){
        case 'Clouds':
            file = 'cloudy.png';
        break;
        case 'Clear':
            file = 'clear.png';
        break;
        case 'Snow':
            file = 'snow.png';
        break;
        case 'Rain':
            file = 'heavyrain.png';
        break;
        case 'Drizzle':
            file = 'modrain.png';
        break;
        case 'Thunderstorm':
            file = 'thunder.png';
        break;
        default:
            file = 'clear.png';
    }
    return path + file;
}

function processUnixTime(unix, timezone){
    const timeData = new Date(unix * 1000);
    const hours = "0" + (timeData.getUTCHours() + timezone/3600)%24;
    const minutes = "0" + timeData.getMinutes();
    const seconds = "0" + timeData.getSeconds();
    const day = "0" + timeData.getDay();
    const month = "0" + timeData.getMonth();

    return{
        month,
        day,
        hours,
        minutes,
        seconds
    };

}