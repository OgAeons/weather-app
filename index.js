const apiKey = "c457c51fa8f91dff8bc73003c8254ff4"
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q="
const search = document.querySelector(".search input")
const button = document.querySelector(".search button")
const weather = document.querySelector(".weather-icon")

button.addEventListener("click", ()=>{
    checkWeather(search.value)
})

async function checkWeather(city){
    const response = await fetch(apiUrl + city + "&appid=" + apiKey)
    var data = await response.json()

    // console.log(data)

    document.querySelector(".city").innerHTML = data.name
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C"
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%"
    document.querySelector(".wind").innerHTML = data.wind.speed + " km/hr"

    if(data.weather[0].main == 'Clear')
        weather.src = './images/clear.png'
    else if(data.weather[0].main == 'Clouds')
        weather.src = './images/clouds.png'
    else if(data.weather[0].main == 'Drizzle')
        weather.src = './images/drizzle.png'
    else if(data.weather[0].main == 'Mist')
        weather.src = './images/mist.png'
    else if(data.weather[0].main == 'Rain')
        weather.src = './images/rain.png'
    else if(data.weather[0].main == 'Snow')
        weather.src = './images/snow.png'
    else if(data.weather[0].main == 'Thunder')
        weather.src = './images/thunder.png'
    else if(data.weather[0].main == 'Thunderstorm')
        weather.src = './images/thunderstorm.png'

    document.querySelector(".weather").style.display = "block"
}