function verificar(){
    var pontos = localStorage.getItem("pontos");
    resp = document.getElementById("resposta").value;
    if(resp=="the sun is vanished"){
        pontos = pontos +1;
        localStorage.setItem("pontos", pontos);
        window.location="tu chegou ao final.html";
    }
    else{
        pontos = pontos;
        localStorage.setItem("pontos",pontos);
        window.location="nop.html";
    }
}