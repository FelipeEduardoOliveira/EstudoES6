function cadastroPessoa(dado){
    var novoDado = {
        ...dado,
        skills: ['React', 'PHP', 'CSS', 'JS', 'HTML', 'MySql']
    };

    return novoDado;
}

var Felipe = cadastroPessoa({nome: 'Felipe', idade: 22, cargo:  'Estagiario'});

console.log(Felipe);

// Rest Operator

function listaNomes(...nome){
    var totalNome = {
        ...nome
    }
    console.log("Usando restOperator");
    console.log(totalNome);
}

listaNomes('Felipe', 'Maria', 'João');



function family(...newMember){
    var happyFamily=[
        'Valdomiro',
        'Leandro',
        'Aline',
        'Andreia',
        'Felipe',
        ...newMember
    ];
}

family('Alanna');
