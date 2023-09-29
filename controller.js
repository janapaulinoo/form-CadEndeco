'use strict'; // modo restrito 
//consumindo API de CEP, do ViaCep 
// https://viacep.com.br/ 

//função para limpar formulario 
const limparFormulario = () => {
    document.getElementById('rua').value = '';
    document.getElementById('bairro').value = '';
    document.getElementById('cidade').value = '';
    document.getElementById('estado').value = '';
}