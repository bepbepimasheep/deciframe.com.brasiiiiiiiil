
function verificar(){
    var pontos = localStorage.getItem("pontos");
    resp = document.getElementById("resposta").value;
    if(resp=="petscop"){
        pontos = pontos +1;
        localStorage.setItem("pontos", pontos);
        window.location="quetaljuntardois.html";
    }
    else{
        pontos = pontos;
        localStorage.setItem("pontos",pontos);
        window.location="nop.html";
    }
}

