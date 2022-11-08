const btn = document.getElementById('btnPrincipal')

const createTask = (evento) => {
    evento.preventDefault();
    const input = document.getElementById('inputPrincipal');
    console.log(input.value);
}

console.log(btn);


btn.addEventListener('click', createTask);
