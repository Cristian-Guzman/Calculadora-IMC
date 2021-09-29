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
    if (peso.value !== "" && altura.value !== "" && (genero[0].value !== "" || genero[1].value !== "") && edad.value !== "") {
        
        let id = 0;
        let cas = [];
        let sexo;
        let imc;
        let result = peso.value / (Math.pow(altura.value, 2));

        let val = localStorage.getItem(`usuario: ${id}`);
        for (let i = 0; i < 10; i++) {
         cas.push(i)   
        }

        /* cas.forEach(e => {
            
            if (localStorage.getItem(`usuario: ${id}`)) {
                console.log(e)
                id = e;
                console.log('is working')
            } else {
                console.log('is not working')
            }
        });

        do {
         id++;   
        } while (val); */

        for (let i in genero){
            if (genero[i].checked) {
                sexo = genero[i].value
            }
        }
        let usuario = {genero : sexo, edad : edad.value, peso : peso.value, altura : altura.value, IMC : imc};
        let usuarioStr = JSON.stringify(usuario);
        result = result.toFixed(1);
        if (result < 18.5) {
            imc = 'Por debajo del peso';
        } else if (result < 24.9){
            imc = 'Saludable';
        } else if (result < 29.9){
            imc = 'Con sobrepeso';
        } else if (result < 39.9){
        } else if (result > 40) {
            imc = 'Obeso';
            imc = 'Obesidad extrema o de alto riesgo';
        }
        for (let i = 0; i < 10; i++) {           
            if (localStorage.getItem(id)) {
                id = i;
                localStorage.setItem(id, usuarioStr)
            } else {
                localStorage.setItem(id, usuarioStr)
            }
        }
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
