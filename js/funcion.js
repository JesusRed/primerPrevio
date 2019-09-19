function Login(){
    var done = 0;
    var usuario = document.login.user.value;
    var password = document.login.password.value;
    if (usuario == "admin" && password == "123") {
        window.location = "index.html";
    }
} 