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

//!EXPORTANDO ARCHIVOS A OTRO DOC
export default checkComplete;