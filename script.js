const btn = document.getElementById('btnPrincipal')

console.log(btn);

btn.addEventListener('click', function(evento){
    evento.preventDefault();
    const input = document.getElementById('inputPrincipal');
    console.log(input.value);
})
