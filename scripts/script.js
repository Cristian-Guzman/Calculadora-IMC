/* Creando las variables globales */
let hombre = document.querySelector('#hombre');
let mujer = document.querySelector('#mujer');
let genero = document.getElementsByName('genero');
let edad = document.querySelector('#edad');
let altura = document.querySelector('#altura');
let peso = document.querySelector('#peso');
let submit = document.querySelector('.boton');
let flecha = document.querySelector('.flecha');
let resultado = document.querySelector('.resultado-imc');

/* Creando el addEventListener que se activa al presionar el botón "Calcular IMC" */
submit.addEventListener('click', e => {
    let edVal = edad.value;
    let alVal = altura.value;
    let peVal = peso.value;
    let vw;

    /* Si en la casilla de altura se ingresan centimetros en vez de metros, este hará una conversión de CM a M */
    if (altura.value > 100) { 
        altura.value = altura.value / 100;
    }

    /* Condicional para que sea obligatorio tener los campos del formulario lleno. */
    if ((peVal !== "" && alVal !== "" && (genero[0].value !== "" || genero[1].value !== "") && edVal !== "") && (peVal > 0 && alVal > 0 && edVal > 0)) {
        let id = numRandom(); /* id almacena un número random entre 0 a 100 */
        let sexo;
        let imc;
        let resultadoImc = peso.value / (Math.pow(altura.value, 2)); /* Operación para averiguar el IMC */
        resultado.innerHTML = resultadoImc.toFixed(2);  

        /* Comprobando si se ha seleccionado algún género en la casilla sexo */
        for (let i in genero){
            if (genero[i].checked) {
                sexo = genero[i].value
            }
        }
        
        /* Comprobando en qué categoría encaja el valor del IMC */
        if (resultadoImc < 18.5) {
            imc = 'Por debajo del peso';
            vw = 0;
        } else if (resultadoImc < 24.9){
            imc = 'Saludable';
            vw = 10;
        } else if (resultadoImc < 29.9){
            imc = 'Exceso de peso';
            vw = 20;
        } else if (resultadoImc < 39.9){
            imc = 'Obeso';
            vw = 30;
        } else if (resultadoImc > 40) {
            imc = 'Obesidad extrema o de alto riesgo';
            vw = 40
        }

        /*Cambiar la ubicación de la flecha dependiendo de la categoría del IMC */
        flechaPosicion(vw);
        
        /* usuario almacena un objeto con los valores de cada casilla en el formulario */
        let usuario = {sexo : sexo, edad : edad.value, peso : peso.value, altura : altura.value, imc : imc};
        let usuarioInfo = JSON.stringify(usuario); /* Convirtiendo usuario en una cadena */
        resultadoImc = resultadoImc.toFixed(1);
        
        /* Si el usuario existe cambiar el valor del id */
        if (localStorage.getItem(`usuario: ${id}`)) {
            id = numRandom();
            alert('Vuelve a intentarlo, el usuario no se guardó correctamente..')
        } 
        localStorage.setItem(`usuario: ${id}`, usuarioInfo); /* Almacenar en el localStorage el valor del usuario con sus respectivos valores. */
    } else {
        alert('Rellena los campos correctamente.');
    }
    e.preventDefault();
})

/* Función que retorna un valor random entre 0 y 100 */
const numRandom = () => {
    let ramdom = Math.random() * 101;
    return ramdom.toFixed(0);
}

/*Cambiar la ubicación de la flecha dependiendo de la categoría del IMC */
const flechaPosicion = vw => {
    /* 0vw = azul, 10vw = verde, 20vw = amarillo, 30vw = rojo, 40vw = morado */
    if (vw == 0) {
        flecha.style.transform =  'translate(0,0) rotate(180deg)';
    } else if (vw == 10) {
        flecha.style.transform =  'translate(10vw,0) rotate(180deg)';
    } else if (vw == 20) {
        flecha.style.transform =  'translate(20vw,0) rotate(180deg)';
    } else if (vw == 30) {
        flecha.style.transform =  'translate(30vw,0) rotate(180deg)';
    } else if (vw == 40) {
        flecha.style.transform =  'translate(40vw,0) rotate(180deg)';
    }
}