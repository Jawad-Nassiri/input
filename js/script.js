let input = document.querySelector('input');
let span = document.querySelector('.counter');


input.addEventListener('input' , ()=>{
    let maxLength = 19;
    let currentLength = input.value.length;

    if(currentLength <= maxLength){
        span.innerHTML = maxLength - currentLength;
    }
})