
function esLoginCorrecto (usuarioConEmail, usuarioConEmail1, contrasenia1, contasenia) {
  if (usuarioConEmail !== usuarioConEmail1 && contasenia !== contrasenia1) {
    alert ("Su nombre de usuario y su contraseña son incorrectos");
    return false
  } else if (usuarioConEmail !== usuarioConEmail1 && contasenia === contrasenia1) {
      alert ("Su nombre de usuario es incorrecto")
      return false
  } else if (usuarioConEmail === usuarioConEmail1 && contasenia !== contrasenia1) {
      alert ("Su contraseña es incorrecta") 
      return false
}
alert (`Hola ${nombreUsuario}`)
return true 
}


function compararArroba (cadenas) {
  for (let i = 0; i < cadenas.length; i++){
   if (cadenas[i].match (/[@]/)) { 
     return true 
   }
 }
return false 
}

function esContraseniaCorta (numeroCaracteres) {
  if (contrasenia1.length < 8 ){
      return true
  }
    return false
}

function tieneLaContraseniaValoresAlfanumericos (contrasenia) {
  for ( let i = 0; i <contrasenia.length; i++) {
    if (contrasenia[i].match (/[1234567890!@#$%^&*]/))
    return true
  }
  return false
}


let usuarioConEmail = "Federico12345gmail.com"
let contasenia = "Fedes1"


let nombreUsuario = prompt ("Ingrese su Nombre")
let usuarioConEmail1 = prompt ("Ingrese su nombre de usuario")
let contrasenia1 = prompt ("Ingrese su contaseña")

const loginCorrecto = esLoginCorrecto (usuarioConEmail,usuarioConEmail1, contrasenia1, contasenia)

if (loginCorrecto) {
  let email = usuarioConEmail1
  while (!compararArroba (email)) { 
     email = prompt ("su email no tiene @, ingrese un nuevo")
  }

}

const numeroCaracteresContrasenia = esContraseniaCorta (contrasenia1) 

let contrasenia2

if (loginCorrecto) {
  contrasenia2 = contrasenia1
  if (esContraseniaCorta (contrasenia2)) {
    alert ("Su contraseña es insegura")
  }
}

if (loginCorrecto) {
  let contrasenia3 = contrasenia1
  while (!tieneLaContraseniaValoresAlfanumericos (contrasenia3)){
    contrasenia3 = prompt ("Su contraseña debe tener caracteres alfanuméricos. Desea cambiarla?")
  }
}
