// Função do SnackBar
function showSnackBar() {
    // Get the snackbar DIV
    var x = document.getElementById("snackbar");
  
    // Add the "show" class to DIV
    x.className = "show";
  
    // After 3 seconds, remove the show class from DIV
    setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
}


  
  function entrar() {
    
    var emailVar = emailLog.value;
    var senhaVar = senhaLog.value;
  
    if (emailVar == "" || senhaVar == "") {
      snackbar.innerHTML = "É necessário preencher todos os campos"
      showSnackBar();  
      
      return false;
    }
  
    console.log("FORM LOGIN: ", emailVar);
    console.log("FORM SENHA: ", senhaVar);
  
    fetch("/usuarios/autenticar", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            emailServer: emailVar,
            senhaServer: senhaVar
        })
    }).then(function (resposta) {
        console.log("ESTOU NO THEN DO entrar()!")
  
        if (resposta.ok) {
            console.log(resposta);
  
            resposta.json().then(json => {
                console.log(json);
                console.log(JSON.stringify(json));
  
                sessionStorage.EMAIL_USUARIO = json.email;
                sessionStorage.NOME_USUARIO = json.nome;
                sessionStorage.ID_USUARIO = json.id;
  
                snackbar.innerHTML = "Entrando..."
                showSnackBar();
  
                setTimeout(function () {
                    window.location.href = "./logado.html";
                }, 1000); // apenas para exibir o loading
  
            });
  
        } else {
  
            console.log("Houve um erro ao tentar realizar o login!");
  
            snackbar.innerHTML = "Usuário ou senha inválidos!"
            showSnackBar();
  
            resposta.text().then(texto => {
                console.error(texto);
                // finalizarAguardar(texto);
            });
        }
  
    }).catch(function (erro) {
        console.log(erro);
    })
  
    return false;
  }