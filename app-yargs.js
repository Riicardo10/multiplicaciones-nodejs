const { crearArchivo, listarTabla } = require ( './multiplicar/multiplicar' );
const { argv } = require( './config/yargs' );
const colors = require( 'colors' );

let comando = argv._[0];        // comando crear
switch( comando ) {
    case 'crear':
        crearArchivo( argv.base, argv.limite )
            .then( ( archivo ) => console.log( 'Archivo creado: '.blue + (archivo).white ) )
            .catch( ( err ) => console.log( err ) );
        break;
    case 'listar':
        listarTabla( argv.base, argv.limite );
        break;
    case 'comer':
        console.log('* comer');
        break;
    default:
        console.log('* comando desconocido');
        break;
}