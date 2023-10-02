const button = document.getElementById("search")
const input = document.getElementById("city")


const cityName = document.getElementById('city-name')
const cityReg = document.getElementById('city-reg')
const cityCountry = document.getElementById('city-country')
const cityTime = document.getElementById('city-time')
const cityTemp = document.getElementById('city-temp')
const cityhumidity = document.getElementById('city-humi')
async function getData(city) {
    const promise = await fetch(
        `http://api.weatherapi.com/v1/current.json?key=bb038bbf882c420c9f0102353232809&q=${city}&aqi=yes`
        );
    
    return await promise.json()

}


button.addEventListener('click', async () => {
   const value = input.value;
   const result = await getData(value);
   console.log(result)
   cityName.innerText = result.location.name; 
   cityReg.innerText = result.location.region; 
   cityCountry.innerText =  result.location.country;
   cityTime.innerText = result.location.localtime;
   cityTemp.innerText = result.current.temp_c;
   cityhumidity.innerText = result.current.humidity;
});

//http://api.weatherapi.com/v1/current.json?key=bb038bbf882c420c9f0102353232809&q=London&aqi=yes
