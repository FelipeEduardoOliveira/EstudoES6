//--------------------------------------------------------------------
//crinado um array

var frutas = ['maça','Uva','banana','morango','abacaxi'];

//pegando uma posição no array

console.log(frutas[3]);// Nesse console ele imprime a fruta 'Morango'; 

//_____________________________________________________________________
//--------------------------------------------------------------------
//crinado um objeto

var pessoa = {
    nome: 'Felipe',
    idade: 22,
    profissao: 'Programador',
    sexo: 'M',
    empresa:'Pagtel'
}

//pegando um valor no objeto

console.log(pessoa.nome);// Nesse console ele imprime o nome 'Felipe'; 

//_____________________________________________________________________
//--------------------------------------------------------------------
//crinado um objeto de array    

var cadastro = {
    nome: 'Felipe Eduardo',
    familiares: [{
        mae: 'Andreia Lemos',
        pai: 'Valdomiro de Oliveira Jr',
        irma: 'Aline Teixeira',
    }],
    skills: ['PHP','React','HTML','CSS','JS'],
    Empresas: ['Mais Vale', 'IdLogistic','Guanabara','Pagtel']

}

//pegando um valor no objeto

console.log(cadastro);// Nesse console ele imprime o array;
console.log(cadastro.familiares[0].mae);// Nesse console ele imprime 'Andreia Lemos';
console.log(cadastro.Empresas[0]);// Nesse console ele imprime 'Mais Vale';

//_____________________________________________________________________