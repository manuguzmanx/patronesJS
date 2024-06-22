//Agregar funciones a una clase una vez que ha sido creada

class Persona {
    constructor(nombre, email) {
        this.nombre = nombre;
        this.email = email;
    }
}

class Cliente {
    constructor(nombre, email) {
        this.nombre = nombre;
        this.email = email;
    }
}

const funcionesPersona = {
    mostrarInformacion() {
        console.log(`Nombre: ${this.nombre} Email: ${this.email}`)
    },
    
    mostrarNombre(){
        console.log(`Nombre: ${this.nombre}`);
    }
}

//Añadir funcionesPersona a la clase Persona
Object.assign(Persona.prototype, funcionesPersona);
Object.assign(Cliente.prototype, funcionesPersona);

const cliente = new Persona('Manu', 'luisvg18@gmail.com');
const cliente2 = new Persona('Luis', 'luisvg18@gmail.com');

cliente.mostrarInformacion();
cliente.mostrarNombre();

cliente2.mostrarInformacion();
cliente2.mostrarNombre();