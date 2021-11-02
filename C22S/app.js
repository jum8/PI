const archivos = requires('./lecturaEscritura');
const arrayAutos = archivos.leerJson('autos');

const carrera = {
    autos: arrayAutos,
    autosPorTanda: 6,
    
    autosHabilitados: function () {
        
    },
    
    listarAutos: function (params) {
        
    },
    
    buscarPorPatente: function (patente) {
      return this.autos.find(auto => auto.patente === patente)  
    },

    filtrarPorCilindrada: function (cilindradaMaxima) {
        return this.autosHabilitados().filter(auto => auto.cilindrada <= cilindradaMaxima);
    },

    ordenarPorVelocidad: function () {
        return this.autos.sort((a, b) => a - b);
    },

    habilitarVehiculo: function (patente) {
        const autoEncontrado = this.buscarPorPatente(patente);
        autoEncontrado.sancionado = false;
        archivos.escribirJson('autos', this.autos);
        return autoEncontrado;

    },

    generarTanda: function (cilindradaMaxima, pesoMaximo, cantidadPorTanda = this.autosPorTanda) {
        const tandaAutos = this.filtrarPorCilindrada(cilindradaMaxima);
        return tandaAutos.filter(auto => auto.peso <= pesoMaximo).slice(0, cantidadPorTanda);
    },
    
};

// {
//     "piloto": "Monah Lyal",
//     "patente": "ABC123",
//     "velocidad": 161,
//     "aceleracion": 0.31,
//     "anguloDeGiro": 272,
//     "cilindrada": 1500,
//     "peso": 1262.7,
//     "puntaje": 76,
//     "sancionado": false
// }
