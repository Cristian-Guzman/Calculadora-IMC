/* Creando las variables globales */
let hombre = document.querySelector('#hombre');
let mujer = document.querySelector('#mujer');
let genero = document.getElementsByName('genero');
let edad = document.querySelector('#edad');
let altura = document.querySelector('#altura');
let peso = document.querySelector('#peso');
let submit = document.querySelector('.boton');

/* Creando el addEventListener que se activa al presionar el botón "Calcular IMC" */
submit.addEventListener('click', e => {

    /* Si en la casilla de altura se ingresan centimetros en vez de metros, este hará una conversión de CM a M */
    if (altura.value > 100) { 
        altura.value = altura.value / 100;
    }

    /* Condicional para que sea obligatorio tener los campos del formulario lleno. */
    if (peso.value !== "" && altura.value !== "" && (genero[0].value !== "" || genero[1].value !== "") && edad.value !== "") {
        let id = numRandom(); /* id almacena un número random entre 0 a 100 */
        let sexo;
        let imc;
        let resultadoImc = peso.value / (Math.pow(altura.value, 2)); /* Operación para averiguar el IMC */

        /* Comprobando si se ha seleccionado algún género en la casilla sexo */
        for (let i in genero){
            if (genero[i].checked) {
                sexo = genero[i].value
            }
        }
        
        /* Comprobando en qué categoría encaja el valor del IMC */
        if (resultadoImc < 18.5) {
            imc = 'Por debajo del peso';
        } else if (resultadoImc < 24.9){
            imc = 'Saludable';
        } else if (resultadoImc < 29.9){
            imc = 'Con sobrepeso';
        } else if (resultadoImc < 39.9){
        } else if (resultadoImc > 40) {
            imc = 'Obeso';
            imc = 'Obesidad extrema o de alto riesgo';
        }
        /* usuario almacena un objeto con los valores de cada casilla en el formulario */
        let usuario = {genero : sexo, edad : edad.value, peso : peso.value, altura : altura.value, IMC : imc};
        let usuarioInfo = JSON.stringify(usuario); /* Convirtiendo usuario en una cadena */
        resultadoImc = resultadoImc.toFixed(1);
        
        /* Si el usuario existe cambiar el valor del id */
        if (localStorage.getItem(`usuario: ${id}`)) {
            id = numRandom();
            alert('Vuelve a intentarlo, el usuario no se guardó correctamente..')
        } 
        localStorage.setItem(`usuario: ${id}`, usuarioInfo); /* Almacenar en el localStorage el valor del usuario con sus respectivos valores. */
    } else {
        alert('Hace falta rellenar campos.');
    }
    e.preventDefault();
})

/* Función que retorna un valor random entre 0 y 100 */
const numRandom = () => {
        let ramdom = Math.random() * 101;
        return ramdom.toFixed(0);
}

