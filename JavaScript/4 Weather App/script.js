const userTab = document.querySelector('[data-user-weather]');
const searchTab = document.querySelector('[data-search-weather]');
const userContainer = document.querySelector('.weather-container');
const grantAccessLocation = document.querySelector('.grant-location-container');
const errorPage = document.querySelector('[data-error]');
const formContainer = document.querySelector('.form-container');
const loadingScreen = document.querySelector('.loading-container');
const userInfoContainer = document.querySelector('.user-info-container');

let currentTab = userTab;
const API_KEY = "d1845658f92b31c64bd94f06f7188c9c" ;
currentTab.classList.add("current-tab");
getFromSessionStorage();
errorPage.classList.remove('active');

function switchTab(clickedTab){
    if(clickedTab != currentTab){
        currentTab.classList.remove("current-tab");
        currentTab = clickedTab;
        currentTab.classList.add("current-tab");

        // search form container is invisible then make it visible
        if(!formContainer.classList.contains('active')){
            userInfoContainer.classList.remove('active');
            grantAccessLocation.classList.remove('active');
            formContainer.classList.add('active');
            errorPage.classList.remove('active');
        }
        else{
            // search form container is visible then make it invisible
            formContainer.classList.remove('active');
            userInfoContainer.classList.remove('active');
            errorPage.classList.remove('active');
            // now we are in 'your weather' tab, we have to display weather
            // so check local storage first for co-ordinates , if we have saved them there
            getFromSessionStorage();
        }
    }
}

userTab.addEventListener('click', () => {
    // pass clicked tab as input parameter
    switchTab(userTab);
});

searchTab.addEventListener('click', () => {
    // pass clicked tab as input parameter
    switchTab(searchTab);
});

// check if co-ordinates are present in session storage
function getFromSessionStorage(){
    const localCoordinates = sessionStorage.getItem("user-coordinates");
    if(!localCoordinates){
        // local co-ordinates are not saved 
        grantAccessLocation.classList.add('active');
        loadingScreen.classList.remove('active');
        userInfoContainer.classList.remove('active');
    }
    else{
        const coordinates = JSON.parse(localCoordinates);
        fetchWeatherInfo(coordinates);
    }
}

async function fetchWeatherInfo(coordinates){
    const {lat,lon} = coordinates;
    console.log(lat,lon);
    // make grant location container invisible
    grantAccessLocation.classList.remove('active');
    // make loader visible
    loadingScreen.classList.add('active');

    // API call
    try{
        const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`);

        const data = await res.json();
        console.log(data);
        
        loadingScreen.classList.remove('active');
        userInfoContainer.classList.add('active');
        renderWeatherInfo(data);
    }
    catch(err){
        loadingScreen.classList.remove('active');
    }
}

function renderWeatherInfo(data){
    // fetch all required elements
    const cityName = document.querySelector('[data-city-name]');
    const countryIcon = document.querySelector('[data-country-icon]');
    const weatherDesc = document.querySelector('[data-weather-Desc]');
    const weatherIcon = document.querySelector('[data-weather-icon]');
    const temperature = document.querySelector('[data-temp]');
    const windSpeed = document.querySelector('[data-windspeed]');
    const humidity = document.querySelector('[data-humidity]');
    const cloudiness = document.querySelector('[data-cloud]');

    if(data?.name == undefined){
        userContainer.classList.remove('active');
        loadingScreen.classList.remove('active');
        errorPage.classList.add('active');
    }
    else{
        loadingScreen.classList.remove('active');
        userInfoContainer.classList.add('active');
        errorPage.classList.remove('active');
        // fetch values from weatherInfo object and put it UI elements 
        cityName.innerText = data?.name;
        let country = data?.sys?.country;
        let res = country.toLowerCase();
        countryIcon.innerHTML = `<img src="https://flagcdn.com/144x108/${res}.png" alt=""></img>`;
        weatherDesc.innerText = data?.weather?.[0]?.description;
        weatherIcon.innerHTML = `<img src="http://openweathermap.org/img/w/${data?.weather?.[0]?.icon}.png" alt=""></img>`
        // k - 273 = °C
        temperature.innerText = (data?.main?.temp - 273).toPrecision(4) + ' °C';
        windSpeed.innerText = data?.wind?.speed + ' m/s';
        humidity.innerText = data?.main?.humidity + ' %';
        cloudiness.innerText = data?.clouds?.all + ' %';
    }
}

function getLoaction(){
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(showPosition);
    }   
    else{
        alert("Location Deined"); 
    }
}

function showPosition(position){
    
    const userCoords = {
        lat : position.coords.latitude,
        lon : position.coords.longitude
    }

    sessionStorage.setItem('user-coordinates', JSON.stringify(userCoords));
    fetchWeatherInfo(userCoords); 
}

const grantAccessBtn = document.querySelector('[data-grant-access]');
grantAccessBtn.addEventListener('click' , getLoaction);

let searchInput = document.querySelector('[data-search-input]');
formContainer.addEventListener('submit' , (e) => {
    e.preventDefault();

    if(searchInput.value == "") return ;

    fetchSearchWeatherInfo(searchInput.value);
    searchInput.value = "";
});

async function fetchSearchWeatherInfo(city){
    loadingScreen.classList.add('active');
    errorPage.classList.remove('active');
    userInfoContainer.classList.remove('active');
    grantAccessLocation.classList.remove('active');
    try{
        const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`);

        const data = await res.json();
        renderWeatherInfo(data);
    }
    catch(err){
        loadingScreen.classList.remove('active');
        alert('City Not Found');
    }
}
