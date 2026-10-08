

const url =
    "https://api.open-meteo.com/v1/forecast?latitude=53.35&longitude=-6.26&current=temperature_2m,weather_code";
    function describeWeather(weatherCode){
        if (weatherCode === 0) {
    return "☀️";
} else if (weatherCode <= 3) {
    return  "🌤️";
} else if (weatherCode <= 48) {
    return  "🌫️";
} else if (weatherCode <= 67) {
    return  "🌧️";
} else if (weatherCode <= 77) {
    return  "❄️";
} else if (weatherCode <= 82) {
    return  "🌦️";
} else {
    return  "⛈️";
}
    }
    axios.get(url)
    .then(response => {
     const temperatureElement = document.getElementById("temperature");
     const city = document.getElementById("city");
     const weatherIcon = document.getElementById("weather-icon");
         const temperature = response.data.current.temperature_2m;
         console.log(temperature);
         const weatherCode = response.data.current.weather_code;

         const emoji = describeWeather(weatherCode);
         city.textContent = "Dublin";
         temperatureElement.textContent = `${temperature} C`;
         weatherIcon.textContent = emoji;
    }) 
    .catch(error => {
        console.log(error);   
     });