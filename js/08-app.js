//Mediator
//Forma de comunicar varios objetos
function Vendedor(nombre) {
    this.nombre = nombre;
    this.sala = null;
}

Vendedor.prototype = {
    oferta: (articulo, precio) => {
        console.log(`Tenemos el siguiente artículo ${articulo} iniciamos con un precio de ${precio}`);
    },

    vendido: (comprador) => {
        console.log(`Vendido a ${comprador}`);
    }
}

function Comprador(nombre) {
    this.nombre = nombre;
    this.sala = null;
}

Comprador.prototype = {
    oferta: (cantidad, comprador) => {
        console.log(`${comprador.nombre}: ${cantidad}`);
    }
}

function Subasta() {
    let compradores = {};

    return {
        registrar: (usuario) => {
            compradores[usuario.nombre] = usuario;
            usuario.sala = this;
        }
    }

}

const manu = new Comprador('Manu')
const luis = new Comprador('Luis')
const vendedor = new Vendedor('Vendedor de Autos')
const subasta = new Subasta();

//La subasta debe de registrarlos
subasta.registrar(manu);
subasta.registrar(luis);
subasta.registrar(vendedor);

vendedor.oferta('Mustang 66', 500)

manu.oferta(400, manu);
luis.oferta(450, luis)
manu.oferta(500, manu)
luis.oferta(700, luis)

vendedor.vendido('Luis')