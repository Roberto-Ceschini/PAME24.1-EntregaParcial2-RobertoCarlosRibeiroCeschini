function AlertaLogin() {
    var email = document.getElementById("email").value;
    var senha = document.getElementById("senha").value;
    var lembrar = document.getElementById("chk").checked ? "Sim" : "Não";

    alert("Email: " + email + "\nSenha: " + senha + "\nLembrar de mim: " + lembrar);
}
