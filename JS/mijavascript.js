alert(1); //Muestra en un recuadro la informacion ingresada en los parentesis(esto en la página)

//Variables
var numero = 1; //Aqui las variables se asignan automaticamente al dato 
var numero2 = 2; //Por ejemplo aquí sin decir que es un number javascript ya lo definio como number
var palabra = "hola mundo";
var isAuto = true;

var resp = numero + numero2; //Si unimos dos number se suman //si sumas dos string concatena
var resp2 = numero + " " + numero2 + " " + palabra + " " + isAuto; //Si sumas varios tipos de datos los define como string

console.log("Resultado" + resp) //Nos sirve para ver información en inpeccionar de la pagina para que el usuario no lo pueda ver
console.log("Resultado2" + resp2)

var titulo = document.getElementById("titulo_jumbotron") //aquí estamos llamando a un elemto por su id //document hace alución a la página
titulo.innerHTML = "Titulo cambiado por javascript"; //Con inner modificamos directamente el texto

document.getElementById("texto_jumbotron").innerHTML = "resultado01: " + resp2

function fnCambiarTexto() {
    titulo.innerHTML = "Titulo cambiado por el boton"
}

function fnCambiarEstilo() {
    titulo.style.fontSize = "50px";
}