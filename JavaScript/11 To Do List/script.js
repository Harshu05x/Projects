const inputBox = document.querySelector("#inputBox");
const addBtn = document.querySelector(".addBtn");
const listContainer = document.querySelector("#list-container");
const alertBox = document.querySelector(".alertBox");

showTask();
addBtn.addEventListener("click",addTask);

function addTask(){
    if(inputBox.value === ''){
        showAlert("You must write something !");
    }
    else{
        let li = document.createElement('li');
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        
        let span = document.createElement('span');
        span.innerHTML = '\u00d7';
        li.appendChild(span);
    }
    inputBox.value = "";
    saveTask();
}

listContainer.addEventListener("click",(e) => {
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveTask();
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveTask();
    }
},false);


function saveTask(){
    localStorage.setItem("data",listContainer.innerHTML);
}

function showTask(){
    listContainer.innerHTML = localStorage.getItem('data');
}

function showAlert(msg){
    alertBox.innerHTML = msg;
    alertBox.classList.add("active");
    setTimeout(()=> {
        alertBox.classList.remove("active");
    },1500);
}