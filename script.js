const textArea=document.querySelector(".text-area");
console.log(textArea)
const mensaje=document.querySelector(".mensaje");

// La letra "e" es convertida para "enter"
// La letra "i" es convertida para "imes"
// La letra "a" es convertida para "ai"
// La letra "o" es convertida para "ober"
// La letra "u" es convertida para "ufat"

// Requisitos:

// Debe funcionar solo con letras minúsculas
// No deben ser utilizados letras con acentos ni caracteres especiales
// Debe ser posible convertir una palabra para la versión encriptada también devolver una palabra encriptada para su versión original.
// Por ejemplo:
// "gato" => "gaitober"
// gaitober" => "gato"

// La página debe tener campos para
// inserción del texto que será encriptado o desencriptado, y el usuario debe poder escoger entre as dos opciones.
// El resultado debe ser mostrado en la pantalla.
// Extras:

// Un botón que copie el texto encriptado/desencriptado para la sección de transferencia, o sea que tenga la misma funcionalidad del ctrl+C o de la opción "copiar" del menú de las aplicaciones.
// Tenemos un periodo de tiempo de cuatro semanas para desarrollar el proyecto y vamos a trabajar con el sistema ágil de desarrollo, utilizando el Trello de la siguiente forma:

// La columna Listos para iniciar presenta las tarjetas con elementos que aun no fueron desarrollados.
// En la columna En Desarrollo estarán los elementos que estés desarrollando en el momento. Al iniciar una tarea, podrás mover la tarjeta que contiene dicha tarea para esta columna.
// En la columna Pausado estarán los elementos que comenzaste a desarrollar, pero necesitaste parar por algún motivo.
// Por fin, en la columna Concluido estarán los elementos ya concluidos.
// El Trello es una herramienta de uso individual para que puedas controlar el progreso de tus actividades, pero no será evaluada.

// Buen proyecto!
function encriptar3(stringEncriptada){
    const vocales = {
        e: "enter",
        i: "imes",
        a: "ai",
        o: "ober",
        u: "ufat"
      };
    stringEncriptada=stringEncriptada.toLowerCase();
    for (let index in vocales) {
        console.log(index)
        if(stringEncriptada.includes(index) ){
            stringEncriptada=stringEncriptada.replaceAll(index,vocales[index])
        }
        
    }
    return stringEncriptada;
}
function encriptar2(mensaje) {
    const palabras = mensaje.split(" ");
    let resultado = "";
    const vocales = {
      e: "enter",
      i: "imes",
      a: "ai",
      o: "ober",
      u: "ufat"
    };
  
    for (let i = 0; i < palabras.length; i++) {
      const palabra = palabras[i];
      let palabraConvertida = "";
  
      for (let j = 0; j < palabra.length; j++) {
        const letra = palabra[j].toLowerCase();
  
        palabraConvertida += vocales[letra] || letra;
      }
  
      resultado += palabraConvertida + " ";
    }
  
    return resultado.trim();
  }
function encriptar(mensaje) {
    let palabras = mensaje.split(" ");
    let resultado = "";

    for (let i = 0; i < palabras.length; i++) {
      let palabra = palabras[i];
      let palabraConvertida = "";

      for (let j = 0; j < palabra.length; j++) {
        let letra = palabra[j].toLowerCase();

        if (letra == "e") {
          palabraConvertida += "enter";
        } else if (letra == "i") {
          palabraConvertida += "imes";
        } else if (letra == "a") {
          palabraConvertida += "ai";
        } else if (letra == "o") {
          palabraConvertida += "ober";
        } else if (letra == "u") {
          palabraConvertida += "ufat";
        } else {
          palabraConvertida += letra;
        }
      }

      resultado += palabraConvertida + " ";
      console.log(resultado)
    }

    return resultado.trim();
}
const botonEncriptar = document.getElementById("boton-encriptar");
botonEncriptar.addEventListener("click", function() {
  const mensajeInput = document.getElementById("mensaje-input");
  const resultadoP = document.getElementById("resultado");

  const mensaje = mensajeInput.value;
  const mensajeConvertido = encriptar3(mensaje);

  resultadoP.textContent = mensajeConvertido;
 // Agregar la clase "resultado" al elemento "mensaje"
 const mensajeDiv = document.getElementById("resultado");
 mensajeDiv.classList.add("resultado");
});
function desencriptar(mensaje){
  const vocales = {
    e: "enter",
    i: "imes",
    a: "ai",
    o: "ober",
    u: "ufat"
  };
mensaje=mensaje.toLowerCase();
for (let index in vocales) {
    console.log(index)
    if(mensaje.includes(vocales[index]) ){
      mensaje=mensaje.replaceAll(vocales[index],index)
    }
    
}
return mensaje;
}

const botonDesencriptar = document.getElementById("boton-desencriptar");
botonDesencriptar.addEventListener("click", function() {
  const mensajeInput = document.getElementById("mensaje-input");
  const resultadoP = document.getElementById("resultado");

  const mensaje = mensajeInput.value;
  const mensajeConvertido = desencriptar(mensaje);

  resultadoP.textContent = mensajeConvertido;

});
function copiarTexto(elemento) {
    // Creamos un rango de selección que contenga el contenido del elemento especificado
    let rango = document.createRange();
    rango.selectNode(elemento);
  
    // Seleccionamos el contenido del rango
    let seleccion = window.getSelection();
    seleccion.removeAllRanges();
    seleccion.addRange(rango);
  
    // Copiamos el contenido seleccionado al portapapeles
    document.execCommand("copy");
  
    // Limpiamos la selección
    seleccion.removeAllRanges();
  }

const botonCopiar = document.getElementById("boton-copiar");
botonCopiar.addEventListener("click", function() {
  const resultado = document.getElementById("resultado");
  copiarTexto(resultado);
});
