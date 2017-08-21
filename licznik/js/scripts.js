var count = document.querySelectorAll('h3');
var noRepeat = true;
//var counter = 0;

//function meter(number, time, mark) {
//    
//    function c() {
//        if(counter <= number) {
//            count.textContent = counter++ + mark;
//            setTimeout(c, time);
//        }
//    }
//    c();
//}

//function goInterval(el, counter) {
//    
//    var goCounter = setInterval(function(){
//        
//        
//        if (counter <= 100) {
//            el.textContent = counter++ + '%';
//        } else {
//            
//            clearInterval(goCounter);
//        }
//    }, 100);
//
//}

function startCounter() {


count.forEach(function(el) {
    
//    noRepeat = 0;
    var posTop = el.getBoundingClientRect().top;
    var counter = 0;
//    console.log(el.offsetTop - el.offsetTop);
    console.log(posTop);
    console.log(el.offsetTop);
    if((posTop - el.offsetTop) < Math.round(scrollY) && noRepeat) {
//        console.log('tak');
//        console.log(el);
//        console.log((el.offsetTop - 100));

//            goInterval(el, counter);
        
        var goCounter = setInterval(function(){
        
            noRepeat = false;
        
            if (counter <= 100) {
                el.textContent = counter++ + '%';
            } else {

                clearInterval(goCounter);
            }
        }, 100);
        
    }
    
//    console.log(noRepeat);
});


}

document.addEventListener('scroll', function() {

    startCounter();
    
}, false);
