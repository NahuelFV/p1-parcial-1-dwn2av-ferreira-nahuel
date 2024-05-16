'use strict';

/*
 * Vera, Nahuel
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
            'Código': 1,
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
                    'Duración': 999,
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
        'Código' : codigo,
        Pistas : []
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
        if ( confirmar !== true) {
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
    for (const disco of discos) {{
        html += `<div class="disco">
                <h3>${disco.Nombre}</h3>
                <p>Author: ${disco.Autor}</p>
                <p>Codigo: ${disco.Código}</p>
                <p>Pistas (${disco.Pistas.length}) </p>`

        for (const pista of disco.Pistas) {
                    html += `<p>Pista: ${pista.Nombre} - `

                                if (pista["Duración"] > 180) {
                                    html += `<span class="red">Segundos: ${pista["Duración"]}</span>`
                                } else {
                                    html += `<span>Segundos: ${pista["Duración"]}</span>`
                                }

                    html += `</p>`
            }
                    html += `<h4>Otros datos</h4>`

                    html += `<p>Duracion total del disco: ${duracionTotal(disco)}</p>`

                    html += `<p>Promedio de duracion del disco: ${PromedioDuracion(disco)}</p>`

                    html += `<p>La pista con mayor duracion es de: ${mayorDuracionPista(disco)} segundos</p>`;
        }
        html += `</div>`
    }

    html += `${discosCargados()}`
    
    // Si modificaste el nombre de la variable para ir armando la cadena, también hazlo acá:
    document.getElementById('info').innerHTML = html; // <--- ahí es acá
};

// Todas las funciones que necesites:

let contador = 1;

function discosCargados() {
    let html = "";
        return html += `<span>Discos Cargados: ${contador}</span>`
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
    return promedio;
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

