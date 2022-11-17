//!     IIFE = Immediately Invoked Function Expression
( () => {

const btn = document.getElementById('btnPrincipal')

const createTask = (evento) => {
    evento.preventDefault();
    const input = document.getElementById('inputPrincipal');
    const value = input.value;
    const list = document.getElementById('listaMain');
    const task = document.createElement('li');
    task.classList.add('card');
    input.value = '';
    //? para incorporar contenido html a java se utilizan las comillas inversas y el valor que se quiera agregar desde javascript se coloca: ${elemento}
    //! ALT 96 (tiene que ser en el teclado numerico) 


    const taskContent = document.createElement('div');
    taskContent.appendChild(checkComplete());
    const titleTask = document.createElement('span');
    titleTask.classList.add('task');
    titleTask.innerHTML = value;
    taskContent.appendChild(titleTask);
    //task.innerHTML = content; //!innerHTML: con esto se puede asignar codigo HTML <--> java
    //! un método de acceso rápido al contenido completo de un contenedor en HTML.
    
    task.appendChild(taskContent);
    task.appendChild(deleteIcon());
    list.appendChild(task);
    //? Al elemento "list" quiero agregarle un hijo
}

btn.addEventListener('click', createTask);

const checkComplete = () => {
    const i = document.createElement('i');
    i.classList.add('far', 'icon', 'fa-check-square');
    i.addEventListener('click', completeTask);
    return i;
}

const completeTask = (event) => {
    const element = event.target
    element.classList.toggle('fas');
    element.classList.toggle('completeIcon');
    element.classList.toggle('far');
}

const deleteIcon = () => {
    const i = document.createElement('i');
    i.classList.add('fas', 'fa-trash-alt', 'trashIcon', 'icon');
    i.addEventListener('click', deleteTask);
    return i;
}

const deleteTask = (event) => {
    const parent = event.target.parentElement;
    parent.remove();
}
}) ();

