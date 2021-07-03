const increaseBtn = document.querySelector('#increase');
const decreaseBtn = document.querySelector('#decrease');
const resetBtn = document.querySelector('#reset');

let count = 0;

document.getElementById('num').innerHTML = count;

increaseBtn.addEventListener('click', function(){
    count++;
})




