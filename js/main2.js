let savedPIN = "5461";

function login() {
    let ingresar = false;

    for (let i=2; i>=0; i--) {
        let userPIN = prompt("Ingresá tu PIN. Tenés " + i + " oportunidades.");
        if (userPIN == savedPIN) {
            alert("Ingreso exitoso. Bienvenido/a.");
            ingresar = true;
            break;
        }else{
            alert("Error. Te quedan " + i + " intentos.");
        
        }
    }

return ingresar;

}

if(login()){
    let saldo= 1000000;
    let opción = prompt("elegí una opción: \n1 - Saldo. \n2 - Retiro de dinero. \n3 - Depósito. \nPresioná x para finalizar");

while(opción!="X"&&opción!="x");

    switch (opcion) {
        case "1":
            alert("Tu saldo es $ " + saldo);
            break;
        case "2":
            let retiro = parseInt(p)
            break;
        case "3":
            break;
        default:
            break;
    }

}else {
    alert("Retendremos tu tarjeta por seguridad");
}

alert("Adiós.");