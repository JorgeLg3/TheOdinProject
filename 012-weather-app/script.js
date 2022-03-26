console.log('Hello world!');

 //CONVENTIONAL VERSION
/*function apiRequest(location){
    fetch('http://api.openweathermap.org/data/2.5/weather?q=London&APPID=bcc19efb154f39f58361cf61886628fd', {
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
        let response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${location}&APPID=bcc19efb154f39f58361cf61886628fd`, {
            mode: 'cors'
        });
        let catData = await response.json();
        console.log(catData);
        return processData(catData);
    } catch (error){
        console.log(error);
    }
}
/*
const processData = (() => {
    const data = (data) => 

    const place = data.name;
    const feelTemp = data.main.feels_like;
    const actualTemp = data.main.temp;
    const humidity = data.main.humidity;
    const wind = data.wind.speed;

    return {
        place,
        feelTemp,
        actualTemp,
        humidity,
        wind
    }
})();*/

function processData(data){
    const place = data.name;
    const feelTemp = data.main.feels_like;
    const actualTemp = data.main.temp;
    const humidity = data.main.humidity;
    const wind = data.wind.speed;

    return {
        place,
        feelTemp,
        actualTemp,
        humidity,
        wind
    }
}

function displayData(data){
    data.then(function(response){
        const card = document.createElement('div');
        card.textContent = Math.round((response.actualTemp-273.15)*10)/10;
        const main = document.querySelector('main');
        main.appendChild(card);
    })
}
const city = 'murcia';
console.log(displayData(getData(city)));

