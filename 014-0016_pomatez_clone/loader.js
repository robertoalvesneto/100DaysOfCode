//Tempos pré definidos
let workSeconds = 1500;
let longBreakSeconds = 900;
let breakSeconds = 300;
//Tempo atual
let curentSeconds = 0;

//Sessões pré definidas
let totalSessions = 4;
//Sessão atual
let currentSession = 0;

//Variáveis de controle
let isWorking = true;
let isLongBreaking = false;
let soundEnabled = true;
let isStopped = true;

//Variável do pomodoro
let pomodoro = null;



function renderProgress() {
    //Renderiza o indicador de progresso com base na porcentagem de conclusão.
    
    //Calcula o progresso em porcentagem, verificando se está no tempo de trab
    //ou no de descanso.
    function calcProgress() {
        let totalSeconds = 0;
        if (isLongBreaking) totalSeconds = longBreakSeconds;
        else totalSeconds = ((isWorking) ? workSeconds : breakSeconds);
        
        return ((curentSeconds*1)/totalSeconds)*100;
    }
    let progress = calcProgress();
    progress = Math.floor(progress);

    if(progress<25) {
        var angle = -90 + (progress/100)*360;
        document.querySelector(".animate-0-25-b").style.transform = "rotate("+angle+"deg)";
    }
    else if(progress>=25 && progress<50) {
        var angle = -90 + ((progress-25)/100)*360;
        document.querySelector(".animate-0-25-b").style.transform = "rotate(0deg)";
        document.querySelector(".animate-25-50-b").style.transform = "rotate("+angle+"deg)";
    }
    else if(progress>=50 && progress<75) {
        var angle = -90 + ((progress-50)/100)*360;
        document.querySelector(".animate-25-50-b").style.transform = "rotate(0deg)";
        document.querySelector(".animate-0-25-b").style.transform = "rotate(0deg)";
        document.querySelector(".animate-50-75-b").style.transform = "rotate("+angle+"deg)";
    }
    else if(progress>=75 && progress<=100) {
        var angle = -90 + ((progress-75)/100)*360;
        document.querySelector(".animate-50-75-b").style.transform = "rotate(0deg)";
        document.querySelector(".animate-25-50-b").style.transform = "rotate(0deg)";
        document.querySelector(".animate-0-25-b").style.transform = "rotate(0deg)";
        document.querySelector(".animate-75-100-b").style.transform = "rotate("+angle+"deg)";
    }
}


function resetRenderProgress() {
    //Retorna o indicador de progresso para o estado inicial.
    document.querySelector(".animate-0-25-a").style.transform = "rotate(90deg)";
    document.querySelector(".animate-0-25-b").style.transform = "rotate(-90deg)";

    document.querySelector(".animate-25-50-a").style.transform = "rotate(180deg)";
    document.querySelector(".animate-25-50-b").style.transform = "rotate(-90deg)";
    
    document.querySelector(".animate-50-75-a").style.transform = "rotate(270deg)";
    document.querySelector(".animate-50-75-b").style.transform = "rotate(-90deg)";

    document.querySelector(".animate-75-100-a").style.transform = "rotate(0deg)";
    document.querySelector(".animate-75-100-b").style.transform = "rotate(-90deg)";
}


function playSound() {
    //Roda o som quando se for permitido
    if (soundEnabled) {
        var audio = new Audio('assets/sounds/complete.wav');
        audio.play();
    }
}


function hover(element, isOver) {
    //Muda a cor ao passar o mouse. A cor depende do estado atual do app.
    let color = ((isOver) ? ((isWorking) ? "#01c3ff" : "#62a547") : "#808080");
    if (element.querySelector(".icon")) {
        element.style.backgroundColor = color;
        element.querySelector(".icon").style.color = color;
        element.querySelector(".txt").style.color = color;
    } else {
        element.style.color = color;
    }
}


function activePage() {
    //Muda a cor da pagina atual que se mantém ativa.
    let color = ((isWorking) ? "#01c3ff" : "#62a547");
    document.querySelector(".active").style.backgroundColor = color;
    document.querySelector(".timer").style.color = color;
}


function stringTimer(maxSeconds, curentSeconds) {
    //Transforma os segundos em minutos e segundos, no formato xx:xx
    let difSeconds = maxSeconds - curentSeconds;
    let s =  (Math.floor(difSeconds/60) >= 60) ? difSeconds = 0 : difSeconds;
    let aux = Math.floor(s/60);

    let minutes = (aux < 10) ? ('0' + aux) : aux;
    let seconds = ((s%60) < 10) ? ('0' + (s%60)) : (s%60);
    return minutes + ':' + seconds;
}


function showTimer() {
    //Faz a primeira exibição do tempo. No inicio sempre está no estado de trab.
    let stringTime = stringTimer(workSeconds, curentSeconds);
    document.querySelector(".time-text").innerHTML = stringTime;
}


function clearPomo() {
    //Limpa o tempo decorrido da variável; Retorna o ícone de play do botão;
    //Limpa o texto de indicação do carregamento.
    curentSeconds = 0;
    pomodoro = clearInterval(pomodoro);
    document.querySelector('.button-play .material-icons').innerText = 
        "play_circle_outline";

    let stringTime = stringTimer(
        (isLongBreaking) ? longBreakSeconds
            : ((isWorking) ? workSeconds : breakSeconds),
        curentSeconds
        );
    
    document.querySelector('.time-text').innerHTML = stringTime;
    isStopped = true;
}


function setWorkTime() {
    //Atualiza a cor e o ícone para o tempo de trabalho.
    //Atualiza a variável que determina o estado atual.
    let color = "#01c3ff";
    let border = "5px solid #01c3ff";
    let icon = "import_contacts";
    let text = "Stay Focused";
    document.querySelector(".loader-bg").style.border = border;
    document.querySelector(".current-state-c").style.color = color;
    document.querySelector(".loader .current-activity-icon").innerHTML = icon;
    document.querySelector(".loader .text").innerHTML = text;

    isWorking = true;
    activePage();
}


function setBreakTime() {
    //Atualiza a cor e o ícone para o tempo de pausa.
    //Atualiza a variável que determina o estado atual.
    let color = "#62a547";
    let border = "5px solid #62a547";
    let icon = "headset";
    let text = "Short Break";
    document.querySelector(".loader-bg").style.border = border;
    document.querySelector(".current-state-c").style.color = color;
    document.querySelector(".loader .current-activity-icon").innerHTML = icon;
    document.querySelector(".loader .text").innerHTML = text;

    isWorking = false;
    activePage();
}


function setLongBreakTime() {
    //Atualiza a cor e o ícone para o tempo de pausa longa.
    //Atualiza a variável que determina o estado atual.
    let color = "#62a547";
    let border = "5px solid #62a547";
    let icon = "free_breakfast";
    let text = "Long Break";
    document.querySelector(".loader-bg").style.border = border;
    document.querySelector(".current-state-c").style.color = color;
    document.querySelector(".loader .current-activity-icon").innerHTML = icon;
    document.querySelector(".loader .text").innerHTML = text;

    isLongBreaking = true;
}


function updateSession() {
    if (currentSession < totalSessions) {
        currentSession++;
    } else {
        currentSession = 1;
    }

    let string = currentSession + '/' + totalSessions;
    document.querySelector(".current-sessions").innerHTML = string;
}


function updatePomo() {
    //Atualiza o pomodoro.
    //Se estiver no tempo de trabalho, verifica se esse tempo acabou, se acabou
    //reseta o indicador de progresso, limpa o pomodoro e atualiza para o tempo
    //de descanso.
    //Se estiver no tempo de descanso, verifica se o tempo acabou, se sim faz as
    // mesmas configurações anteriores, mas setando o tempo de trabalho.
    //Caso contrario, quer dizer que ainda esta passando o tempo, então atualiza
    //o tempo e o indicador de progresso.
    let isLongBreakFinished = 
        (isLongBreaking && (curentSeconds == longBreakSeconds));
    let isWorkFinished =
        (!isLongBreaking && (isWorking && (curentSeconds == workSeconds)));
    let isBreakFinished =
        (!isLongBreaking && (!isWorking && (curentSeconds == breakSeconds)));
    function auxFunc() {
        //Apenas para diminuir a quantidade de linhas
        resetRenderProgress();
        clearPomo();
        playSound();
    }

    curentSeconds++;
    if (isLongBreakFinished) {
        setWorkTime();
        auxFunc();
        updateSession();
        isLongBreaking = false;

    } else if (isWorkFinished) {
        setBreakTime();
        auxFunc();

    } else if (isBreakFinished) {
        if (currentSession == totalSessions) setLongBreakTime();
        else {
            setWorkTime();
            updateSession();
        }
        auxFunc();
        
    } else {
        renderProgress();
        let stringTime = stringTimer(
            (isLongBreaking) ? longBreakSeconds
                : ((isWorking) ? workSeconds : breakSeconds),
            curentSeconds
            );
        document.querySelector(".time-text").innerHTML = stringTime;
    }

}


function buttonPlayer() {
    //Função do botão play, muda o ícone do botão e pausa/inicia o temporizador.
    let button = document.querySelector('.button-play .material-icons');

    if (isStopped) {
        pomodoro = setInterval(updatePomo, 1000);
        button.innerText = "pause_circle_outline";
        isStopped = false;
    } else {
        pomodoro = clearInterval(pomodoro);
        button.innerText = "play_circle_outline";
        isStopped = true;
    }
}


function buttonReset() {
    clearPomo();
}


function buttonNext() {
    if (isLongBreaking) {
        resetRenderProgress();
        setWorkTime();
        clearPomo();
        updateSession();
        isLongBreaking = false;
    } else if (!isLongBreaking && (isWorking)) {
        resetRenderProgress();
        setBreakTime();
        clearPomo();
    } else if (!isLongBreaking && (!isWorking)) {
        resetRenderProgress();
        if (currentSession == totalSessions) setLongBreakTime();
        else {
            setWorkTime();
            updateSession();
        }
        clearPomo();
    }
}


function buttonSound() {
    soundEnabled = !soundEnabled;
    document.querySelector(".footer .volume .material-icons").innerHTML = 
        (soundEnabled) ? "volume_up" : "volume_off";
}



showTimer();
updateSession();
setWorkTime();