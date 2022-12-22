//CLASE 1 Y 2, PRINCIPIOS DE JAVASCRIPT Y CLASES

class Pescado {
    constructor(raza, edad) {
        this.raza = raza;
        this.edad = edad;
    }
    //un metodo es una funcion dentro de una clase
    calcularTiempoRestante () {
        return 12 - this.edad
    }

}

const nemo = new Pescado("payaso", 7)
const dory = new Pescado("carap koi", 1)

//ver raza y edad
console.log(nemo, dory);
//calcular tiempo de vida restante
console.log(nemo.calcularTiempoRestante());


/*--------- HANDS ON LAB --------------*/

class Contador {
    contador;
    static contadorGlobal= 0;
    constructor (responsable){
        this.responsable = responsable;
        this.contador = 0;
        Contador.contadorGlobal += 1;
    }
    getResponsable() {
        return this.responsable;
    }
    contar() {
        this.contador++;
        Contador.contadorGlobal++;
    }
    getCuentaIndividual() {
        return this.contador;
    }
    getCuentaGlobal() {
        return Contador.contadorGlobal;
    }
}

instanciaDeMiContador = new Contador("contador") 
console.log(instanciaDeMiContador.contador)

/* hands on lab de la clase 2 */

class TicketManager {
    eventos;
    #_precioBaseDeGanancia = 0.2;
    static ultimoId = 0;
    constructor () {
        /* this.eventos = []; */
        if(eventos) {
            this.eventos = eventos;
        }else {
            this.eventos = [];
        }
    }

    /* METODOS */
    getEventos() {
        /* debe mostrar los eventos guardados */
        console.log(eventos)
    }
    agregarEvento(nombre, lugar, precio, capacidad = 50, fecha = new Date()) {
        TicketManager.ultimoId++;
        const evento = {
            nombre,
            lugar,
            precio,
            capacidad,
            fecha,
            id: TicketManager.ultimoId,
            participantes: [],
        }
        this.eventos.push(evento);
    }
    agregarUsuario(idEvento, idUsuario) {
        if(!!!idEvento) throw new Error ("debe ingresar un id de evento");
        const evento = this.eventos.find(evento => evento.id === idEvento);
        if(evento && !evento.participantes.some(participante => participante === idUsuario)){
            evento.participantes.push(idUsuario)
        }
    }
    ponerEventoEnGira(idEvento, nuevaLocalidad, nuevaFecha){
        const eventoOriginal = this.eventos.find(evento => evento.id === idEvento);
        return {
            ...eventoOriginal,
            id: idEvento,
            localdida: nuevaLocalidad,
            fecha: nuevaFecha,
        }

    }
}

const ticketManager = new TicketManager();
ticketManager.agregarEvento("final contra marruecos", "Qatar", 1000, undefined, "18-12");