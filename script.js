let hr = 0;
let min = 0;
let sec = 0;
let timer = document.querySelector("#timer");
let int = null;
let once = true;
function startTimer(){
    if(once){
        if(int == null){
            clearInterval(int);
        }
        int = setInterval(displayTimer, 1000);
        once = false;
    }
    
}
function resetTimer(){
    once = true;
    clearInterval(int);
    sec = 0;
    min = 0;
    hr = 0;
    timer.innerHTML = "00:00:00";
    int = null;
}
let lap_count = 0;
function lapTimer(){
    lap_count++;
    let cont = document.createElement("div");
    let lap = document.createElement("h4");
    lap.innerHTML = timer.innerHTML + " -> lap "+ lap_count;

    lap.style.color = "black";
    cont.appendChild(lap);
    document.querySelector("#lap-history").appendChild(cont);
    
}
function pauseTimer(){
    once = true;
    clearInterval(int);
}   

function displayTimer(){
    sec++;
    if(sec == 60){
        sec = 0;
        min++;
        if(min == 60){
            min = 0;
            hr++;
        }
    }
    let s;
    if(sec < 10){
        s = "0"+ sec;
    }else{
        s = sec;
    }
    let m;
    if(min < 10){
        m = "0"+ min;
    }else{
        m = min;
    }
    let h;
    if(hr < 10){
        h = "0"+ hr;
    }else{
        h = hr;
    }
    timer.innerHTML = `${h}:${m}:${s}`;
    // timer.innerHTML = hr+":"+min+":"+sec;
    
}