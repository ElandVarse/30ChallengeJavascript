/*Seleção dos inputs*/
const inputs = document.querySelectorAll('.controls input');

function handleUpdate(){
    const suffix = this.dataset.sizing || ``; //constante suffix recebe o valor dos inputs
    document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix); //aqui é a atribuição do valor as varáveis css + o suffix pra identificar a medida
}

inputs.forEach(input => input.addEventListener('change', handleUpdate)); //array passando pelos inputs e alterando as informações
inputs.forEach(input => input.addEventListener('mousemove', handleUpdate));


