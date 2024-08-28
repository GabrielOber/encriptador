function btnEncriptar() {
    const textoEncriptado = encriptar(textArea.value);
    mensaje.value = textoEncriptado;
    textArea.value = "";
    ocultarImagenYTexto();  // Oculta la imagen y el texto predeterminado
}


const textArea = document.querySelector("#iTexto");
const mensaje = document.querySelector("#oTexto");
const divMostrarImagen = document.querySelector("#divMostrarImagen");
const divMostrarTexto = document.querySelector("#divMostrarTexto");

function btnEncriptar() {
    const textoEncriptado = encriptar(textArea.value);
    mensaje.value = textoEncriptado;
    textArea.value = "";
    mostrarTextoEncriptado();
}

function encriptar(stringEncriptada) {
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringEncriptada = stringEncriptada.toLowerCase();

    for (let i = 0; i < matrizCodigo.length; i++) {
        if (stringEncriptada.includes(matrizCodigo[i][0])) {
            stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
        }
    }
    return stringEncriptada;
}

function mostrarTextoEncriptado() {
    // Ocultar la imagen y el texto por defecto
    divMostrarImagen.style.display = "none";
    // Mostrar el div con el texto encriptado/desencriptado
    divMostrarTexto.style.display = "block";
}

function btnDesencriptar() {
    const textoDesencriptado = desencriptar(textArea.value);
    mensaje.value = textoDesencriptado;
    textArea.value = "";
    mostrarTextoEncriptado();
}

function desencriptar(stringDesencriptada) {
    let matrizCodigo = [["enter", "e"], ["imes", "i"], ["ai", "a"], ["ober", "o"], ["ufat", "u"]];
    stringDesencriptada = stringDesencriptada.toLowerCase();

    for (let i = 0; i < matrizCodigo.length; i++) {
        if (stringDesencriptada.includes(matrizCodigo[i][0])) {
            stringDesencriptada = stringDesencriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
        }
    }
    return stringDesencriptada;
}

function ocultarImagenYTexto() {
    divMostrarImagen.style.display = "none";
    divMostrarTexto.style.display = "block";
}
const btnCopiar = document.querySelector(".btnCopiar");

function copiarTexto() {
    const textoACopiar = mensaje.value;
    if (textoACopiar) {
        navigator.clipboard.writeText(textoACopiar)
            .then(() => {
                alert("Texto copiado al portapapeles");
            })
            .catch(err => {
                console.error("Error al copiar el texto: ", err);
            });
    } else {
        alert("No hay texto para copiar");
    }
}

btnCopiar.addEventListener("click", copiarTexto);
