const getWeather = async (cityIp) => {
    try {
        document.querySelector('.loading').style.display = 'block';

        const response = await fetch(`http://api.weatherapi.com/v1/forecast.json?key=bc82bda4a982434d812130506230708&q=${cityIp ?? 'auto:ip'}&days=5`);
        if (response.ok) {
            const data = await response.json();
            console.log(data)

            const weatherModule = document.querySelector('.module__weather').cloneNode(true);
            weatherModule.removeAttribute('hidden');
            weatherModule.querySelector('.city__name').textContent = data.location.name;
            weatherModule.querySelector('.temperature__value').textContent = data.current.temp_c;
            weatherModule.querySelector('.pressure__value').textContent = `${data.current.pressure_mb} hPa`;
            weatherModule.querySelector('.humidity__value').textContent = `${data.current.humidity}%`;
            weatherModule.querySelector('.wind-speed__value').textContent = `${Math.floor(data.current.wind_kph * 1000 / 3600)} m/s`;
            weatherModule.querySelectorAll('.weather__forecast li').forEach((el, index) => {
                el.querySelector('.day').textContent = data.forecast.forecastday[index].date;
                el.querySelector('.temperature__value').textContent = data.forecast.forecastday[index].day.avgtemp_c;
            })

            weatherModule.querySelector('.module__weather button.btn--close').addEventListener('click', (event) => {
                event.preventDefault();
                weatherModule.remove();
            });

            document.querySelector('#app').appendChild(weatherModule);
            document.querySelector('.loading').style.display = 'none';
        } else {
            throw Error(response.status)
        }
    } catch (err) {
        console.error(err)
    }
}

getWeather()

// show form
document.querySelector('#add-city').addEventListener('click', (event) => {
    event.preventDefault();

    document.querySelector('.module__form').hidden = false;
});

// hide form
document.querySelector('.module__form button.btn--close').addEventListener('click', (event) => {
    event.preventDefault();

    document.querySelector('.module__form').hidden = true;
});

// add new forecast
document.querySelector('button[type="submit"]').addEventListener('click', (event) => {
    event.preventDefault();
    const cityName = document.querySelector('input#search').value;

    if (cityName) {
        getWeather(cityName)
    }
});
