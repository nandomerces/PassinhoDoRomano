// MOSTRAR INCREMENTO // 
document.getElementById("tipos").addEventListener('change', exibirIncremento)
function exibirIncremento( ){
    let tipo = document.getElementById("tipos").value;
    if (tipo=="cesar"){
        document.getElementById("incremento").style.display="block"
    } else {
        document.getElementById("incremento").style.display="none"
    }
}

// MUDAR NOME DO BOTÃO DE ACORDO COM O QUE O USUÁRIO ESCOLHER// 
var code = document.getElementById ('code');
var decod = document.getElementById ('decod'); 
var button = document.getElementById ('button'); 
var cesar = document.getElementById ('tipos').value; 
function buttonChange () {;
    if (decod.checked) {
       button.innerText = "Decoficar!";
    } else if (code.checked){
        button.innerText="Codificar!"; 
    }
}

//BOTÂO //
var textoFinal = document.querySelector ('p'); 
var inc = parseInt (document.getElementById('incremento').value); 
console.log (inc); 
console.log (typeof inc); 

button.addEventListener('click', function (event){
    event.preventDefault(); 
    escolhaOpcao(); 
}); 


//CODIFICAR E DECODIFICAR //
function codificarCesar (mensagem){
    mensagem = mensagem.split(""); 
    console.log(mensagem); 
    let textoAtual = mensagem.map((x) => x.charCodeAt()); 
    console.log(textoAtual); 
    let textoNovo = textoAtual.map((x)=>x+inc); 
    console.log(textoNovo); 
    let mensagemNova = textoNovo.map ((x) =>String.fromCharCode(x).join("")); 
    console.log(mensagemNova);
    return mensagemNova; 
}

function decodificarCesar (mensagem){
    mensagem = mensagem.split(""); 
    let textoAtual = mensagem.map((x) => x.charCodeAt()); 
    let textoNovo = textoAtual.map((x) => x-inc);
    let mensagemNova = textoNovo.map((x) => String.fromCharCode(x).join(""));
    console.log(mensagemNova);
    return mensagemNova;  
}

function escolhaOpcao (){
    let mensagem = document.getElementById('message').value; 
    console.log (mensagem); 

    if (code.checked){
        if (cesar.checked){
            console.log ("Codificar César")
            textoFinal.innerText= codificarCesar(mensagem); 
        } else {
            console.log ("Codificar 64")
            textoFinal.innerText = btoa (mensagem); 
        }
    } else if (decod.checked){
        if (cesar.checked){
            console.log ("Decodificar César"); 
            textoFinal.innerText = decodificarCesar (mensagem); 
        } else{
            console.log ("Decodificar 64"); 
            textoFinal.innerText = atob(mensagem);
        }
    } else {
        textoFinal.innerText = "Teste com um opção válida."; 
    }
}
