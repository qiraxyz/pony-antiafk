// global variable
var auto; 
var play_afk;
var setTime;
var DOM;

// set time click 15 min = 900000ms
setTime = 900000;

// set id canvas in game
DOM = 'canvas';

// get canvas games
auto = document.getElementById(DOM);

function play() {
    setInterval(function(){
        auto.click()
    }, setTime);

}
play.start()
