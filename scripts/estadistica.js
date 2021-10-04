/* Evento para cuando se recargue la página */
document.addEventListener('DOMContentLoaded', function() {
    
    // Consulta los Servicios
    mostrarServicios();
});

const ctx = document.querySelector('#chart').getContext('2d'); /* Tomando el valor del canvas html */
let bajoPesoH = 0, saludableH = 0, excPesoH = 0, obesoH = 0, obesoExtremoH = 0, hombreCantidad = 0, mujerCantidad = 0;
let bajoPesoM = 0, saludableM = 0, excPesoM = 0, obesoM = 0, obesoExtremoM = 0;

async function mostrarServicios() {
    try {
        const data = await fetch('./data.json'); /* Almacenando los datos del archivo Json. */
        const dataJson = await data.json();

        Object.entries(dataJson); /* Haciendo que los datos del json se puedan leer fácilmente. */
        
        agregarUsuario(dataJson); 

        dataJson.forEach( data => { /* trae cada objeto uno por uno */
            const {sexo, imc} = data; /* Usando destructuring */
            cantidadCategoriaHombre(sexo, imc);
            cantidadCategoriaMujer(sexo, imc);
        })
        
        /* Creando la gráfica con sus respectivos datos */
        let config = new Chart(ctx, {
            type: 'line',
            data: {
                labels:['Por debajo del peso', 'Saludable', 'Exceso de peso', 'Obeso', 'Obesidad extrema'],
                datasets: [
                    {
                      label: 'Hombre',
                      data: [bajoPesoH, saludableH, excPesoH, obesoH, obesoExtremoH],
                      borderColor: "cyan",
                      backgroundColor: "cyan",
                      pointStyle: 'circle',
                      pointRadius: 6
                    },
                    {
                        label: 'Mujer',
                      data: [bajoPesoM, saludableM, excPesoM, obesoM, obesoExtremoM],
                      borderColor: "red",
                      backgroundColor:"red",
                      pointStyle: 'circle',
                      pointRadius: 6 
                    }
                ]
            },
            options: {
                plugins: {
                    title: {
                        display: true,
                        text: 'Cantidad de personas de acuerdo a su género y categoría IMC',
                        font: {
                            family: 'Comic Sans MS',
                            size: 20,
                            weight: 'bold',
                            lineHeight: 1.2
                        }
                    },
                    subtitle: {
                        display: true,
                        text: 'Total: '+dataJson.length,
                        color: '#35D6ED',
                        font: {
                            family: 'Comic Sans MS',
                            size: 20,
                        }
                    },
                    legend: {
                        display: true,
                        position: 'right',
                        labels: {
                            fontColor: '#000'
                        }
                    }
                }   
            }
        });
    } catch (error) {
        console.log(error);
    }
}

/* Función para hombre y mujer en la que este filtre cuántas mujeres y hombres hay en cada categoría del imc */
function cantidadCategoriaMujer(genero, imc) {
    if (genero == "Mujer" && imc == "Bajo peso") {
        bajoPesoM++;
    } else if (genero == "Mujer" && imc == "Saludable") {
        saludableM++;
    } else if (genero == "Mujer" && imc == "Exceso de peso") {
        excPesoM++;
    } else if (genero == "Mujer" && imc == "Obeso") {
        obesoM++;
    } else if (genero == "Mujer" && imc == "Obesidad extrema") {
        obesoExtremoM++;
    }
}
function cantidadCategoriaHombre(genero, imc) {
    if (genero == "Hombre" && imc == "Bajo peso") {
        bajoPesoH++;
    } else if (genero == "Hombre" && imc == "Saludable") {
        saludableH++;
    } else if (genero == "Hombre" && imc == "Exceso de peso") {
        excPesoH++;
    } else if (genero == "Hombre" && imc == "Obeso") {
        obesoH++;
    } else if (genero == "Hombre" && imc == "Obesidad extrema") {
        obesoExtremoH++;
    }
}

/* Función para agregar todos los datos almacenados en el localStorage */
function agregarUsuario(data) {
    for (let i = 0; i < 100; i++) {
        if (localStorage.getItem('usuario: '+i)) {
            let objeto = localStorage.getItem('usuario: '+i);
            JSON.parse(objeto)
            JSON.parse(objeto)
            data.push(JSON.parse(objeto))
        }
    }
}