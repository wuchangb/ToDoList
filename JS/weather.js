const API_KEY = "afcbe264f06c57f622629ae0e9074529";

function onGeoOk(position){
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    fetch(url).then(Response => Response.json()).then(data => {
        const city =  document.querySelector("#weather span:first-child");
        const weather =  document.querySelector("#weather span:last-child");

        city.innerText = data.name;
        weather.innerText = `${data.weather[0].main}/${data.main.temp}°C`;
    });
 
}
function onGeoErr(){
    alert("I can't find where you are");
}


navigator.geolocation.getCurrentPosition(onGeoOk, onGeoErr);