var a = document.querySelector('#a');
var b = document.querySelector('#b');
var output = document.querySelector('output');
var btn = document.querySelector('.btn');
var btnRandom = document.querySelector('.btn--random');


btn.addEventListener('click', function(){
    countNumber(a.value, b.value);
}, false);

btnRandom.addEventListener('click', function() {
    countNumber(randomNumbers(), randomNumbers());
}, false);

function countNumber(a, b) {
    
    var addition = parseInt(a) + parseInt(b);
    var subtraction = parseInt(a) - parseInt(b);
    var multiplication = parseInt(a) * parseInt(b);
    var division = parseInt(a) / parseInt(b);
    
    output.textContent = (a + ' + ' +  b + ' = ' + addition) + '\n' + (a + ' - '+  b + ' = ' + subtraction) + '\n' + (a + ' * ' +  b + ' = '+ multiplication) + '\n' + (a + ' / '+  b + ' = ' + division);
}

function randomNumbers() {
    return Math.floor((Math.random() * 20) + 1);
}
