//Declaring Variables
let ms=0, s=0, m=0;
let timer;
let stwatch = document.querySelector('.stopwatch');
let min_input, sec_input;

//Start function
function start() {
   min_input = document.getElementById("minutes").value;
   sec_input = document.getElementById("seconds").value;
   
   //Checking if minutes and seconds value is greater than 60
   if(!timer){
        if(min_input > 60 || sec_input > 60){
            alert("Value should not be above 60");
            document.getElementById("minutes").value=0;
            document.getElementById("seconds").value=0;

            stop();
        }
        else{
            timer = setInterval(run, 10);
        }	    
    }
}

//To run the stopwatch
function run() {
    stwatch.textContent =  getTimer();
    ms++;
    if(ms == 100) {
        ms = 0;
        s++;
    }
    if(s == 60) {
        s = 0;
        m++;
    }

    if(m == min_input && s == sec_input){
        ms = 0;
        s = sec_input;
        m = min_input;
        stopTimer();
        stwatch.textContent = getTimer();     
    }
} 

//To pause the stopwatch
function pause() {
    stopTimer();
    stwatch.textContent = getTimer();
}

//To stop the stopwatch
function stop() {
	stopTimer();
	ms = 0;
	s = 0;
	m = 0;
	stwatch.textContent =  getTimer();
}

//Set time format
function getTimer() {
    return  (m < 10? "0" +m : m) + ":" + (s < 10 ? "0" +s : s) + ":" + (ms < 10? "0"+ms : ms);
}

//Stops timer
function stopTimer() {
    clearInterval(timer);
    timer=false; 
}

//To restart the stopwatch
function restart() {
    stop();
    start();
}

//To reset the stopwatch
function reset() {
    document.getElementById("minutes").value = 0;
    document.getElementById("seconds").value = 0;
    location.reload();
}

//To start stopwatch without user input
function freestart(){
    if(!timer){
	    timer = setInterval(run, 10);
    }
}
