var count = document.querySelector('h2');

var counter = 0;

function meter(number, time, mark) {
    
    function c() {

        if(counter <= number) {
            count.textContent = counter++ + mark;
            setTimeout(c, time);
        }
        
    }
    c();
}

meter(100, 10, ' %');

