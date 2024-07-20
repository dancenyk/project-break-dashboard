const cityCountryCont = document.getElementById("cityCountry")
const currentWeatherCont = document.getElementById("currentWeather")
const forecastWeatherCont = document.getElementById("forecastWeather")

// let fechaYhora = data.forecast.forecastday[0].hour[5].time
//let hora = fechaYhora.slice(11)
//console.log(hora)

let cityChoose = "Madrid"

const urlForecast = `http://api.weatherapi.com/v1/forecast.json?key=8b275aee080f4909832145205241907&q=${cityChoose}&aqi=no`

const getData = async () => {
    try{
        const response = await fetch(urlForecast)
        const data = await response.json();
        console.log(data)
        console.log(data.forecast.forecastday[0].hour)
       
        //intentar hacerlo con destructuring 
        let city = data.location.name
        let country = data.location.country
        let condition = data.current.condition.text
        let icon = data.current.condition.icon
        let temp = data.current.temp_c
        let precipitaciones = data.current.precip_in
        let humedad = data.current.humidity
        let viento = data.current.wind_kph

        let templateCityCountry = `
        <p> ${city} / ${country} </p> 
        <p>${condition}</p> 
        `
        cityCountryCont.insertAdjacentHTML("beforeend", templateCityCountry)
        
        let templateCurrentWeather = `
        <div> <img src="https:${icon}" alt="weather"></div>
        <div id="temperature"> 
            <span>${temp}°C</span>
            <img id="thermo" src="../img/thermometer.svg" alt="weather"
        </div>
        <div id="parameters"> 
            <p>Precipitaciones: ${precipitaciones}%</p>
            <p>Humedad: ${humedad}%</p>
            <p>Viento: ${viento}km/h</p>
        </div>
        `
        currentWeatherCont.insertAdjacentHTML("beforeend", templateCurrentWeather)

        return data

    }catch(error){
        console.log('error al obtener los datos', error);
    }
}; 

getData().then(data => {
  let arrPrevision = data.forecast.forecastday[0].hour

    for(let i =0; i<arrPrevision.length; i++){

        let template = `
       <div id="prevision">
       <p>${arrPrevision[i].time.slice(11)}</p>
       <img src=${arrPrevision[i].condition.icon} />
        <p>${arrPrevision[i].temp_c} °C</p>
        </div>
      `
        forecastWeatherCont.insertAdjacentHTML("beforeend", template)
    }
});



