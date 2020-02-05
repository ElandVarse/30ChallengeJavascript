const canvas = document.querySelector('#draw');
const ctx = canvas.getContext('2d'); //ctx é a ponta do lápis
canvas.width = window.innerWidth; //Pra ficar do tamanho da tela do usuário
canvas.height = window.innerHeight;

ctx.strokeStyle = '#BADA55';
ctx.lineJoin = 'round';
ctx.lineCap= 'round';

let isDrawing = false; //Impede a função de registrar o movimento do mouse quando ele não tá sendo clicado
let lastX = 0;
let lastY = 0;
let hue = 0;
let direction = true; //definir se o tamanho da ponta vai crescer ou diminuir


function draw(e){
    if(!isDrawing) return; //caso o mousado esteja clicado, aí funciona
    // console.log(e); pra ver o que tá acontecendo no console log
    ctx.strokeStyle=`hsl(${hue}, 100%, 50%)`; //cor
    ctx.beginPath();
    //sempre começa de x e vai até y
    ctx.moveTo(lastX, lastY)
    ctx.lineTo(e.offsetX, e.offsetY);
    ctx.stroke();
    /* lastX = e.offsetX;
    lastY = e.offsetY; */ 
    [lastX, lastY] = [e.offsetX, e.offsetY] //desestruturação usando array
    
    hue++; //a cada movimento mínimo do mouse vai adicionar mais +1 ao hue que altera a cor
    if(hue>=360){
        hue=0;
    }

    if(ctx.lineWidth>=60 || ctx.lineWidth <= 1){ //se a ponta da linha for maior que o número, então ela diminui, se chegar a 1, então ela aumenta
        direction = !direction;
    }
    if(direction){
        ctx.lineWidth++;
    } else{
        ctx.lineWidth--;
    }

}

canvas.addEventListener('mousedown', (e) =>{
    isDrawing = true; //Só vai registrar o movimento do mouse quando tiver clicado
    [lastX, lastY] = [e.offsetX, e.offsetY]
}); 

canvas.addEventListener('mousemove', draw); //Toda vez que o mouse se mexer ele chama a função draw
canvas.addEventListener('mouseup', () => isDrawing = false);
canvas.addEventListener('mouseout', () => isDrawing = false);