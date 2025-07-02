
function inserirNome (){
    let nomeUsuario = prompt("Qual o seu nome?");
    let elemento = document.querySelector("#nome-usuario");
    elemento.textContent = nomeUsuario;
}

inserirNome();


let linguagens = ["JavaScript", "Python","C++"];

//console.log(linguagens)[1];

const item = document.querySelector("#lista");
//item.textContent = linguagens[0] + ' - ' +  linguagens[1] + ' - ' +  linguagens[2];
item.textContent = linguagens; 