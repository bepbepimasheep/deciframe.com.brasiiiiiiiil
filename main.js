function verificar(){
    var pontos = 0;
    resp = document.getElementById("resposta").value;
    if(resp=="mandela catalogue"){
        pontos = pontos +1;
        localStorage.setItem("pontos", pontos);
        window.location="pontinhoskkkk.html";
    }
    else{
        pontos = pontos;
        localStorage.setItem("pontos",pontos);
        window.location="nop.html";
    }
}