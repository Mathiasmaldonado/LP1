
//pedir al usuario sus datos
let nombre= prompt("agregar el nombre:");
let apellido= prompt("agregar apellido:");
let cedula= prompt("agregar cedula:");

//agrgar los datos del usuario como objeto
let usuario= {
    nombre: nombre,
    apellido: apellido,
    cedula: cedula
};

//agregar el array para las verduras 
let verduras= ["Zanahoria","lechuga","tomate"];

//agregar array para las frutas 
let frutas= ["Manzana","Pera","Naranja"];

//agregar el objeto al usuario
usuario.frutas=frutas;
usuario.verduras=verduras;

//eliminar el ultimo item de las verduras
usuario.verduras.pop();

//eliminar el primer item de frutas 
usuario.frutas.shift();

//mostrar el objeto usuario en el navegador 
console.log(usuario);