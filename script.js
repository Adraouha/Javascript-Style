
/* ---------- EJERCICIO 1 ---------- */

function comprobarEdad() {

    let edad = document.getElementById("edad").value;

    let resultado = document.getElementById("resultado");

    let boton = document.getElementById("btnEdad");

    if (edad > 0 && edad <= 35) {

        document.body.style.backgroundColor = "#fafafa";
        document.body.style.color = "#111";

        resultado.innerHTML = `
          <h2>¡Eres un chaval!</h2>
          <img id="foto" src="img/hombre-mujer-jovenes.jpg" alt="joven">
        `;

    } else if (edad >= 36 && edad <= 65) {

        document.body.style.backgroundColor = "#ebebeb";
        document.body.style.color = "#222";

        resultado.innerHTML = `
          <h2>¡Pero si estás en la crema de la vida!</h2>
          <img id="foto" src="img/hombre-mujer-40años.jpg" alt="adulto">
        `;

    } else if (edad >= 65 && edad < 120) {

        document.body.style.backgroundColor = "#dcdcdc";
        document.body.style.color = "#333";

        resultado.innerHTML = `
          <h2>Felicidades, la sabiduría viene con el tiempo</h2>
          <img id="foto" src="img/hombre-mujer-mayores.jpg" alt="mayor">
        `;
    }
    else if (edad <= 0 || edad > 120) {
        resultado.innerHTML = `
          <p style="color: #ff0000;">Por favor, introduce una edad válida</p>
          <img id="foto" src="img/persona-enojada.jpg" alt="">
        `;
        boton.style.display = "hidden";
    }

}

/* ---------- EJERCICIO 2 ---------- */

function descubrirMensaje() {

    let mensaje = document.getElementById("mensajeSecreto");

    let caja = document.getElementById("caja");

    // añadir clases
    mensaje.classList.add("mostrarColor");
    mensaje.classList.add("textoGrande");

    // quitar estilo fondo
    caja.classList.remove("caja");
}

/* ---------- EJERCICIO 3 ---------- */

function pararAnimacion() {

    document.getElementById("pelota").style.animationPlayState = "paused";
}

function arrancarAnimacion() {

    document.getElementById("pelota").style.animationPlayState = "running";
}

