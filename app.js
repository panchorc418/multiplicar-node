//requireds
//const multiplicar = require('./multiplicar/multiplicar')
//usando destructuracion
const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar')

//***yargs
const argv = require('./config/yargas').argv;
//se traslada al archivo config/yargas

//***COLORS */
//const colors = require('colors');
const colors = require('colors/safe');

let comando = argv._[0];

switch (comando) {
    case 'listar':
        //console.log('listar');
        listarTabla(argv.base, argv.limite);
        //  .then(listar => console.log(listar));
        break;
    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(`Archivo Creado:`, colors.green(archivo)))
            .catch(e => console.log(e));
        break;
    default:
        console.log('Este comando no esta definido');

}

//let base = '5';

//console.log(process.argv);
//let argv2 = process.argv;
//console.log(argv2);

// let parametro = argv[2];
// let base = parametro.split('=')[1];

//console.log('Limite', argv.limite);



// crearArchivo(base)
//     .then(archivo => console.log(`Archivo Creado: ${archivo}`))
//     .catch(e => console.log(e));



//console.log(process);
//console.log(multiplicar);