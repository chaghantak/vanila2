const API_KEY= "f14ad9eacf49779cf4213aec9d85e2cb"

//37.4795091 127.1151263
function geoOk(position){
     const lat= position.coords.latitude
     const lon= position.coords.longitude 
    console.log(lat,lon)
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
   fetch(url)
   .then((res)=>res.json())
   .then((data)=>{
   const weather = document.querySelector("#weather span:first-child")
   const temp = document.querySelector("#weather span:last-child")
   weather.innerText = `Weather:${data.weather[0].main} Location:${data.name}`
   temp.innerText= `Temperature:${Math.round(data.main.temp)}'C`
   
   })
}


function geoErr(){
    alert("can't find you")
}

navigator.geolocation.getCurrentPosition(geoOk,geoErr);