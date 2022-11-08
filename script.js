const btn = document.getElementById('btnPrincipal')

console.log(btn);


btn.addEventListener('click', (evento) => {
    evento.preventDefault();
    const input = document.getElementById('inputPrincipal');
    console.log(input.value);
})
