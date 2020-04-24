//trabalhano com storage

// var nome = '';


// if(typeof localStorage.nome == 'undefined'){
//     localStorage.nome = prompt('escreva seu nome: ');
//     // nomeElemt.innerHTML = localStorage.nome;
// }

//     nome = localStorage.nome;
//     document.getElementById('nome').innerHTML = nome;


    // Nesse exercicio eu confiro se tem algo no storage com a chave nome. se a resposta for sim eu apenas exibo ele na div nome que eu criei no html, caso a resposta seja nao, eu solicito um nome através d prompt do JS e coloco o nome na div


   

    // -----------------------CADASTRO-----------------------   

    function cadastro(){
        var teste = ({
            Nome: nome.value,
            Email: email.value,
            Telefone: telefone.value,
            Data: nascimento.value,
            Login: login.value,
            Senha: senha.value

        });
        nome.value = '';
        email.value = '';
        telefone.value = '';
        nascimento.value = '';
        login.value = '';
        senha.value = '';

        localStorage.setItem('Nome', teste.Nome);
        localStorage.setItem('E-mail', teste.Email);
        localStorage.setItem('Telefone', teste.Telefone);
        localStorage.setItem('DataNasc', teste.Data);
        localStorage.setItem('Login', teste.Login);
        localStorage.setItem('Senha', teste.Senha);
        console.log(teste);
        
    }

//Nesse exercício acima, pego os valores que recebo no formilário e salvo em Storage