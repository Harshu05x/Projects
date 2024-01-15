const hours = document.querySelector('.hours');
const minutes = document.querySelector('.minutes');
const seconds = document.querySelector('.seconds');
const ampm = document.querySelector('.ampm');


setInterval(function() {
    let date = new Date();
    hours.innerText = date.getHours();
    minutes.innerText = date.getMinutes();
    seconds.innerHTML = date.getSeconds();
    ampm.innerText = date.getHours() >= 12 ? 'PM' : 'AM'; 
},10);