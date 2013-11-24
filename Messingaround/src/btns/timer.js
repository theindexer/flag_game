/* 
** Round timer
*/

var count = 180;
var clicked = false;
function timer(){
    count = count-1;
    var minutes = Math.floor(count/60);
    var seconds = count%60;
    if (seconds < 10){
	seconds = "0" + seconds;
    }
    document.getElementById("timer").innerHTML = "Time remaining: " + String(minutes) + ":" +String(seconds);

    if (count<=0){
	document.getElementById("timer").innerHTML = "Time's up!";
	clearInterval(counter);
	return;
    }
}
function startTimer(){

    if (clicked === false){
	counter = setInterval("timer()", 1000);
	clicked = true;
    }
    else if (clicked === true){
    }
}
function stopTimer(){
 
    clearInterval(counter);
    document.getElementById("timer").innerHTML = "Time's up!";
    clicked = false;
    count = 180;
}

function pauseTimer(){
    if(clicked) {
      clearInterval(counter);
      clicked = false;
      document.getElementById("pause_btn").innerHTML = "Resume";
    } else {
	counter = setInterval("timer()", 1000);
	clicked = true;
        document.getElementById("pause_btn").innerHTML = "Pause";
    }
}
			  
