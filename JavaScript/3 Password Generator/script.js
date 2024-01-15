const passwordDisplay = document.querySelector("[display-password]");
const copyBtn = document.querySelector("[copy-btn]");
const copyMsg = document.querySelector("[data-copy-msg]");
const pwdLength = document.querySelector("[data-length]");
const inputSlider = document.querySelector("[data-length-slider]");
const uppercaseCheck = document.querySelector("#uppercase");
const lowercaseCheck = document.querySelector("#lowercase");
const numsCheck = document.querySelector("#numbers");
const symbolsCheck = document.querySelector("#symbols");
const strengthIndicator = document.querySelector("[data-indicator]");
const generateBtn = document.querySelector(".Generate-btn");
const allCheckBoxes = document.querySelectorAll("input[type=chechbox]");
const symbols = '!@#$%^&*()_+[]{}|:;<>,.?/';


let password = "";
let passwordLength = 10;
let chechboxCount = 1;
handleSlider();
setIndicator("#ccc");

// set password length 
function handleSlider(){
    inputSlider.value = passwordLength;
    pwdLength.innerText = passwordLength;
    const min = inputSlider.min;
    const max = inputSlider.max; 
    console.log(((passwordLength - min) * 100 / (max - min) ) + "% 100%");
    inputSlider.style.backgroundSize = ((passwordLength - min) * 100 / (max - min) ) + "% 100%";
}

function setIndicator(color){
    strengthIndicator.style.backgroundColor = color; 
    strengthIndicator.style.boxShadow = `0px 0px 12px 1px ${color}`; 
}

// Generate random intger between min & max
function getRndInt(min,max){
    return Math.floor(Math.random() * (max-min)) + min;
}

function generateRndNum(){
    return getRndInt(0,9);
}

function generateLowerCase(){
    return String.fromCharCode(getRndInt(97,123));
}

function generateUpperCase(){
    return String.fromCharCode(getRndInt(65,90));
}

function generateSymbol(){
    let len = symbols.length;
    let k = getRndInt(0,len);
    return symbols.charAt(k);
}

function calcStrength(){
    let hasUpper = false;
    let hasLower = false;
    let hasNum = false;
    let hasSymbol = false;

    if(uppercaseCheck.checked) hasUpper = true;
    if(lowercaseCheck.checked) hasLower = true;
    if(numsCheck.checked) hasNum = true;
    if(symbolsCheck.checked) hasSymbol = true;

    if(hasUpper && hasLower && (hasNum || hasSymbol) && passwordLength >= 8){
        setIndicator("#0f0");
    }
    else if(
        (hasLower || hasUpper) &&
        (hasNum || hasSymbol) &&
        passwordLength >= 6
    ){
        setIndicator("#ff0");
    }
    else{
        setIndicator("#f00");
    }
}

async function copyContent(){
    try{
        await navigator.clipboard.writeText(passwordDisplay.value);
        copyMsg.innerText = "Copied";
    }
    catch(e){
        copyMsg.innerText = "Failed";
    }

    // to make copied msg visible 
    copyMsg.classList.add("active");
    // to make copied msg invisible
    setTimeout(() => {
        copyMsg.classList.remove("active");
    },2000);
}

inputSlider.addEventListener('input' , (e) => {
    passwordLength = e.target.value;
    handleSlider();
})

copyBtn.addEventListener('click' , () => {
    if(passwordDisplay.value){
        copyContent();
    }
})

function handleCheckBoxChange(){
    chechboxCount = 0;
    allCheckBoxes.forEach((checkBox) => {
        if(checkBox.checked)
            chechboxCount++;
    })

    if(passwordLength < chechboxCount){
        passwordLength = chechboxCount;
        handleSlider();
    }
}

allCheckBoxes.forEach((checkBox) => {
    checkBox.addEventListener('change', handleCheckBoxChange);
})

function shufflePassword(array){
    // Fisher Yates Method

    for(let i = array.length-1; i >= 0; i--){
        const j = Math.floor(Math.random() * (i+1));
        const temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }

    let str = "";
    array.forEach((i) => {
        str += i;
    })
    return str;
}

generateBtn.addEventListener('click' , () => {
    if(chechboxCount <= 0) return ;

    if(passwordLength < chechboxCount){
        passwordLength = chechboxCount;
        handleSlider();
    }

    password = "";

    // if(uppercaseCheck.checked){
    //     password += generateUpperCase();
    // }
    // if(lowercaseCheck.checked){
    //     password += generateLowerCase();
    // }
    // if(numsCheck.checked){
    //     password += generateRndNum();
    // }
    // if(symbolsCheck.checked){
    //     password += generateSymbol();
    // }

    let functionArr = [];
    if(uppercaseCheck.checked)
        functionArr.push(generateUpperCase);
    if(lowercaseCheck.checked)
        functionArr.push(generateLowerCase);
    if(numsCheck.checked)
        functionArr.push(generateRndNum);
    if(symbolsCheck.checked)
        functionArr.push(generateSymbol);

    // complusory addition
    for(let i = 0; i < functionArr.length; i++){
        password += functionArr[i]();
    }

    // remaining addition
    for(let i = 0; i < passwordLength-functionArr.length; i++){
        password += functionArr[getRndInt(0,functionArr.length-1)]();
    }

    // shuffle the password
    password = shufflePassword(Array.from(password));

    // show the password
    passwordDisplay.value = password;

    // show the strength
    calcStrength();
})

