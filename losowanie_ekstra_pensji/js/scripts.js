(function () {
    var btn = document.querySelector('.getNumbers');
    var firstOutput = document.querySelector('.showNumbers');
    var secOutput = document.querySelector('.showExtraNumber');
    
    function getRandom(min, max) {
        
        return Math.round(Math.random() *(max - min) + min);
        
    }
    function firstNumbers() {
        
        var numbers = [];
        var random;
        for (var i = 0; i < 5; i++) {
            random = getRandom(1, 35);
            
            while(numbers.indexOf(random) !== -1) {
                console.log('Powtorzylas sie liczba ' + random);
                random = getRandom(1, 35);
            }
            numbers.push(random);
        }
        numbers.sort(function(a, b){
            return a - b;
        });
        return numbers;
        
    }
    
    function secondNumber() {
        var number = getRandom(1, 4);
        return number;
    }
    
    function showRandomNumbers() {
        
//        console.log(numbers);
        firstOutput.value = firstNumbers().join(', ');
        secOutput.value = secondNumber();
    }
    
    btn.addEventListener('click', showRandomNumbers, false);
    
})();
