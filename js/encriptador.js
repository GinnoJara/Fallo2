// Elementos //

const botonEncriptar = document.querySelector(".boton-encriptar");
const textoEncriptar = document.querySelector(".encriptar");
const aviso = document.querySelector(".texto-aviso");
const respuesta = document.querySelector(".evaluar");
const contenido = document.querySelector(".tarjeta-contenedor");
const botonCopiar = document.querySelector(".boton-copiar");
const botonDesencriptar = document.querySelector(".boton-desencriptar");

// Boton Encriptar //

botonEncriptar.addEventListener("click", e=>{
    e.preventDefault();
    let texto = textoEncriptar.value;
    let tex = texto.normalize("NFD").replace(/[$\.¿\?~!\¡@#%^&*()_|}\{[\]>\<:"`;,\u0300-\u036f']/g, "");
    if(texto == ""){
        aviso.style.background = "#0A3871";
        aviso.style.color = "#ffffff";
        aviso.style.fontWeight = "800";
        aviso.textContent = "El campo de texto no debe estar vacio";
        setTimeout(()=>{
            aviso.removeAttribute("style");
        },1500);
    }
    else if(texto !== tex){
        aviso.style.background = "#0A3871";
        aviso.style.color = "#ffffff";
        aviso.style.fontWeight = "800";
        aviso.textContent = "No debe tener tildes ni caracteres especiales";
        setTimeout(()=>{
            aviso.removeAttribute("style");
        },1500);
    }
    else if(texto !== texto.toLowerCase()){
        aviso.style.background = "#0A3871";
        aviso.style.color = "#ffffff";
        aviso.style.fontWeight = "800";
        aviso.textContent = "El texto debe ser todo en minusculas";
        setTimeout(()=>{
            aviso.removeAttribute("style");
        },1500);
    }
    else{
        texto = texto.replace(/e/mg, "enter");
        texto = texto.replace(/i/mg, "imes");
        texto = texto.replace(/a/mg, "ai");
        texto = texto.replace(/o/mg, "ober");
        texto = texto.replace(/u/mg, "ufat");

        respuesta.innerHTML = texto;
        botonCopiar.style.visibility = "inherit";
        contenido.remove();
    }
});

// Boton Desencriptar //

botonDesencriptar.addEventListener("click", e=>{
    e.preventDefault();
    let texto = textoEncriptar.value;
    let tex = texto.normalize("NFD").replace(/[$\.¿\?~!\¡@#%^&*()_|}\{[\]>\<:"`;,\u0300-\u036f']/g, "");
    if(texto == ""){
        aviso.style.background = "#0A3871";
        aviso.style.color = "#ffffff";
        aviso.style.fontWeight = "800";
        aviso.textContent = "El campo de texto no debe estar vacio";
        setTimeout(()=>{
            aviso.removeAttribute("style");
        },1500);
    }
    else if(texto !== tex){
        aviso.style.background = "#0A3871";
        aviso.style.color = "#ffffff";
        aviso.style.fontWeight = "800";
        aviso.textContent = "No debe tener tildes ni caracteres especiales";
        setTimeout(()=>{
            aviso.removeAttribute("style");
        },1500);
    }
    else if(texto !== texto.toLowerCase()){
        aviso.style.background = "#0A3871";
        aviso.style.color = "#ffffff";
        aviso.style.fontWeight = "800";
        aviso.textContent = "El texto debe ser todo en minusculas";
        setTimeout(()=>{
            aviso.removeAttribute("style");
        },1500);
    }
    else{
        texto = texto.replace(/enter/mg, "e");
        texto = texto.replace(/imes/mg, "i");
        texto = texto.replace(/ai/mg, "a");
        texto = texto.replace(/ober/mg, "o");
        texto = texto.replace(/ufat/mg, "u");

        respuesta.innerHTML = texto;
        botonCopiar.style.visibility = "inherit";
        contenido.remove();
    }
});

// Boton Copiar //

botonCopiar.addEventListener("click", e=>{
    e.preventDefault();
    let copiar = respuesta;
    copiar.select();
    document.execCommand("copy");
});