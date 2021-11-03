let button = document.getElementById('he');
let par = document.getElementById('par');
par.style.visibility = 'hidden';
button.addEventListener('click', () =>  {
    if(button.click == true) {
        par.style.visibility = 'visible';
    }
})