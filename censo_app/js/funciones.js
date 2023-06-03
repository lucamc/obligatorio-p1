// -------------- VALIDACIÓNES REGISTRO DE USUARIO CENSISTA --------------- //

//Validación de Password
function valdiarPassword(unaPassword) {
  if (unaPassword.length < 5) {
    return false;
  }
  //Validar que exista mayuscula
  if (!existeMayusculas(unaPassword)) {
    return false;
  }
  //Validar que exista minusculas
  if (!existeMinusculas(unaPassword)) {
    return false;
  }

  return true;
}

//Comprobar si existe al menos una Mayusculas en una cadena
function existeMayusculas(cadena) {
  let cadenaMinusculas = cadena.toLowerCase();
  return cadenaMinusculas != cadena;
}

//Comprobar si existe al menos una Minusculas en una cadena
function existeMinusculas(cadena) {
  let cadenaMayusculas = cadena.toUpperCase();
  return cadenaMayusculas != cadena;
}
