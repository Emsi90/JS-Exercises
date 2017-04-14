var buttonLeft = document.querySelector('.left');
var buttonRight = document.querySelector('.right');
var pagination = document.querySelectorAll('.pagination span');
var count = 1;

slider(count);

buttonLeft.addEventListener('click', function(){
    slider(count += -1);
}, false);

buttonRight.addEventListener('click', function(){
    slider(count += 1);
}, false);


pagination.forEach(function(index, counter){
    
    index.addEventListener('click', function(){

        slider(count = counter + 1);
        
    }, false);
    
});


function slider(c) {
    
    var imgSlide = document.querySelectorAll('.slider .slide');

    if(c > imgSlide.length) {
        count = 1;
    }
    if(c < 1) {
        count = imgSlide.length;
    }
    
    for(var i = 0; i < imgSlide.length; i++) {
        imgSlide[i].style.display = 'none';
    }
    
    for(var i = 0; i < pagination.length; i++) {
        pagination[i].className = pagination[i].className.replace('fill', '');
    }
    

    imgSlide[count - 1].style.display = 'block';
    pagination[count - 1].classList.add('fill');
}