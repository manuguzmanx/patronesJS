//Singleton 

let instancia = null;

class Persona {
    constructor(name, email) {
        if(!instancia) {
            this.name = name; 
            this.email = email;
            instancia = this;
        } else {
            return instancia
        }
    }
}

const persona = new Persona('Luis', 'luisvg18@gmail.com');
const persona2 = new Persona('Luis', 'luisvg18@gmail.com');

console.log(persona);
console.log(persona2);



