const form = document.getElementById('form-ab')
const numeroA = document.getElementById('numero-A')
const numeroB = document.getElementById('numero-B')

function validaConta(numeroA,numeroB){
    const validacao = parseInt(numeroB.value) > parseInt(numeroA.value);
    return validacao
}

form.addEventListener('submit', function(e){
    e.preventDefault();

    validaForm = validaConta(numeroA,numeroB)
    if (validaForm){
        alert(`Validado! o número (${numeroB.value}) é maior que (${numeroA.value})`)
    } else {
        alert(`Não valido! o número (${numeroA.value}) é menor que (${numeroB.value})`)
    }
})