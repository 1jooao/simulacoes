function limparInputs() {
    document.getElementById('nome').value = '';
    document.getElementById('cpf').value = '';
    document.getElementById('senha').value = '';
    document.getElementById('email').value = '';  
}

function maskCpf() {
    let cpfInput = document.getElementById('cpf');
    let cpf = cpfInput.value.replace(/\D/g, '');
    cpf = cpf.replace(/(\d{3})(\d)/, '$1.$2');
    cpf = cpf.replace(/(\d{3})(\d)/, '$1.$2');
    cpf = cpf.replace(/(\d{3})(\d{1,2})$/, '$1-$2');
    cpfInput.value = cpf;
}

function validateCpf() {
    let cpfInput = document.getElementById('cpf');
    let cpf = cpfInput.value.replace(/\D/g, '');
    if (cpf.length !== 11) {
        alert('CPF inválido. Insira os 11 dígitos.');
    }
}

