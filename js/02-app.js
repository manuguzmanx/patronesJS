// Constructor Parent
// Clase principal, sobre ella heredan las demás, se usan como base
// Similitud clase Abstracta

class Persona {
    constructor(nombre, email) {
        this.nombre = nombre; 
        this.email = email;
    }
}

class Cliente extends Persona {
    constructor(nombre, email, empresa) {
        super(nombre, email);
        this.empresa = empresa;
    }
}

const cliente = new Cliente('Manuel', 'luisvg@gmail.com', 'VASS');

console.log(cliente);