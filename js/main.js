// DECLARAÇÃO DE VARIÁVEIS
var nome;
var aluno;
var nota1;
var bim1;
var nota2;
var bim2;
var nota3;
var bim3;
var nota4;
var bim4;
var notas;
var tela2;


const btn = document.querySelector('.calcular');

btn.addEventListener('click', ()=> {

    tela2 = document.querySelector('.aluno-notas2');
    tela2.style.display = "flex";

    nome = document.getElementById('aluno');
    aluno = nome.value;
    document.querySelector('#aluno-nome').innerHTML = aluno;

    nota1 = document.querySelector('#bim1')
    bim1 = nota1.value;
    document.querySelector('#nota1').innerHTML = bim1;

    nota2 = document.querySelector('#bim2')
    bim2 = nota2.value;
    document.querySelector('#nota2').innerHTML = bim2;

    nota3 = document.querySelector('#bim3')
    bim3 = nota3.value;
    document.querySelector('#nota3').innerHTML = bim3;

    nota4 = document.querySelector('#bim4')
    bim4 = nota4.value;
    document.querySelector('#nota4').innerHTML = bim4;

    notas = [bim1, bim2, bim3, bim4];

    // SOMA DAS NOTAS BIMESTRAIS
    var soma = parseFloat(bim1)+parseFloat(bim2)+parseFloat(bim3)+parseFloat(bim4)
    var media = soma/4;

    document.querySelector('#media').innerHTML = `A Soma das Notas foram: </br>`+ soma;
    document.querySelector('#resultado').innerHTML = `A Média Geral foi: </br>` + media;

    // TESTE DE APROVAÇÃO
    if(media<=5) {
        document.querySelector('#resultado').style.background="red"
    }
    else {
        document.querySelector('#resultado').style.background="green"
    }
    console.log(aluno, notas, soma)
    
})

document.addEventListener('keydown', (event) => {
    var tecla = event.keyCode;
     if(tecla == 13) {
        
     }
})