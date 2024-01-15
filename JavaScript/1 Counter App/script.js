const content = document.querySelector('.counter');
let val = parseInt(content.textContent);

function decrement(){
    val--;
    content.textContent = val;
};

function increment(){
    val++;
    content.textContent = val;
};

// // 2nd method  using addEventListener
// const minus = document.querySelector('#minusBtn').addEventListener('click', () =>{
//     val--;
//     content.textContent = val;
// });

// const plus = document.querySelector('#plusBtn').addEventListener('click', () =>{
//     val++;
//     content.textContent = val;
// });