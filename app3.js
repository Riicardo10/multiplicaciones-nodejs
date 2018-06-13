const multiplicar = require ( './multiplicar/multiplicar' );
let base = 1;

multiplicar.crearArchivo( base )
    .then( (archivo) => console.log( 'Archivo creado: ' + archivo ) )
    .catch( (err) => {
        
    });;