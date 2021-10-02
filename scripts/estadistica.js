document.addEventListener('DOMContentLoaded', function() {

    // Consulta los Servicios
    mostrarServicios();
});

async function mostrarServicios() {
    try {
        const data = await fetch('./data.json');
        const dataJson = await data.json();
        console.log(dataJson)

        Object.entries(dataJson);
        dataJson.forEach( data => {
            const {sexo, edad, peso, altura, imc} = data;

            console.log(data);
        });
    } catch (error) {
        console.log(error);
    }
}