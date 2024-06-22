//Para organizar código 
//Module Parent

const modulo1 = (function () {
    const nombre = 'Manuu';

    function hola() {
        console.log('Hola');
    }

    return {
        nombre,
        hola
    }
})();