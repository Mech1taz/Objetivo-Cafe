function alerta(){
    alert("Hola desde el botón");
}

function sumar(){
    let num1=document.getElementById("n1").value;
    let num2=document.getElementById("n2").value;
    let res=parseInt(num1)+parseInt(num2);
    document.getElementById("resultado").innerHTML=res;
    
}

function validarPass(){
    let pass=document.getElementById("pass").value;
    let repass=document.getElementById("repass").value;
    if(pass==repass){
        document.getElementById("checkpass").innerHTML="✅"
    }else{
        document.getElementById("checkpass").innerHTML="Los password no coinciden ⛔"
    }
}
function validarRut(){
    
}