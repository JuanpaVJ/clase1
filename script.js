const btn = document.getElementById('btnPrincipal')

const createTask = (evento) => {
    // console.log(evento);
    evento.preventDefault();
    const input = document.getElementById('inputPrincipal');
    const value = input.value;
    input.value = '';
    console.log(value);
}

console.log(btn);


btn.addEventListener('click', createTask);
