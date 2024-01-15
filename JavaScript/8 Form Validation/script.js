const nameError = document.querySelector(".name-error");
const phoneError = document.querySelector(".phone-error");
const emailError = document.querySelector(".email-error");
const msgError = document.querySelector(".msg-error");
const submitError = document.querySelector(".sumbit-error");

function validateName(){
    var nameFeild = document.querySelector("#name").value;

    if(nameFeild.length == 0){
        nameError.innerHTML = 'name is requried';
        return false;
    }
    if(!nameFeild.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)){
        nameError.innerHTML = 'write full name';
        return false;
    }
    nameError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
    return true;
};

function validatePhone(){
    var phoneFeild = document.querySelector("#phoneNo").value;
    
    if(phoneFeild.length == 0){
        phoneError.innerHTML = 'phone no is requried';
        return false;
    }
    if(!phoneFeild.match(/^[0-9]{10}$/) || phoneFeild.length < 10){
        phoneError.innerHTML = 'enter valid phone no';
        return false;
    }
    phoneError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
    return true;
}

function validateEmail(){
    var emailFeild = document.querySelector("#email").value;

    if(emailFeild.length == 0){
        emailError.innerHTML = 'Email is requried';
        return false;
    }
    if(!emailFeild.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)){
        emailError.innerHTML = 'Email Invalid';
        return false;
    }
    emailError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
    return true;
}

function validateMsg(){
    var msgFeild = document.querySelector("#msg").value;

    if(msgFeild.length < 30){
        msgError.innerHTML = `${30-msgFeild.length} more characters are requried`;
        return false;
    }
    msgError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
    return true;
}


function validateForm(){
    var submitBtn = document.querySelector('button');
    if(!validateName() || !validatePhone() || !validateEmail() || !validateMsg()){
        submitBtn.innerHTML = 'Please fix error to submit';
        submitBtn.style.color = 'red';
        setTimeout( () =>{
            submitBtn.innerHTML = 'Submit';
            submitBtn.style.color = 'white';
        },3000);
        return false;
    }
}

