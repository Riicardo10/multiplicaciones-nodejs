const fs = require( 'fs' );

var data = '';

let base = 4;

let nombre_archivo = 'tabla_multiplicar_' + base + '.txt';

for( var i = 1; i <= 10; i++ ) {
    data += base + ' * ' + i + ' = ' + (base*i) + '\n';
}

fs.writeFile( './tablas/' + nombre_archivo, data, (err) => {
    if (err) throw err;
    console.log('El archivo ' + nombre_archivo + ' se ha escrito!');
});