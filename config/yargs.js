const options = {
    base: {
        demand: true,
        alias: 'b'
    },
    limite: {
        default: 10,
        alias: 'l'
    }
}

const argv = require( 'yargs' )
    .command( 'listar', 'Imprime en consola la tabla de multiplicar', options )
    .command( 'crear', 'Crea un archivo .txt con los resultados de las tablas de multiplicar del 1 al 10.', options )
    .help()
    .argv;

module.exports = {
    argv
}