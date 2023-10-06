# cadastro de endereço🏡

# 📃descrição  
Esse repositório armazena o projeto de formulário de Cadastro de Endereço tirado no Bootstrap 5. Foi escolhido um modelo de formulário e o código foi trazido para o arquivo index.html desse projeto onde foram feitas alterações para deixar o formulário organizado e de fácil compreensão para o usuário final.   
confira o video abaixo de como fiz para pegar o codigo do bootstrap😉 
![](_img/explicacao.gif)  
adicionamos uma linha de ligação na pagina do index.html para ligar no arquivo do JavaScript. 

## funçoes 
Iniciamos os códigos do JavaScript  
Função para limpar o formulário

    const limparFormulario = () => {

    document.getElementById('rua').value = '';

    document.getElementById('bairro').value = '';

    document.getElementById('cidade').value = '';

    document.getElementById('estado').value = '';

    }

 

Função para verificar se o CEP é valido:  
Na primeira função utilizamos Arrown Function, que testa número informado com expressão regular<br>(espressão regular são padrões utilizados para selecionar combinações de caracteres em uma string.)  

    const eNumero = (numero) => /^[0-9]+$/.test(numero);

Na segunda função verifica tamnho do cep digitado e xeculta função de validação do cep eNumero

    const cepValido = (cep) => cep.length == 8 && eNumero(cep);

Tem a função de preencher formulário

    const preencherFormulario = (endereco) => {

    document.getElementById('rua').value = endereco.logradouro;

    document.getElementById('bairro').value = endereco.bairro;

    document.getElementById('cidade').value = endereco.localidade;

    document.getElementById('estado').value = endereco.uf;

    }

 

Consumo da API da ViaCep  
abre uma porta para acessar a URL  

    const pesquisarCep = async () => {

    limparFormulario();

    const url = `http://viacep.com.br/ws/${cep.value}/json/`;

    if (cepValido(cep.value)) {

    const dados = await fetch(url);

 

JSON tipo de linguagem  
 
    const addres = await dados.json();
``hasOwnProperty`` retorna um booleano indicando se o objeto possui a propriedade especificada como uma propriedade definida no próprio objeto em questão  

    if (addres.hasOwnProperty('erro')) {

            alert('CEP não econtrado');

        } else {
          preencherFormulario(addres);
      }

    } else {
 alert('CEP Incorreto');
 }
 }
Adiciona efeito DOM ao input do CEP para executar função pesquisarCEP  

(o DOM é um tipo de caminho que irá te auxilar nos códigos.

Para mais informações acesse o link da [mozilla](https://developer.mozilla.org/pt-BR/docs/Web/API/Document_Object_Model/Introduction))

 

    document.getElementById('cep').addEventListener('focusout', pesquisarCep);     

# 💻tecnologias utilizadas  
🔹Bootstrap  

# 🔍fontes consultadas   
[Bootstrap ](https://getbootstrap.com/)

# 🖌️autores   
| [<img loading="lazy" src="https://user-images.githubusercontent.com/127853629/273250364-9d835280-2e73-490b-b8a0-2ed10f849873.jpeg" width=115><br><sub>Maria Fernanda 🤍</sub>](https://github.com/MaferCastilho) | [<img loading="lazy" src="https://user-images.githubusercontent.com/127853629/273251863-4062651a-d4a4-4c64-9148-238e59518fb5.jpeg" width=115><br><sub>Janaina Paulino 🖤</sub>](https://github.com/janapaulinoo) |  [<img loading="lazy" src="https://user-images.githubusercontent.com/127853629/273251298-7bc5c234-5120-4135-9cb4-7d1e4b648b15.jpeg" width=115><br><sub>Iris Carolina 💗</sub>](https://github.com/iriscarolina) |
| :---: | :---: | :---: |
