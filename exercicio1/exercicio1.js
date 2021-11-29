function carregar() {
var msg = window.document.getElementById('msg');
var imagem = window.document.getElementById('imagem');
var frase = window.document.getElementById('frase');
var date = new Date();
var hora = 7;
var minutos = date.getMinutes();
msg.innerHTML = "Agora são "+hora+" horas e "+minutos+" minutos";
    
    if(hora<6){
        frase.innerHTML="Boa Madrugada!";
        imagem.src='imagens/boaNoite.png';
        document.body.style.background='gray';
    }else if(hora>=6 && hora<=12){
        frase.innerHTML="Bom Dia!";
        imagem.src='imagens/bomDia.png';
        document.body.style.background='blue';
    }else if(hora>12 && hora<18){
        frase.innerHTML="Boa Tarde!";
         imagem.src='imagens/boaTarde.png';
        document.body.style.background='darkorange';
    }else if(hora>=18 && hora<=24){
        frase.innerHTML="Boa Noite!";
        imagem.src='imagens/boaNoite.png';
        document.body.style.background='gray';
             }
}