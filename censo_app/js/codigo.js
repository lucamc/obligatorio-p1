inicio();

function inicio() {
  ocultarTodo();

  //! ------------------- ESCUCHA DE EVENTOS --------------------- //

  document.querySelector("#inicioSesion").style.display = "block";

  //TODO ------------------- PREVIA CENSISTA --------------------- //

  document // Previa Registro usuario desde Inicio sesión Censista
    .querySelector("#btnInicioSesion-registrarUsuario")
    .addEventListener("click", previaRegistrarUsuarioCensista);

  document // Previa Inicio Sesión Cencista desde Registro usuario
    .querySelector("#btnRegistroUsuario-iniciarSesion")
    .addEventListener("click", previaInicioSesionCensista);

  document // Previa Ingresar Datos censista desde Menu Censista
    .querySelector("#btnMenuCensista-ingresarDatos")
    .addEventListener("click", previaIngresarDatosCensista);

  document // Previa Menu Censista desde Ingresar datos censista
    .querySelector("#btnIngresarDatos-volverMenu")
    .addEventListener("click", previaMenuCensista);

  document // Previa Inicio Sesión Cencista desde Menu invitado
    .querySelector("#btnMenuInvitado-iniciarSesionCensista")
    .addEventListener("click", previaInicioSesionCensista);

  document // Previa Inicio Sesión Cencista desde Menu invitado
    .querySelector("#btnMenuCensita-salir")
    .addEventListener("click", previaInicioSesionCensista);

  //TODO ------------------- PREVIA INVITADO --------------------- //

  document // Previa Menu Invitado desde Inicio sesión
    .querySelector("#btnInicioSesion-ingresarInvitado")
    .addEventListener("click", previaMenuInvitado);

  //TODO ------------------- ACCIONES --------------------- //

  document // Registro de usuario Censista
    .querySelector("#btnRegistroUsuario-registrar")
    .addEventListener("click", registrarUsuarioCensista);

  document // Iniciar sesión Censista
    .querySelector("#btnInicioSesion-ingresar")
    .addEventListener("click", iniciarSesionCensista);
}

//! ------------------- FUNCIONES NAVEGACIÓN --------------------- //

// Ocultar Interfaces
function ocultarTodo() {
  document.querySelector("#inicioSesion").style.display = "none";
  document.querySelector("#registroUsuario").style.display = "none";
  document.querySelector("#menuInvitado").style.display = "none";
  document.querySelector("#menuCensista").style.display = "none";
  document.querySelector("#ingresarDatos").style.display = "none";
  document.querySelector("#consultarCensos").style.display = "none";
}

//TODO ------------------- CENSISTA --------------------- //

// Mostrar Interface Registro de usuario censita
function previaRegistrarUsuarioCensista() {
  ocultarTodo();
  document.querySelector("#registroUsuario").style.display = "block";
}

// Mostrar Interface Inicio de sesión censita
function previaInicioSesionCensista() {
  ocultarTodo();
  document.querySelector("#inicioSesion").style.display = "block";
}

// Mostrar Interface Menu Censista
function previaMenuCensista() {
  ocultarTodo();
  document.querySelector("#menuCensista").style.display = "block";
}

// Mostrar Interface Ingresar Datos Censista
function previaIngresarDatosCensista() {
  ocultarTodo();
  document.querySelector("#ingresarDatos").style.display = "block";
}

//TODO ------------------- INVITADO --------------------- //

// Mostrar Interface Menu Invitado
function previaMenuInvitado() {
  ocultarTodo();
  document.querySelector("#menuInvitado").style.display = "block";
}

//! ------------------- FUNCIONES LÓGICA --------------------- //

// Registrar nuevo usuario censista
function registrarUsuarioCensista() {
  let nombre = document.querySelector("#txtRegistroUsuario-nombre").value;
  let nombreUsuario = document.querySelector(
    "#txtRegistroUsuario-nombreUsuario"
  ).value;
  let password = document.querySelector("#txtRegistroUsuario-password").value;

  if (!valdiarPassword(password)) {
    alert("Password invalida");
  } else {
    alert("Usuario Creado");
    let nuevoCensista = new Cencista(nombre, nombreUsuario, password);
    sistema.listaCensistas.push(nuevoCensista);
  }
}

// Iniciar sesión censista
function iniciarSesionCensista() {
  //TODO: Validar usuario y password
  previaMenuCensista();
}
