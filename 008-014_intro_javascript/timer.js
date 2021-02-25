let globalSeconds = 0;

function stringPomo() {
    let s =  (Math.floor(globalSeconds/60) >= 60) ? globalSeconds = 0 : globalSeconds;
    let aux = Math.floor(s/60);

    let minutes = (aux < 10) ? ('0' + aux) : aux;
    let seconds = ((s%60) < 10) ? ('0' + (s%60)) : (s%60);
    return minutes + ':' + seconds;
}

function showPomo() {
    document.querySelector('.pomodoro').innerHTML = stringPomo();
}

function updatePomo() {
    globalSeconds++;
    document.querySelector('.pomodoro').innerHTML = stringPomo();
}


let pomodoro = showPomo();

function startPomo() { pomodoro = setInterval(updatePomo, 1000);
}

function stopPomo() {
    pomodoro = clearInterval(pomodoro);
}

function clearPomo() {
    globalSeconds = 0;
    stopPomo();
    document.querySelector('.pomodoro').innerHTML = stringPomo();
}
