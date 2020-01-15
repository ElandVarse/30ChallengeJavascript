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
}

setInterval(setDate, 1000); //atualiza a cada segundo
