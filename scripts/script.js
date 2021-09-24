let hombre = document.querySelector('#hombre');
let mujer = document.querySelector('#mujer');
let genero = document.getElementsByName('genero');
let edad = document.querySelector('#edad');
let altura = document.querySelector('#altura');
let peso = document.querySelector('#peso');
let submit = document.querySelector('.boton');


submit.addEventListener('click', e => {
    if (altura.value > 100) {
        altura.value = altura.value / 100;
    }
    if (peso.value !== undefined && altura.value !== undefined && (genero[0].value !== undefined || genero[1].value !== undefined) && edad.value !== undefined) {
        
        let result = peso.value / (Math.pow(altura.value, 2))
        for (let i = 0; i< genero.length; i++){
            if (genero[i].checked) {
                console.log(`Genero: ${genero[i].value}
                Edad: ${edad.value} años
                Peso: ${peso.value} KG
                Altura: ${altura.value} Metros`);
            }
        }
        result = result.toFixed(1);
        if (result < 18.5) {
            console.log('bajo peso');
        } else if (result < 24.9){
            console.log('Saludable');
        } else if (result < 29.9){
            console.log('Sobrepeso');
        } else if (result < 39.9){
            console.log('Obeso');
        } else if (result > 40) {
            console.log('Obesidad extrema')
        }
        console.log(result);
    } else {
        alert('Hacen falta campos.');
    }
    e.preventDefault();
})


const traerInfo = () => {
        console.log(`
        Sexo: ${hombreData}`)
}

/* ÍNDICE DE MASA CORPORAL CATEGORÍA

Por debajo de 18.5 Por debajo del peso
18.5 a 24.9 Saludable
25.0 a 29.9 Con sobrepeso
30.0 a 39.9 Obeso
Más de 40 Obesidad extrema o de alto riesgo */
