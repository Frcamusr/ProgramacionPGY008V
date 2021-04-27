/*
    Expresiones regulares

    sintaxis: /patron/
    Banderas:
        i: Ignore case (ignora mayus y minus)
        g: global (busca todas las coincidencias)

    Comodines:
       -Sustitución: Define un comodín dentro del patron. El símbolo es el "."

       -Listado de caracteres válidos: Entre corchetes se pone una lista de los caracteres válidos.
       [aeiou] Con esto cogeríamos todas las vocales

       -Rangos: Entre corchetes si ponemos un guión entre dos caracteres establecemos un rango. [a-z] Todas las letras minúsculas.
       Tabla ASCII https://ascii.cl/es/

       -Mezcla entre rangos y listas:
           Podemos unir los dos anteriores en una sola expresión. [0-5ou] Serían números del 0 al 5, la letra "o" y la letra "u"

       -Cadenas completas:
           Para establecer una cadena completa debe ir entre paréntesis, si queremos más palabras irán separadas por un pipe. (lorem|amet) es válida la palabra "lorem" y la palabra "amet"

   Delimitadores:
       ^ Antes de este símbolo no puede haber nada ¡¡IMPORTANTE!!
       $ Después de este símbolo no puede haber nada ¡¡IMPORTANTE!!
       ^hola$
   Cantidad:
       - llaves: lo que está antes tiene que aparecer la cantidad exacta de veces. Hay tres combinaciones posibles.
           {n} Se tiene que repetir n veces
           {n,m} Se tiene que repetir entre n y m veces, ambas incluidas.
           {n,} Se tiene que repetir como mínimo n veces y sin máximo
       ^[a-zA-Z]{1,3}@{1}$
       -asterisco: Lo que está antes del asterisco puede estar, puede no estar y se puede repetir.  .*@.*\..*
       -interrogación: Lo que está antes de la interrogación puede no estar, pero si está solo puede aparecer una vez.
           ^[ae]?$
       - operador +: lo que está antes del + tiene que estár una vez como mínimo
       A-[0-9]+
  
   Caracteres:
       \s: Coincide con un carácter de espacio, entre ellos incluidos espacio, tab, salto de página, salto de linea y retorno de carro. ^[a-zA-Z]+\s[a-zA-Z]+$
       \S: Coincide con todo menos caracteres de espacio ^\S{5}$
       \d: Coincide con un carácter de número. Equivalente a [0-9] ^\d{5}$
       \D: Coincide con cualquier carácter no numérico. Equivalente a [^0-9] ^\D{5}$
       \w: Coincide con cualquier carácter alfanumérico, incluyendo el guión bajo. Equivalente a [A-Za-z0-9_] ^\w+@$
       \W: Coincide con todo menos caracteres de palabra. ^\W+$
     

*/



/*var texto = document.getElementById("titulo_jumbotron").textContent; //Estamos obteniendo el contenido del jumbotron es decir el texto
var reg = /[a-zA-Z0-9.] + \.\w+\@\w+\./; //reg o regEx = expresión regular y siempre inician y terminan con slach / estamos validando un email con sus simbolos
var ejemplo = "fr.camusr@duocuc.cl"

alert(reg.test(texto)); //estamos testeando dentro de la variable texto si se encuentra la palabra CLASE //alert es para mostrarlo en la página como prueba*/  


//Guardar el id del formulario y guardamos todos los imput del formulario
var formulario = document.getElementById("formulario");//obtenemos el formulario completo y lo almacenamos en la variable formulario
var inputs = document.querySelectorAll("#formulario input"); //obtenemos los inputs y los almacenamos dentro de la variable formulario
//ahora validamos nuestros input
var expresiones = {  //Arreglo con expresiones//
    txtNombre: /^[a-zA-Z]{3,10}$/,  //^ = Quiero que mi nombre no tenga espacios en blanco al principio. $ = ni al final. [a-zA-Z] quiero que tenga letras mayusculas y minusculas de la aA a la zZ. {3,10} = quiero que esto se repita minimo 3 veces y maximo 10 es decir que tenga entre 3 y 10 letras//
    txtPass: /^.{6,12}$/, //{6,12} = que tenga entre 6 a 12 caracteres//
}

var validar = (e) => {
    switch ( e.target.name ) {
        case "txtNombre":
            console.log("NOMBRE")
            break;
        case "txtPass":
            //console.log("PASS")
            if (expresiones.txtPass.test(e.target.value) ){
                document.getElementById("error").innerHTML = "";
                document.getElementById("txtPass").style.borderColor = "black";
            }else {
                document.getElementById("error").innerHTML = "La contraseña debe contener entre 6 y 12 caracteres";
                document.getElementById("txtPass").style.borderColor = "red";
            }
            break;
    }
}

inputs.forEach((input) => { //Arreglo que recorre todos los inputs
    input.addEventListener('keyup' , validar); //Cuando el usuario presione una tecla yo quiero llamar al validar
    input.addEventListener('blur' , validar);
})

document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.fixed-action-btn');
    var instances = M.FloatingActionButton.init(elems);
  });