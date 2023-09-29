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

// Verifica se CEP é valido 
const eNumero = (numero) => /^[0-9]+$/.test(numero); // testa numero informado com expessão regular
const cepValido = (cep) => cep.lenght ==8 && eNumero(cep); // verifica tamanho do cep digitado e executa função de validação do cep eNumero
 
//função para preencher formulario 
 const preencherFormulario = (endereco) => {
    document.getElementById('rua').value = endereco.logradouro;
    document.getElementById('bairro').value = endereco.bairro;
    document.getElementById('cidade').value = endereco.localidade;
    document.getElementById('estado').value = endereco.uf; 
 } 

 //consumo da API da viaCep 
 const pesquisarCep = async () => {
    limparFormulario();
    const url = `http://viacep.com.br/ws/${cep.value}/json/`;
    if(cepValido(cep.value)){
        const dados = await fetch(url); //aguardar 
        const addres = await dados.json();
    }
 }