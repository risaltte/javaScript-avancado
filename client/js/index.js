// Selecionar os campos do formulário
var campos = [
    document.querySelector('#data'),
    document.querySelector('#quantidade'),
    document.querySelector('#valor')
];

var tabela = document.querySelector('tbody');

document.querySelector('.form').addEventListener('submit', function (event) {
    
    // previnir o comportamento defaulto do formulário que é enviar e recarregar a página
    event.preventDefault();

    // criar um elemento tr (linha de uma tabela)
    var tr = document.createElement('tr');

    // iterar os campos selecionados do formulário e alimentar a tr  com as td's (valores das linhas)
    campos.forEach(function (campo) {
        var td = document.createElement('td');
        td.textContent = campo.value;
        tr.appendChild(td);
    })

    // criar uma nova td e amazenar nela o calculo do Volume
    var tdVolume = document.createElement('td');
    tdVolume.textContent = campos[1].value * campos[2].value;

    // fazer append da tdVolume na tr
    tr.appendChild(tdVolume);

    // adicionar tr (linha) na tabela
    tabela.appendChild(tr);

    //resetar os valores dos campos do formulário
    campos[0].value = '';
    campos[1].value = 1;
    campos[2].value = 0;

    //definir o focu do navegador no campos[0] do formulário - (Data)
    campos[0].focus();

});

