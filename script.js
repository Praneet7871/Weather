const apiurl =
  "https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";
const id = "e9018bba7b6e31ec72f8ee4e5d621082";
const searchbox = document.querySelector(".search input");
const searchbtn = document.querySelector(".search button img");
const clouds = document.querySelector(".temp img");
async function checkweather(city) {
 
    const response = await fetch(apiurl + city + `&appid=${id}`);

    if(response.status== 404){
        document.querySelector(".temp h3").innerHTML="city not available"
        clouds.src="/assets/404.png"
        clouds.style.filter="invert(100%)"
        document.querySelector(".wi h2").innerHTML = undefined
        document.querySelector(".hi h2").innerHTML = undefined
        document.querySelector(".temp h1").innerHTML = undefined


    }
    else{
       var data = await response.json();


 
 
document.querySelector(".temp h3").innerHTML = data.name;
  let temp = (document.querySelector(".temp h1").innerHTML =
    Math.round(data.main.temp) + "°C");
  let humid = (document.querySelector(".hi h2").innerHTML =
    data.main.humidity + "%");
  let wind = (document.querySelector(".wi h2").innerHTML =
    data.wind.speed + "km/h");
 clouds.style.filter="invert(0%)"
 
    if (data.weather[0].main == "Haze") {
    clouds.src = "assets/clouds.png";
  } else if (data.weather[0].main == "Clear") {
    clouds.src = "assets/clear.png";
  } else if (data.weather[0].main == "Rain") {
    clouds.src = "assets/rain.png";
  } else if (data.weather[0].main == "Drizzle") {
    clouds.src = "assets/drizzld.png";
  } else if (data.weather[0].main == "Mist") {
    clouds.src = "assets/mist.png";
  }  
    }

 
}

searchbtn.addEventListener("click", (e) => {
  checkweather(searchbox.value);
});

searchbox.addEventListener("keydown",(e)=>{
    if(e.key=="Enter"){
        checkweather(searchbox.value);
    }
})

