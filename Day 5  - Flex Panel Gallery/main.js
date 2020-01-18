const panels = document.querySelectorAll('.panel'); /*usando o selectorAll volta uma nodelist com todos, o selector normal volta apenas o primeiro*/
// console.log(panels) teste do selector

function toggleOpen(){
    this.classList.toggle('open'); //ao que tudo indica, toggle serve pra esconder algo
}

function toggleActive(e){
    console.log(e.propertyName); //vai dizer quais efeitos tão sendo aplicados
    if (e.propertyName.includes('flex')){
        this.classList.toggle('open-active'); //ativa o open-Active que é a transição que esconde as palavras pequenas novamente
    }
}

    panels.forEach(panel => panel.addEventListener('click', toggleOpen)); //Quando clicado, o toggle será ativado por meio da função toggleOpen()
    panels.forEach(panel => panel.addEventListener('transitionend', toggleActive)); //quando a transição da primeira função acaba, esta é ativada chamando a toggleActive()