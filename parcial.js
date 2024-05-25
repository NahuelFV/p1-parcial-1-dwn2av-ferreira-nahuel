'use strict';

/*
 * Vera Ferreira, Nahuel
 */

// Ejemplo de la estructura de un disco:
// let disco = {
//     Nombre: 'El lado oscuro de la Programación',
//     Autor: 'Los Programadores Anónimos',
//     'Código': 1,
//     Pistas: [
//         {
//             Nombre: 'Esa cajita loca llamada variablecita',
//             'Duración': 200,
//         },
//         {
//             Nombre: 'Nunca quise ser un NaN',
//             'Duración': 180,
//         },
//         {
//             Nombre: 'No quiero programar',
//             'Duración': 90,
//         },
//         {
//             Nombre: 'Bajo presión',
//             'Duración': 240,
//         },
//         {
//             Nombre: 'La odisea de las variables privadas',
//             'Duración': 120,
//         },
//         {
//             Nombre: 'Sr. Programador',
//             'Duración': 720,
//         },
//     ],
// };

// Discos:
let discos = [
    {
        Nombre: 'Lalisa',
        Autor: 'Lisa Manoban',
        'Código': 1,
        Pistas: [
            {
                Nombre: 'MONEY',
                'Duración': 6100,
            },
            {
                Nombre: 'LALISA',
                'Duración': 6200,
            },
        ],
    },
    {
        Nombre: 'El lado oscuro de la Programación',
        Autor: 'Los Programadores Anónimos',
        'Código': 2,
        Pistas: [
            {
                Nombre: 'Esa cajita loca llamada variablecita',
                'Duración': 200,
            },
            {
                Nombre: 'Nunca quise ser un NaN',
                'Duración': 180,
            },
            {
                Nombre: 'No quiero programar',
                'Duración': 240,
            },
            {
                Nombre: 'Bajo presión',
                'Duración': 240,
            },
            {
                Nombre: 'La odisea de las variables privadas',
                'Duración': 120,
            },
            {
                Nombre: 'Sr. Programador',
                'Duración': 720,
            },
        ],
    },
];

// Función Cargar:
const Cargar = () => {
    // Cositas:
    let Nombre;
    do {
        Nombre = prompt("Ingrese el Nombre del disco")

        if (Nombre === "") {
            alert("El nombre del disco no puede estar vacío");
        }
    } while (!isNaN(Nombre));

    let Autor;
    do {
        Autor = prompt("Ingrese el Autor o banda del disco")

        if (Autor === "") {
            alert("El autor del disco no puede estar vacío");
        }
    } while (!isNaN(Autor));

    let codigo;
    do {

        codigo = parseInt(prompt("Ingrese el Código numérico único del disco"));

        if (codigo < 1 || codigo >= 999) {
            alert("El código numérico único del disco no puede ser menor a 1, ni mayor a 999")
            codigo = parseInt(prompt("Ingrese el Código numérico único del disco"));
        }

        for (let disco of discos) {
            if (codigo === disco.Código) {
                alert("Este codigo ya existe, Ingrese otro.")
                codigo = parseInt(prompt("Ingrese el Código numérico único del disco"));
            }
        }
    } while (isNaN(codigo));

    /* objeto creado como dios manda */
    let disco = {
        Nombre,
        Autor,
        'Código': codigo,
        Pistas: []
    }


    let banderita = true;

    while (banderita) {
        let nombrePista;
        do {
            nombrePista = prompt("Ingrese el nombre de la pista")

            if (nombrePista === "") {
                alert("El nombre de la pista no puede estar vacío");
            }
        } while (!isNaN(nombrePista));

        let duracionPista;
        do {
            duracionPista = parseInt(prompt("Ingrese la duración de la pista en segundos"))

            if (duracionPista < 1 || duracionPista > 7200) {
                alert("La duración de cada pista debe estar entre 0 y 7200 (segundos) ")
                duracionPista = parseInt(prompt("Ingrese la duración de la pista en segundos"))
            }

        } while (isNaN(duracionPista));

        let confirmar = confirm("¿Desea agregar otra pista?")
        console.log(confirmar);
        if (confirmar !== true) {
            banderita = false
        }

        disco.Pistas.push({
            Nombre: nombrePista,
            'Duración': duracionPista
        });
    }

    discos.push(disco)

    contador++

    console.log("Disco cargado con exito");
};

// Función Mostrar:
const Mostrar = () => {
    // Variable para ir armando la cadena:
    let html = '';
    // Cositas:
    for (const disco of discos) {
        html += `<section class="disco">
            <h3>${disco.Nombre}</h3>
            <img src="img/vinilo.png" alt="Vinilo de ${disco.Nombre}">
            <p>Autor: ${disco.Autor}</p>
            <p>Código: ${disco.Código}</p>
            <h4>Pistas (${disco.Pistas.length})</h4>
            <ul>`;

        for (const pista of disco.Pistas) {
            html += `<li>Pista: ${pista.Nombre} - `;

            if (pista["Duración"] > 180) {
                html += `<span class="red">Segundos: ${pista["Duración"]}</span>`;
            } else {
                html += `<span>Segundos: ${pista["Duración"]}</span>`;
            }

            html += `</li>`;
        }

        html += `</ul>
        <h4>Otros datos</h4>
        <p>Duración total del disco: ${duracionTotal(disco)} segundos</p>
        <p>Promedio de duración del disco: ${PromedioDuracion(disco)} segundos</p>
        <p>La pista con mayor duración es de: ${mayorDuracionPista(disco)} segundos</p>
    </section>`;
    }

    html += discosCargados();
    html += maxDuracionDisco();

    // Si modificaste el nombre de la variable para ir armando la cadena, también hazlo acá:
    document.getElementById('info').innerHTML = html; // <--- ahí es acá
};

// Todas las funciones que necesites:

let contador = 2;

function discosCargados() {
    let html = "";
    return html += `<p class="contador">Discos Cargados: ${contador}</p>`
}

function duracionTotal(disco) {
    let duracionTotal = 0;
    for (const pista of disco.Pistas) {
        duracionTotal += pista["Duración"];
    }
    return duracionTotal;
}

function PromedioDuracion(disco) {
    let duracionTotal = 0;
    for (const pista of disco.Pistas) {
        duracionTotal += pista["Duración"];
    }
    let pistas = disco.Pistas.length;
    let promedio = duracionTotal / pistas;
    return parseInt(promedio);
}

function mayorDuracionPista(disco) {
    let mayorDuracion = 0;
    for (let pista of disco.Pistas) {
        if (pista['Duración'] > mayorDuracion) {
            mayorDuracion = pista['Duración'];
        }
    }
    return mayorDuracion;
}

function maxDuracionDisco() {
    let maxDuracion = 0;
    let maxDuracionNombre = '';
    for (const disco of discos) {
        let duracion = duracionTotal(disco);
        if (duracion > maxDuracion) {
            maxDuracion = duracion;
            maxDuracionNombre = disco.Nombre;
        }
    }
    return `<p class="duracion">El disco con mayor duracion es ${maxDuracionNombre} con ${maxDuracion} segundos</p>`;
}

function codigoDisco() {
    let codigo;
    do {
        codigo = parseInt(prompt("Ingrese el código numérico único del disco que desea ver"));

        if (isNaN(codigo)) {
            alert("Por favor, ingrese un número válido.");
        } else {
            const discoElegido = discos.find(disco => disco['Código'] === codigo);
            if (discoElegido) {
                mostrarDetalleDisco(discoElegido);
            } else {
                alert("No se encontró ningún disco con ese código.");
            }
        }
    } while (isNaN(codigo));

}

function mostrarDetalleDisco(disco) {
    let html = `
        <div class="disco">
            <h3>${disco.Nombre}</h3>
            <img src="img/vinilo.png" alt="vinilo">
            <p>Author: ${disco.Autor}</p>
            <p>Código: ${disco['Código']}</p>
            <p>Pistas (${disco.Pistas.length}) </p>`;

    for (const pista of disco.Pistas) {
        html += `<p>Pista: ${pista.Nombre} - `;
        if (pista.Duración > 180) {
            html += `<span class="red">Segundos: ${pista.Duración}</span>`;
        } else {
            html += `<span>Segundos: ${pista.Duración}</span>`;
        }
        html += `</p>`;
    }

    html += `<h4>Otros datos</h4>`;
    html += `<p>Duración total del disco: ${duracionTotal(disco)}</p>`;
    html += `<p>Promedio de duración del disco: ${PromedioDuracion(disco)}</p>`;
    html += `<p>La pista con mayor duración es de: ${mayorDuracionPista(disco)} segundos</p>`;
    html += `</div>`;

    document.getElementById('info').innerHTML = html;
}