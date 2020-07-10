// var count = 0;
// var interval;
// function timer(){
//     count++
//     console.log(count)
// }
// interval = setInterval(timer,1000);
// setTimeout(function(){
//     clearInterval(interval)
// },5000)
var hours = 00;
var minuts = 0;
var seconds = 0;
var miliSec = 0;
 var startHeading;
 var start;
var hoursHeading = document.getElementById("hours");
var minutsHeading = document.getElementById("minuts");
var secondHeading = document.getElementById("seconds");
var miliSecHeading = document.getElementById("miliSec");
var disableHeading;
var interval;
function timer(){

 miliSec++
    miliSecHeading.innerHTML = miliSec;
    if(miliSec >= 100){
        seconds++
        secondHeading.innerHTML = seconds + "." ;
        miliSec = .00;
    }
    else if (seconds >= 60){
        minuts++ 
        minutsHeading.innerHTML = minuts + ".";
        seconds = .00;
    }
    else if(minuts >= 60){
        hours++
        hoursHeading.innerHTML = hours + ".";
        minuts = .00
    }
    
}
function start(){
    interval = setInterval(timer,10);
}
function pause(){
    clearInterval(interval)
}
function reset(){
    hours = "00.";
    minuts = "00.";
    seconds = "00.";
    miliSec = "00";
    hoursHeading.innerHTML = hours;
    minutsHeading.innerHTML= minuts;
    secondHeading.innerHTML = seconds;
    miliSecHeading.innerHTML = miliSec;
    pause();
}

function disable(){
    document.getElementById(startbtn).disabled = true;
    

}
