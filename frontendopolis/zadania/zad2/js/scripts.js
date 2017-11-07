var a = document.querySelector('#a');
var b = document.querySelector('#b');
var output = document.querySelector('output');
var btn = document.querySelector('.btn');

btn.addEventListener('click', function() {
    
    var addition = parseInt(a.value) + parseInt(b.value);
    var subtraction = parseInt(a.value) - parseInt(b.value);
    var multiplication = parseInt(a.value) * parseInt(b.value);
    var division = parseInt(a.value) / parseInt(b.value);
    
    output.textContent = (a.value + ' + ' +  b.value + ' = ' + addition) + '\n' + (a.value + ' - '+  b.value + ' = ' + subtraction) + '\n' + (a.value + ' * ' +  b.value + ' = '+ multiplication) + '\n' + (a.value + ' / '+  b.value + ' = ' + division);
}, false);

