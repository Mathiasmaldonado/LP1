//"let" sirve para definir variables y "const" para las constantes 
//variables 
//mala pratica
var persona1 ={
    nombre: "Juan"
    , apellidos: "Vera"
    , años: 64
};
// buena practica
let nombres = "Fracisco Gomez"
let costo_presupuestos = 63;

// constantes 
const nocambia = false; 

console.log (typeof(persona1), persona1);
console.log (typeof(nombres), nombres);
console.log (typeof(nocambia), nocambia);
console.log (typeof(costo_presupuestos), costo_presupuestos);