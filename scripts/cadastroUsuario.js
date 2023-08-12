// Ex.7) Crie uma novo arquivo Javascript chamado cadastroUsuario.js que deve conter uma função chamada de cadastroUsuario. Nessa função você deve acessar os valores dos campos nome, **email e **senha criados no formulário do exercício anterior.

// Essa função deve verificar no arquivo JSON se já existe um usuário com o mesmo login cadastrado. Se já existir retorne uma mensagem de Esse email já está sendo utilizado. Caso não exista nenhum que já utilize o email informado, adicione os dados criando um novo usuário no arquivo dados.js.
const form = document.getElementById("form-cadastro")
form.addEventListener("submit", (event) => cadastroUsuario(event))


function cadastroUsuario(event) {
    event.preventDefault();

    const senha = document.getElementById("password");
    const email = document.getElementById("email");
    const nome = document.getElementById("name")

    const usuarios = JSON.parse(dadosUsuarios);

    const usuarioEncontrado = usuarios.filter(usuario => {
        return usuario.email == email.value
    })

    if(!!usuarioEncontrado && usuarioEncontrado.length > 0){ // !! Diferente de nulo, vazio ou undefined, conseguimos manter a negação;
        debugger
        alert("Esse email já está sendo utilizado!")
        return
    }
    
    usuarios.push({
        nome: nome.value,
        email: email.value,
        senha: senha.value
    })

    dadosUsuarios = JSON.stringify(usuarios)

}