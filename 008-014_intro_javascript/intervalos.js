let getTime = (date = new Date()) => 
    date.getHours() +':'+ date.getMinutes() +':'+ date.getSeconds();

let showTimer = (time = getTime()) => 
    document.querySelector('.time').innerHTML = time;

let startTimer = () => timer = setInterval(showTimer, 1000);

let stopTimer = () => timer = clearInterval(timer);


let timer = showTimer();
