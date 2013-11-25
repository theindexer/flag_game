/* 
** Round timer
*/

var count = 180;
var clicked = false;
var paused = false;
function timer(){
    count = count-1;
    var minutes = Math.floor(count/60);
    var seconds = count%60;
    if (seconds < 10){
	seconds = "0" + seconds;
    }
    document.getElementById("timer").innerHTML = "Time remaining: " + String(minutes) + ":" +String(seconds);

    if (count<=0){
        paused = false;
      document.getElementById("pause_btn").innerHTML = "Pause";
	document.getElementById("timer").innerHTML = "Time's up!";
      document.getElementById("time_select").style.visibility =''
	clearInterval(counter);
	return;
    }
}
function startTimer(){
    if (clicked === false){
      document.getElementById("time_select").style.visibility ='hidden'
      if(!paused) {
      var mins = document.getElementById("minutes");
      var minutes = mins.options[mins.selectedIndex].value
      var secs = document.getElementById("seconds");
      var seconds = secs.options[secs.selectedIndex].value
      count = minutes * 60 + seconds * 1
      }
	counter = setInterval("timer()", 1000);
        timer();
	clicked = true;
        paused = false;
    }
    else if (clicked === true){
    }
}
function stopTimer(){
 
    clearInterval(counter);
    document.getElementById("timer").innerHTML = "Time's up!";
      document.getElementById("pause_btn").innerHTML = "Pause";
    clicked = false;
    paused = false;
    document.getElementById("time_select").style.visibility =''
    count = 180;
}

function pauseTimer(){
    if(clicked) {
      clearInterval(counter);
      clicked = false;
      paused = true;
      document.getElementById("pause_btn").innerHTML = "Resume";
    } else {
        paused = false;
	counter = setInterval("timer()", 1000);
	clicked = true;
        document.getElementById("pause_btn").innerHTML = "Pause";
    }
}
			  
