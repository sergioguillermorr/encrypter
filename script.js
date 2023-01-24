const textArea = document.querySelector(".text-area");
const mensaje = document.querySelector(".mensaje");
var copyButton = document.querySelector(".copiar");

// `La letra "e" es convertida para "enter"`
// `La letra "i" es convertida para "imes"`
// `La letra "a" es convertida para "ai"`
// `La letra "o" es convertida para "ober"`
// `La letra "u" es convertida para "ufat"`

textArea.addEventListener("input", function() {
    let value = textArea.value;
    let newValue = value.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "");
    
    if (value !== newValue) {
      alert("Por favor ingrese solo minúsculas y sin acentos");
      textArea.value = newValue;
    }
  });

function btnEncriptar(){
    const textoEncriptado = encriptar(textArea.value)
    mensaje.value = textoEncriptado
    textArea.value = "";
    mensaje.style.backgroundImage = "none"
}

function encriptar(stringEncriptado){
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringEncriptado = stringEncriptado.toLowerCase()

    for(let i = 0; i < matrizCodigo.length; i++){
        if(stringEncriptado.includes(matrizCodigo[i][0])){
            stringEncriptado = stringEncriptado.replaceAll(matrizCodigo[i][0], matrizCodigo [i][1])

        }
    }
    return stringEncriptado

}

function btnDesencriptar(){
    const textoDesencriptado = desencriptar(textArea.value)
    mensaje.value = textoDesencriptado
    textArea.value = ""
}

function desencriptar(stringDesencriptado){
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringDesencriptado = stringDesencriptado.toLowerCase()

    for(let i = 0; i < matrizCodigo.length; i++){
        if(stringDesencriptado.includes(matrizCodigo[i][1])){
            stringDesencriptado = stringDesencriptado.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0])
        }
    }
    return stringDesencriptado
}

copyButton.addEventListener("click", function() {
    navigator.clipboard.writeText(mensaje.value).then(function() {
      console.log("Texto copiado al portapapeles");
    }, function(err) {
      console.error("Error al copiar el texto: ", err);
    });
  });
