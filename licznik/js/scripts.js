function Counter(counter, container) {
    
    this.counter = counter;
    this.container = container;
    this.noRepeat = true;

    document.addEventListener('scroll', this.startCounter.bind(this), false);
    
}

Counter.prototype.startCounter = function() {

    [].forEach.call(this.counter, function(elem) {
        
        
        var posTop = (elem.offsetTop - this.container.offsetTop) + (this.container.offsetHeight / 2) - (elem.offsetHeight);
        var register = 0;
        
//        console.log(this.container.offsetHeight);
//        console.log(elem.offsetTop);
//        console.log((elem.offsetTop));
//        console.log(Math.round(scrollY));
        if((elem.offsetTop - posTop) <= Math.round(scrollY) && this.noRepeat) {
            
//            console.log('yes');
            
            var goCounter = setInterval(function(){
                
                this.noRepeat = false;
                if(register <= elem.dataset.scope) {
                    elem.textContent = register++;
                } else {
                    clearInterval(goCounter);
                }
                
            }.bind(this), 100);
            
        }
        
    }.bind(this));
    
};

var counterOne = new Counter(document.querySelectorAll('.counterOne'), document.querySelector('.conForCounterOne'));
var counterTwo = new Counter(document.querySelectorAll('.counterTwo'), document.querySelector('.conForCounterTwo'));
var counterTwo = new Counter(document.querySelectorAll('.counterThree'), document.querySelector('.conForCounterThree'));

