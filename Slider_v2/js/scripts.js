(function(){
    
    var slides = document.querySelectorAll('.slide');
    var timeBars = document.querySelectorAll('.timer progress');
    
    
    [].forEach.call(slides, function(slide) {
       
        var currentIndex = 0;
        var width = 100;
        
        function switchImg() {

            slide.style.left = -width * currentIndex + '%';

        }

        function progressBar() {

            var barWidth = 0;
            var timeToProgress = setInterval(function() {

                barWidth += 1;

                if(barWidth > 100) {
                    clearInterval(timeToProgress);
                } else {
                    timeBars[currentIndex].value = barWidth;
                }

            }, 40);

        }

        progressBar();

        var tickTock = setInterval(function() {

            progressBar();
            timeBars[currentIndex].value = 0;

            currentIndex++;
            switchImg();

            if(currentIndex > slides.length - 1) {
                slide.style.left = 0;
                currentIndex = 0;
            }

        }, 4001);
    
        
    });
    
    
})();