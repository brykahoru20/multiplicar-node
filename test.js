const argv = require('./config/yargs').argv;

const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar');
const colors = require('colors');
let comando = argv._[0];
switch (comando) {
    case 'listar':
        console.log('listar');
        listarTabla(argv.base, argv.limite);
        break;
    case 'crear':
        console.log('crear');
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(`Archivo creado: ${archivo}`))
            .catch(e => console.log(e));
        break;
    case 'comer':
        console.log('comer');
        break;
    default:
        console.log('Comando no reconocido');
}

console.log(argv);
// let argv2 = process.argv;

// console.log(argv.limite);
// console.log(argv2);
// let parametro = argv[2];
// let base = parametro.split('=')[1];