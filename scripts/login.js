//Ex.3) Crie uma arquivo Javascript chamado de login.js e adicione uma função chamada de validarLogin. Nessa função você deve acessar os valores dos campos email e senha criados no formulário do exercício 1 para pegar seus respectivos valores.

// Essa função deve ser executada após o evento de submit do formulário.

// Para validar o login do usuário você precisará buscar no arquivo JSON se existe algum usuário com o login fornecido e se a senha está realmente igual a do arquivo JSON.

// Se o login e senha estiverem corretos você deve armazenar em localStorage dentro de uma propriedade chamada de dados_usuario o seu nome e email.

// localStorage.setItem(// nome da propriedade)
// Em seguida você deve redirecionar para a página inicial da aplicação.

const form = document.getElementById("form")
form.addEventListener("submit", (event) => validarLogin(event))

function validarLogin(e) {
    e.preventDefault();
    const email = document.getElementById("email")
    const senha = document.getElementById("password")

    //console.log("Email:", email.value);
    //console.log("Senha:", senha.value);

    const usuarios = JSON.parse(dadosUsuarios)
    //console.log(usuarios)

    const [usuarioEncontrado] = usuarios.filter(usuario => {
        return usuario.email == email.value
})

    if(!usuarioEncontrado) {
        alert("Email Inexistente!")
        return
    }

    if(usuarioEncontrado.senha != senha.value) {
        alert("Senha inválida!")
        return
    }

    localStorage.setItem("dados_usuario", JSON.stringify({nome: usuarioEncontrado.nome, email: usuarioEncontrado.email})) // converter objetos/ arrays no localStorage

    location.href = "index.html"
}


