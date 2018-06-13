const fs = require( 'fs' );
const colors = require( 'colors' );

let listarTabla = ( base, limite ) => {
    console.log( 'listarTabla()'.yellow );
    console.log( ('Tabla del: ' + base + '').magenta );
    for( var i = 1; i <= limite; i++ ) 
        console.log( ( base + ' * ' + i + ' = ' + (base*i) ).cyan );
}

let crearArchivo = ( base, limite ) => {
    return new Promise( (resolve, reject) => {
        if( !Number(base) ) {
            reject( 'Error. La base "' + base + '" no es un numero.' );
            return;
        }
        let nombre_archivo = 'tabla_multiplicar_' + base + '.txt';
        var data = '';
        for( var i = 1; i <= limite; i++ ) {
            data += base + ' * ' + i + ' = ' + (base*i) + '\n';
        }
        fs.writeFile( './tablas/' + nombre_archivo, data, (err) => {
            if (err)
                reject( err );
            else
                resolve( nombre_archivo );
        });
    } );     
}

module.exports = {
    crearArchivo,
    listarTabla
}