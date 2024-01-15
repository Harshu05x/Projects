const searchBtn = document.querySelector("[data-search-btn]");
const inputBox = document.querySelector("[input-box]");
const loadingScreen = document.querySelector(".loading-container");
const wrapper = document.querySelector(".wrapper");
const alertBox = document.querySelector(".alertMsg");
let userName = "Harshu05x";
let currentMode = "Dark";
let data = {
    "avatar_url":"https://avatars.githubusercontent.com/u/96901785?v=4",
    "bio":"🚀 C/C++ Programmer | Intermediate MERN Stack Web Developer | AI/ML Enthusiast | DSA Wizard💻",
    "blog":"",
    "company":null,
    "created_at":"2021-12-31T05:40:39Z",
    "email":null,
    "events_url":"https://api.github.com/users/Harshu05x/events{/privacy}",
    "followers":1,
    "followers_url":"https://api.github.com/users/Harshu05x/followers",
    "following":2,
    "following_url":"https://api.github.com/users/Harshu05x/following{/other_user}",
    "gists_url":"https://api.github.com/users/Harshu05x/gists{/gist_id}",
    "gravatar_id":"",
    "hireable":null,
    "html_url":"https://github.com/Harshu05x",
    "id":96901785,
    "location":"Pune",
    "login":"Harshu05x",
    "name":"Harshad Madhbhave",
    "node_id":"U_kgDOBcaamQ",
    "organizations_url":"https://api.github.com/users/Harshu05x/orgs",
    "public_gists":0,
    "public_repos":11,
    "received_events_url":"https://api.github.com/users/Harshu05x/received_events",
    "repos_url":"https://api.github.com/users/Harshu05x/repos",
    "site_admin":false,
    "starred_url":"https://api.github.com/users/Harshu05x/starred{/owner}{/repo}",
    "subscriptions_url":"https://api.github.com/users/Harshu05x/subscriptions",
    "twitter_username":null,
    "type":"User",
    "updated_at":"2023-09-22T09:03:01Z",
    "url":"https://api.github.com/users/Harshu05x"
};

fetchDetails(userName);

searchBtn.addEventListener(('click'), () => {
    userName = inputBox.value;
    fetchDetails(userName);
});

async function fetchDetails(userName){
    if(userName === ""){
        showAlert("Enter Username");
        return;
    }
    loadingScreen.classList.add("active");
    wrapper.style.filter = "blur(3px)";
    try{
        const res = await fetch(`https://api.github.com/users/${userName}`);
        data = await res.json();
        loadingScreen.classList.remove("active");
        wrapper.style.filter = "blur(0px)";
        renderInfo(data);
    }
    catch(e){
        showAlert(e);
    }
}


const fullName = document.querySelector(".fullname");
const profilePic = document.querySelector(".profilePic");
const joinedDate = document.querySelector(".joining");
const profileLink = document.querySelector(".profile-link");
const bio = document.querySelector(".bio");
const repos = document.querySelector(".repos");
const following = document.querySelector(".following");
const followers = document.querySelector(".followers");
const loc = document.querySelector(".location");
const mail = document.querySelector(".email");
const tweet = document.querySelector(".twitter");
const comp = document.querySelector(".works-at");

function renderInfo(data){
    inputBox.value = "";
    console.log('====================================');
    console.log(data);
    console.log('====================================');
    if(data.message === "Not Found" || (data.name === null && data.login === null)){
        showAlert("User not Found");
        return;
    }
    else{
        if(data.name === null)
            fullName.innerHTML = data.login;
        else
            fullName.innerHTML = data.name;
        profilePic.innerHTML = `<img src="${data.avatar_url}" alt="">`
        let date = data.created_at;
        date = new Date(date);
        joinedDate.innerHTML = "Joined " + date.toDateString().substring(4);
        profileLink.href = data.html_url;
        profileLink.innerHTML = "@" + data.login;
        if(data.bio === null)
            bio.innerHTML = "Bio Not Applicable";
        else 
            bio.innerHTML = data.bio;
        repos.innerHTML = data.public_repos;
        followers.innerHTML = data.followers;
        following.innerHTML = data.following;
        if(data.location === null)
            loc.innerHTML = "Not Applicable";
        else
            loc.innerHTML = data.location.toUpperCase();
        if(data.email === null)
            mail.innerHTML = "Not Applicable";
        else 
            mail.innerHTML = data.email;
        if(data.twitter_username === null)
            tweet.innerHTML = "Not Applicable";
        else{
            tweet.herf = `https://twitter.com/${data.twitter_username}?lang=en`;
            tweet.innerHTML = data.twitter_username;
        }
        if(data.company === null)
            comp.innerHTML = "Not Applicable";
        else
            comp.innerHTML = data.company;
    }
};

function showAlert(msg){
    loadingScreen.classList.remove("active");
    alertBox.innerHTML = msg;
    alertBox.classList.add('active');
    wrapper.style.filter = "blur(3px)";
    setTimeout(() => {
        alertBox.classList.remove("active");
        wrapper.style.filter = "blur(0px)";
        inputBox.value = "";
    },2000);
    renderInfo(data);
}

const modeDisplay = document.querySelector("[data-mode-display]");
modeDisplay.innerHTML = "Dark";
const searchArea = document.querySelector(".searchArea");
const placeHolder = document.querySelector("[placeholder")
const content = document.querySelector(".content");
const stats = document.querySelector(".stats");
const sections = document.querySelectorAll("section");
const modeBtn = document.querySelector("i");

modeBtn.addEventListener("click", () => {
    toggleMode();
});

function toggleMode(){
    if(currentMode === "Light"){
        currentMode = "Dark";
    }
    else
        currentMode = "Light";
        modeDisplay.innerHTML = currentMode;
        modeBtn.classList.toggle("bi-brightness-high-fill");
        modeBtn.classList.toggle("bi-moon-fill");
        wrapper.classList.toggle("dark");
        searchArea.classList.toggle("dark");
        placeHolder.classList.toggle("dark");
        loadingScreen.classList.toggle("dark");
        content.classList.toggle("dark");
        stats.classList.toggle("dark");
        alertBox.classList.toggle("dark");
        sections.forEach((section) => {
            section.classList.toggle("dark");
        })
}
// toggleMode();

