function verificar(){
    var pontos = localStorage.getItem("pontos");
    resp = document.getElementById("resposta").value;
    if(resp=="this house has people in it"){
        pontos = pontos +1;
        localStorage.setItem("pontos", pontos);
        window.location="imagem.html";
    }
    else{
        pontos = pontos;
        localStorage.setItem("pontos",pontos);
        window.location="nop.html";
    }
}