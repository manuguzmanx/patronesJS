//Namespaces
//organización de código
//Evita colisión de nombres en el scope global
//Se crea un objeto global

const restaurantApp = {};

restaurantApp.platillos = [
    {
        platillo: 'Pizza',
        precio: 25
    },
    {
        platillo: 'Hamburguesa',
        precio: 20
    },
    {
        platillo: 'Hotdog',
        precio: 20
    }
];

restaurantApp.funciones = {
    mostrarMenu: (platillos) => {
        console.log('Bienvenidos a nuestro menú...');
        platillos.forEach((platillo, index) => {
            console.log(`${index}: ${platillo.platillo} ${platillo.precio}`);
        })
    },

    ordenar(id) {
        console.log(`Tu platillo: ${restaurantApp.platillos[id].platillo} se está preparando`);
    },

    agregarPlatillo: (platillo, precio) => {
        const nuevo = {
            platillo,
            precio
        };

        restaurantApp.platillos.push(nuevo);
    }
}


restaurantApp.funciones.ordenar(2);

const { platillos } = restaurantApp;

restaurantApp.funciones.agregarPlatillo('Alitas', 40);

restaurantApp.funciones.mostrarMenu(platillos);