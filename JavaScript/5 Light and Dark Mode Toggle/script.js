const toggleBtn = document.querySelector("#toggleDarkMode");
const wrapper = document.querySelector(".wrapper");

let currentMode = 'light';

toggleBtn.addEventListener('click', () => {
    if(currentMode == 'light'){
        wrapper.classList.add('dark');
        currentMode = 'dark';
        toggleBtn.classList.remove('bi-brightness-high-fill');
        toggleBtn.classList.add('bi-moon-fill');
    }
    else{
        wrapper.classList.remove('dark');
        currentMode = 'light';
        toggleBtn.classList.remove('bi-moon-fill');
        toggleBtn.classList.add('bi-brightness-high-fill');
    }
})
