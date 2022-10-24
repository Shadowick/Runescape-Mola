let usuario1 = "shadowick07"
let contraseñaUsuario1= "123456789"
let usuario2 = "molasico7"
let contraseñaUsuario2= "987654321"

function loguear(){
    let ingreso = false;

    for (let i = 4; i >= 0; i--) {
        let nombreUsuario = prompt("Ingresá el nombre de tu usuario.");
        let contraseñaUsuario = prompt("Ingresá tu contraseña.");
        if (nombreUsuario == usuario1 && contraseñaUsuario == contraseñaUsuario1) {
            alert('Tus datos son correctos, puedes ingresar al sitio.');
            ingreso = true;
            break;
        }else if (nombreUsuario == usuario2 && contraseñaUsuario == contraseñaUsuario2) {
            alert('Tus datos son correctos, puedes ingresar al sitio.');
            ingreso = true;
            break;
        }else{
            alert("Los datos ingresados son incorrectos. Te quedan " + i + " oportunidades." )
        }
    }

return ingreso;

}

if (loguear()) {
    let opciones = prompt("Elegí una habilidad: \n1 - Crafting. \n2 - Smithing. \n3 Summoning. \n4 - Construction. \n5 - Combat. \nIngresá 'Salir' para finalizar");

    let expHabilidad
    let bonusExp

    while (opciones != "Salir" && opciones != "salir");

    switch(opciones) {
        case "1":
            alert("Elegiste la opción 1");
/*             let expSapphire = 50
            let expEmerald = 75
            let expRuby = 100
            expHabilidad = parseInt(prompt("Ingrese experiencia actual."));
            bonusExp = parseInt(prompt("Ingrese porcentaje de bonus de experiencia"));
            opcionesGemas = prompt("Elegí una gema: \nA - Sapphire. \nB - Emerald. \nB - Ruby.");
                if(A||a){

                }else if(B||b){

                }else if(C||c){

                }else{
                    alert("Debe elegir una opción válida")
                } */
            break;
        case "2":
            break;

        case "3":
            break;

        case "4":
            break;

        case "5":
            break;
        
        default:
            break;
  }

} else{
    alert("Su cuenta fue bloqueada. Por favor, contáctese con soporte.")
}




alert("Adiós.");