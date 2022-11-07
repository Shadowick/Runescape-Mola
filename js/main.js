let usuario1 = "shadowick07"
let contraseñaUsuario1= "123456789"
let usuario2 = "molasico7"
let contraseñaUsuario2= "987654321"

function loguear(){
    let ingreso = false;

    for (let i = 4; i >= 0; i--) {
        let nombreUsuario = prompt("Ingresá el nombre de tu usuario.");
        let contraseñaUsuario = prompt("Ingresá tu contraseña.");
        if (nombreUsuario == usuario1 && contraseñaUsuario == contraseñaUsuario1 || nombreUsuario == usuario2 && contraseñaUsuario == contraseñaUsuario2) {
            alert('Tus datos son correctos, puedes ingresar al sitio.');
            ingreso = true;
            break;
/*         }else if (nombreUsuario == usuario2 && contraseñaUsuario == contraseñaUsuario2) {
            alert('Tus datos son correctos, puedes ingresar al sitio.');
            ingreso = true;
            break; */
        }else{
            alert(`Los datos ingresados son incorrectos. Te quedan ${i} oportunidades.`)
        }
    }

return ingreso;

}

if (loguear()) {
    let opciones = "";
    let expHabilidad

    while (opciones != "Salir" && opciones != "salir") {

    switch(opciones) {
        case "1":

            let gemNumber
            let gemExp
            let expSapphire = 50
            let expEmerald = 75
            let expRuby = 100
            expHabilidad = parseInt(prompt("Ingrese experiencia actual:"));
            opcionesGemas = prompt("Elegí una gema: \n1 - Sapphire. \n2 - Emerald. \n3 - Ruby.");
            switch(opcionesGemas) {
                case "1":
                    gemNumber = parseInt(prompt("Ingrese el número de gemas Sapp´hire a cortar:"));
                    gemExp = gemNumber * expSapphire;
                    alert("Obtendrás " + gemExp + " de experiencia de cortar 'Sapphire'. Alcanzarás la cantidad de " + (expHabilidad + gemExp) + " experiencia.");
                    break;
                case "2":
                    gemNumber = parseInt(prompt("Ingrese el número de gemas Emerald a cortar:"));
                    gemExp = gemNumber * expEmerald;
                    alert("Obtendrás " + gemExp + " de experiencia de cortar 'Emerald'. Alcanzarás la cantidad de " + (expHabilidad + gemExp) + " experiencia.");
                    break;
                case "3":
                    gemNumber = parseInt(prompt("Ingrese el número de gemas Ruby a cortar:"));
                    gemExp = gemNumber * expRuby;
                    alert("Obtendrás " + gemExp + " de experiencia de cortar 'Ruby'. Alcanzarás la cantidad de " + (expHabilidad + gemExp) + " experiencia.");
                    break;
                default:
                    alert("Ingresó una opción inválida. Por favor, vuelva a intentarlo.");
                    opcionesGemas = prompt("Elegí una gema: \n1 - Sapphire. \n2 - Emerald. \n3 - Ruby.");
                    break;
                }
        break;

        case "2":
            let barNumber
            let barExp
            let mithrilBar = 200
            let adamantBar = 500
            let runiteBar = 1000
            expHabilidad = parseInt(prompt("Ingrese experiencia actual:"));
            opcionesSmithing = prompt("Elegí un lingote: \n1 - Mithril. \n2 - Adamant. \n3 - Runite.");

            if(opcionesSmithing==1){
                barNumber = parseInt(prompt("Ingrese número de lingotes a templar:"));
                barExp = barNumber * mithrilBar;
                alert("Obtendrás " + barExp + " de experiencia de templar lingotes de Mithril. Alcanzarás la cantidad de " + (expHabilidad + barExp) + " experiencia.");
                break;
            }else if(opcionesSmithing==2){
                barNumber = parseInt(prompt("Ingrese número de lingotes a templar:"));
                barExp = barNumber * adamantBar;
                alert("Obtendrás " + barExp + " de experiencia de templar lingotes de Adamant. Alcanzarás la cantidad de " + (expHabilidad + barExp) + " experiencia.");
                break;
            }else if(opcionesSmithing==3){
                barNumber = parseInt(prompt("Ingrese número de lingotes a templar:"));
                barExp = barNumber * runiteBar;
                alert("Obtendrás " + barExp + " de experiencia de templar lingotes de Runite. Alcanzarás la cantidad de " + (expHabilidad + barExp) + " experiencia.");
                break;
            }else{
                alert("Ingresó una opción inválida. Por favor, vuelva a intentarlo.");
                break;
            }
            

        case "3":
            let charmNumber
            let charmExp
            let goldCharm = 100
            let greenCharm = 200
            let crimsomCharm = 300
            let blueCharm = 400

            expHabilidad = parseInt(prompt("Ingrese experiencia actual:"));
            opcionesSummoning = prompt("Elegí un Charm: \nA - Gold Charm. \nB - Green Charm. \nC - Crimsom Charm. \nD - Blue Charm.");

            if(opcionesSummoning==="A"||opcionesSummoning==="a"){
                charmNumber = parseInt(prompt("Ingrese número de charms a utilizar:"));
                charmExp = charmNumber * goldCharm;
                alert("Obtendrás " + charmExp + " de experiencia de utilizar gold charms. Alcanzarás la cantidad de " + (expHabilidad + charmExp) + " experiencia.");
                break;
            }else if(opcionesSummoning==="B"||opcionesSummoning==="b"){
                charmNumber = parseInt(prompt("Ingrese número de charms a utilizar:"));
                charmExp = charmNumber * greenCharm;
                alert("Obtendrás " + charmExp + " de experiencia de utilizar green charms. Alcanzarás la cantidad de " + (expHabilidad + charmExp) + " experiencia.");
                break;
            }else if(opcionesSummoning==="C"||opcionesSummoning==="c"){
                charmNumber = parseInt(prompt("Ingrese número de charms a utilizar:"));
                charmExp = charmNumber * crimsomCharm;
                alert("Obtendrás " + charmExp + " de experiencia de utilizar crimsom charms. Alcanzarás la cantidad de " + (expHabilidad + charmExp) + " experiencia.");
                break;
            }else if(opcionesSummoning==="D"||opcionesSummoning==="d"){
                charmNumber = parseInt(prompt("Ingrese número de charms a utilizar:"));
                charmExp = charmNumber * blueCharm;
                alert("Obtendrás " + charmExp + " de experiencia de utilizar blue charms. Alcanzarás la cantidad de " + (expHabilidad + charmExp) + " experiencia.");
                break;
            }else{
                alert("Ingresó una opción inválida. Por favor, vuelva a intentarlo.");
                break;
            }

        default:
            break;
  }

}
} else{
    alert("Su cuenta fue bloqueada. Por favor, contáctese con soporte.")
}

alert("Adiós.");