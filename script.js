const btn = document.getElementById('btnPrincipal')

const createTask = (evento) => {
    // console.log(evento);
    evento.preventDefault();
    const input = document.getElementById('inputPrincipal');
    const value = input.value;
    const list = document.getElementById('listaMain');
    const task = document.createElement('li');
    task.classList.add('cardStyle');
    input.value = '';
    //? para incorporar contenido html a java se utilizan las comillas inversas y el valor que se quiera agregar desde javascript se coloca: ${valor}
    //! ALT 96 (tiene que ser en el teclado numerico) 
    const content = `<div>
            ${check}
            <span class="task">${value}</span>
        </div>
        <i class="fas fa-trash-alt trashIcon icon"></i>`;
    task.innerHTML = content; //!innerHTML: con esto se puede asignar codigo HTML <--> java
    //! un método de acceso rápido al contenido completo de un contenedor en HTML.

    list.appendChild(task);
    //? Al elemento "list" quiero agregarle un hijo

    console.log(content);
}
console.log(btn);

btn.addEventListener('click', createTask);
const check = () => {
    const i = document.createElement('i');
    i.classList.add('far');
    i.classList.add('icon');
    i.classList.add('fa-check-square');
    return i;
}