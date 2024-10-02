var hr = 0;
var min = 0;
var sec = 0;
var count = 0;

var timer = false;


function start() {
    if (!timer) {  
        timer = true;
        stopwatch();
    }
}


function stop() {
    timer = false;
}


function reset() {
    timer = false;
    
    
    hr = 0;
    min = 0;
    sec = 0;
    count = 0;

   
    document.getElementById("hr").innerHTML = "00";
    document.getElementById("min").innerHTML = "00";
    document.getElementById("sec").innerHTML = "00";
    document.getElementById("count").innerHTML = "00";
}


function stopwatch() {
    if (timer) {
        count++;

        if (count == 100) { 
            sec++;
            count = 0;
        }

        if (sec == 60) { 
            min++;
            sec = 0;
        }

        if (min == 60) {
            hr++;
            min = 0;
        }

      
        var hrString = hr < 10 ? "0" + hr : hr;
        var minString = min < 10 ? "0" + min : min;
        var secString = sec < 10 ? "0" + sec : sec;
        var countString = count < 10 ? "0" + count : count;

        document.getElementById("hr").innerHTML = hrString;
        document.getElementById("min").innerHTML = minString;
        document.getElementById("sec").innerHTML = secString;
        document.getElementById("count").innerHTML = countString;

       
        setTimeout(stopwatch, 10);
    }
}


document.getElementById("start").addEventListener("click", start);
document.getElementById("stop").addEventListener("click", stop);
document.getElementById("reset").addEventListener("click", reset);
