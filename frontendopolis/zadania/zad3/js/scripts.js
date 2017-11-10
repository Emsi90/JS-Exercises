var counter = document.querySelector('.counter');
var button = document.querySelector('.btn');
var counterValue = 0;
counter.textContent = counterValue;
var click = 0;
var increase = 0;

button.addEventListener('click', increaseCounter, false );

function increaseCounter() {
    
    
    if(click === 5) {
        increase += 1;
        click = 0;
    }
    
    click += 1;
    counterValue += 1 + increase;
    counter.textContent = counterValue;
}