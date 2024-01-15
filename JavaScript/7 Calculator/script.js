let displayBox = document.querySelector('[displayBox]');
let buttons = document.querySelectorAll('p');

let arr = Array.from(buttons);
let str = "";

arr.forEach(p => {
    p.addEventListener('click' , (e) => {

        // AC button
        if(e.target.innerHTML == 'AC'){
            str = '';
            displayBox.value = str;
        }
        // DEL Button
        else if(e.target.innerHTML == 'DEL'){
            str = str.substring(0,str.length-1);
            displayBox.value = str;
        }
        // Equal to Button
        else if(e.target.innerHTML == '='){
            str = eval(str);
            displayBox.value = str;
        }
        else{
            str += e.target.innerHTML;
            displayBox.value = str;
        }
    })
});

