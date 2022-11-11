const btn = document.getElementById('btnPrincipal')

const createTask = (evento) => {
    // console.log(evento);
    evento.preventDefault();
    const input = document.getElementById('inputPrincipal');
    const value = input.value;
    const task = document.getElementById('card_agregada');
    input.value = '';
    //? para incorporar contenido html a java se utilizan las comillas inversas 
    //! ALT 96 (tiene que ser en el teclado numerico)
    const content = `<div>
            <i class="far fa-check-square icon"></i>
            <span class="task">${value}</span>
        </div>
        <i class="fas fa-trash-alt trashIcon icon"></i>`;
    task.innerHTML = content;
    console.log(content);
}

console.log(btn);


btn.addEventListener('click', createTask);
