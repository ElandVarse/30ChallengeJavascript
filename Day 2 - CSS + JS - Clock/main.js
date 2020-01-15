const secondHand = document.querySelector('.second-hand');
const minHand = document.querySelector('.min-hand')
const hourHand = document.querySelector('.hour-hand');

function setDate() {
    const now = new Date(); //Pega data atual
    const seconds = now.getSeconds(); //Pega os segundos da data
    const secondsDegrees = ((seconds / 60) * 360) + 90; //Calculo pra saber quantos graus vai estar no relógio
    secondHand.style.transform =`rotate(${secondsDegrees}deg)`; //Exportação dos graus pro css

    const minutes = now.getMinutes(); 
    const minutesDegrees = ((minutes / 60) * 360) + 90;
    minHand.style.transform=`rotate(${minutesDegrees}deg)`;

    const hours = now.getHours();
    const hoursDegrees = ((hours / 60) * 360) + 90;
    hourHand.style.transform=`rotate(${hourHand}deg)`;
    setTimeout(setDate, 1000); //Atualiza a cada segundo
}
setDate(); 

//atualiza a cada segundo
function setDigital() {
    const now = new Date(); //Pega data atual
    let h = now.getHours();
    let m = now.getMinutes();
    let s = now.getSeconds();
    let session = 'AM';

    if(h==0){
        h=12;
    }
    if(h>12){
        h = h-12;
        session='PM';
    }
    //adiciona 0 na frente do número
    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;  

    var time = `${h}:${m}:${s} ${session}`;
    //implementa o resultado dentro da div 
    document.getElementById('clockDigital').innerText = time; 
    document.getElementById('clockDigital').textContent = time;
    setTimeout(setDigital, 1000); 
}
setDigital();