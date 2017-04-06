var toDay = document.querySelector('h1');
var currentTime = document.querySelector('h2');

function tick() {
var d = new Date();

var day = d.getDay();
var days = ['Niedziela', 'Poniedziałek', 'Wtorek', 'Środa', 'Czwartek', 'Piątek', 'Sobota'];
toDay.textContent = 'Dzisiaj mamy: ' + days[day];

var hour = d.getHours();
var min = d.getMinutes();
var sec = d. getSeconds();
var zone = '';

if(hour >= 12 ) {
    hour -= 12;
    zone = ' PM ';
    if(hour == 0) {
        hour = 12;
    }
} else {
    zone = ' AM ';
}
hour = (hour < 10) ? '0' + hour : hour;
min = (min < 10) ? '0' + min : min;
sec = (sec < 10) ? '0' + sec : sec;

currentTime.textContent = 'Godzina: ' + (hour) + ':' + min + ':' + sec + ' ' + zone;
setTimeout(tick, 1000);
}
tick();