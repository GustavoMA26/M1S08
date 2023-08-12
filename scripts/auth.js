// Ex.4) Crie um novo arquivo Javascript chamado de auth.js. 
//Neste arquivo deve conter apenas uma função que será executada sempre que qualquer página da aplicação for carregada.
// A função basicamente deverá verificar se no localStorage existe uma propriedade chamada de dados_usuario (conforme criada no exercício 3) com os dados do usuário. Caso essa propriedade não existe, deve ser redirecionado para a página de login.

const dadosLocalStorage = localStorage.getItem("dados_usuario") //Além do stringify, precisa do JSON.parse pois é um objeto


if (!dadosLocalStorage) { // Negação para caso venha nulo ou undefined, conseguimos manter a negação;
    location.href = "/login.html"
}