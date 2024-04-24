let dailyWeatherData = {};

async function getWeatherData() {
    const url = 'https://api.tomorrow.io/v4/weather/forecast?location=42.3478,-71.0466&apikey=';

    const response = await fetch(url);
    const data = await response.json();
    dailyWeatherData = data.timelines.daily;
    dailyWeatherData.forEach(item => {
        console.log(`Time: ${ item.time } -> Average Tempature: ${ item.values.temperatureAvg }`);
    });
}

getWeatherData();
