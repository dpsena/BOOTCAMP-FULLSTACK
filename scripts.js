function cambioNombre(idDiv){

    let nuevoNombre =prompt("digita le seudonomo del personaje")
    document.getElementById(idDiv).innerHTML=nuevoNombre
}
function validarFormulario(){
    let txtNombre=document.getElementById('nombre')
    let txtApellido=document.getElementById('apellido')
    let txtTelefono=document.getElementById('telefono')
    let edad=document.getElementById('edad')
    let txtCorreo=document.getElementById('email')
    let txtContaseña=document.getElementById('password')
    let txtnacimiento=document.getElementById('nacimiento')
    
    if(txtNombre== null || txtNombre.length ==0){
    
        alert("Error : diligencie el dato Nombre")
        return false;
    }
    
    if(txtApellido== null || txtApellido.length ==0){
    
        alert("Error : diligencie el dato Apellido ")
        return false;
    }
    
    if(txtTelefono== null || txtTelefono.length ==0){
    
        alert("Error : diligencie el dato Telefono")
        return false;
     
    }
    
    if(edad== null || edad.length ==0){
    
        alert("Error : diligencie el dato Edad")
        return false;
    }
    
    if(txtCorreo== null || txtCorreo.length ==0){
    
        alert("Error : diligencie el dato Correo")
        return false;
    }
    
    if(txtContaseña== null || txtContaseña.length ==0){
    
        alert("Error : diligencie el dato  Contraseña")
        return false;
    }
    if(txtnacimiento== null || txtnacimiento.length ==0){
    
        alert("Error : diligencie el dato Fecha de nacimiento ")
        return false;
    }
    
    alert("Gracias por su informacion")
    return true;
    }