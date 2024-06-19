//gettimehtml
var getMinutes = document.getElementById("minutes");
var getSeconds = document.getElementById("seconds");
var getMiliSeconds = document.getElementById("miliseconds");

//jstime
var minutes = 0;
var seconds = 0;
var milisecond = 0;
var interval;





//functionstart
function start(params) {
    interval = setInterval(function () {
        milisecond++
        getMiliSeconds.innerHTML = milisecond;
        if (milisecond >= 100) {
            seconds++
            getSeconds.innerHTML = seconds
            milisecond = 0

        }
        else if (seconds >= 60) {
            minutes++
            getMinutes.innerHTML = minutes
            seconds = 0
        }


    }, 100)


}

//fuctionstop
function stop(params) {
    clearInterval(interval)

}

//functionreset
function reset(params) {
    var minutes = 0;
    var seconds = 0;
    var milisecond = 0;
    getMiliSeconds.innerHTML = milisecond
    getSeconds.innerHTML = seconds
    getMinutes.innerHTML = minutes

}




