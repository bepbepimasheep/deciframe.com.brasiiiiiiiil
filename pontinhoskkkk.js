function verificar(){
    var pontos = localStorage.getItem("pontos");
    resp = document.getElementById("resposta").value;
    if(resp=="cicada 3301"){
        pontos = pontos +1;
        localStorage.setItem("pontos", pontos);
        window.location="naoconfienovermelho.html";
    }
    else{
        pontos = pontos;
        localStorage.setItem("pontos",pontos);
        window.location="nop.html";
    }
}