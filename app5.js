const { crearArchivo, listarTabla } = require ( './multiplicar/multiplicar' );
const argv = require( 'yargs' )
    .command( 'listar', 'Imprime en consola la tabla de multiplicar', {
        base: {
            demand: true,
            alias: 'b'
        },
        limite: {
            default: 10,
            alias: 'l'
        }
    } )
    .command( 'crear', 'Crea un archivo .txt con los resultados de las tablas de multiplicar del 1 al 10.', {
        base: {
            demand: true,
            alias: 'b'
        },
        limite: {
            default: 10,
            alias: 'l'
        }
    } )
    
    .help()
    .argv;

let comando = argv._[0];        // comando crear
switch( comando ) {
    case 'crear':
        // node app5 crear --base=3
        crearArchivo( argv.base, argv.limite )
            .then( ( archivo ) => console.log( 'Archivo creado: ' + archivo ) )
            .catch( ( err ) => console.log( err ) );
        break;
    case 'listar':
        // node app5 listar --base=4
        // node app5 listar --base=4 --limite=12
        listarTabla( argv.base, argv.limite );
        break;
    case 'comer':
        console.log('* comer');
        break;
    default:
        console.log('* comando desconocido');
        break;
}

/*let parametro = argv[2];
let base = parametro.split('=')[1];*/

/**/