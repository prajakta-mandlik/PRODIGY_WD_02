var hours = 0;
var second = 0;
var minutes = 0

var hrs = document.getElementById('hours')
var min = document.getElementById('minutes')
var sec = document.getElementById('second')


var buttonStart = document.getElementById('btn-start')
var buttonStop = document.getElementById('btn-stop')
var buttonReset = document.getElementById('btn-reset')

var interval;

buttonStart.addEventListener('click', function () {
    clearInterval(interval)
    interval = setInterval(startTimer, 1000);
})

buttonStop.addEventListener('click', function(){
      clearInterval(interval)

})


buttonReset.addEventListener('click', function(){
    hours = 0
    minutes = 0
    second = 0

    sec.innerHTML = "0" + second
    min.innerHTML = "0" + minutes
    hrs.innerHTML = "0" + hours

})

function startTimer() {
    second++

    if (second == 60) {
        minutes++
        second = 0

    }

    if (second < 10) {
        sec.innerHTML = "0" + second
    }

    if (second > 9) {
        sec.innerHTML = second
    }

    if (minutes < 10) {
        min.innerHTML = "0" + minutes
    }

    if (minutes >= 10) {
        min.innerHTML = minutes
    }

    if (minutes == 60) {
        hours++
        minutes = 0
        second = 0
    }

    if (hours < 10) {
        hrs.innerHTML = "0" + hours
    }

    if (hours >= 10) {
        hrs.innerHTML = hours
    }

    if(hours == 24){
        hours = 0
        minutes = 0
        second = 0
    }
}