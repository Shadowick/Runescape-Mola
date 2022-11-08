let usuario1 = "shadowick07"
let contraseñaUsuario1= "123456789"
let usuario2 = "molasico7"
let contraseñaUsuario2= "987654321"


opcionesInicio = prompt("Elige una de las siguiente opciones: \n1 - Calculadora. \n2 - Items para skills. \nSalir.")

while (opcionesInicio.toLowerCase != "salir") {
    if (opcionesInicio == 1) {
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

            while (opciones.toLowerCase != "salir") {
                opciones = prompt("Elegí una gema: \n1 - Crafting. \n2 - Smithing. \n3 - Summoning. \nSalir.");

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
                            gemNumber = parseInt(prompt("Ingrese el número de gemas Sapphire a cortar:"));
                            gemExp = gemNumber * expSapphire;
                            alert(`Obtendrás ${gemExp} de experiencia de cortar 'Sapphire'. Alcanzarás la cantidad de ${(expHabilidad + gemExp)} experiencia.`);
                            break;
                        case "2":
                            gemNumber = parseInt(prompt("Ingrese el número de gemas Emerald a cortar:"));
                            gemExp = gemNumber * expEmerald;
                            alert(`Obtendrás ${gemExp} de experiencia de cortar 'Emerald'. Alcanzarás la cantidad de ${(expHabilidad + gemExp)} experiencia.`);
                            break;
                        case "3":
                            gemNumber = parseInt(prompt("Ingrese el número de gemas Ruby a cortar:"));
                            gemExp = gemNumber * expRuby;
                            alert(`Obtendrás ${gemExp} de experiencia de cortar 'Ruby'. Alcanzarás la cantidad de ${(expHabilidad + gemExp)} experiencia.`);
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
                        alert(`Obtendrás ${barExp} de experiencia de templar lingotes de Mithril. Alcanzarás la cantidad de ${(expHabilidad + barExp)} experiencia.`);
                        break;
                    }else if(opcionesSmithing==2){
                        barNumber = parseInt(prompt("Ingrese número de lingotes a templar:"));
                        barExp = barNumber * adamantBar;
                        alert(`Obtendrás ${barExp} de experiencia de templar lingotes de Adamant. Alcanzarás la cantidad de ${(expHabilidad + barExp)} experiencia.`);
                        break;
                    }else if(opcionesSmithing==3){
                        barNumber = parseInt(prompt("Ingrese número de lingotes a templar:"));
                        barExp = barNumber * runiteBar;
                        alert(`Obtendrás ${barExp} de experiencia de templar lingotes de Runite. Alcanzarás la cantidad de ${(expHabilidad + barExp)} experiencia.`);
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
                        alert(`Obtendrás ${charmExp} de experiencia de utilizar gold charms. Alcanzarás la cantidad de ${(expHabilidad + charmExp)} experiencia.`);
                        break;
                    }else if(opcionesSummoning==="B"||opcionesSummoning==="b"){
                        charmNumber = parseInt(prompt("Ingrese número de charms a utilizar:"));
                        charmExp = charmNumber * greenCharm;
                        alert(`Obtendrás ${charmExp} de experiencia de utilizar green charms. Alcanzarás la cantidad de ${(expHabilidad + charmExp)} experiencia.`);
                        break;
                    }else if(opcionesSummoning==="C"||opcionesSummoning==="c"){
                        charmNumber = parseInt(prompt("Ingrese número de charms a utilizar:"));
                        charmExp = charmNumber * crimsomCharm;
                        alert(`Obtendrás ${charmExp} de experiencia de utilizar crimsom charms. Alcanzarás la cantidad de ${(expHabilidad + charmExp)} experiencia.`);
                        break;
                    }else if(opcionesSummoning==="D"||opcionesSummoning==="d"){
                        charmNumber = parseInt(prompt("Ingrese número de charms a utilizar:"));
                        charmExp = charmNumber * blueCharm;
                        alert(`Obtendrás ${charmExp} de experiencia de utilizar blue charms. Alcanzarás la cantidad de ${(expHabilidad + charmExp)} experiencia.`);
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
    }else if(opcionesInicio == 2){
        class Skill {

            constructor(nombreItem, valorItem, expItem, skillTiempoSeg, id){
                this.nombreItem = nombreItem;
                this.valorItem = parseInt(valorItem);
                this.expItem = parseInt(expItem);
                this.skillTiempoSeg = parseInt(skillTiempoSeg);
                this.expPorSeg = parseInt(expItem / skillTiempoSeg);
                this.id = id;
            }
        
            asignarId(array) {
                this.id = array.length;
            }
        }
        
        const Skills = [
        
            new Skill("Bronze bar" , 10 , 50 , 2 , 1),
            new Skill("Iron bar" , 40 , 100 , 4 , 2),
            new Skill("Steel bar" , 100 , 300 , 8 , 3),
            new Skill("Mithril bar" , 400 , 500 , 14 , 4),
            new Skill("Adamantium bar" , 1000 , 20 , 300 , 5),
            new Skill("Rune bar" , 10000 , 2500 , 40 , 6),
        ]
        
        console.log(Skills);
        
        let continuar  = true;
        
        while(continuar){
            let ingreso = prompt("Ingresa los datos del Skill: Nombre del Item, Valor del Item, Cantidad de experiencia que brinda, Tiempo que tarda en utilizarlo, separados por una barra diagonal (/). Ingresa X para finalizar");
        
            if (ingreso.toUpperCase() == "X") {
                continuar = false;
                break;
            }
        
            const datos = ingreso.split("/");
        
            const skill = new Skill(datos[0],datos[1],datos[2],datos[3]);
        
            Skills.push(skill);
            skill.asignarId(Skills);
            console.log(Skills);
        }
        
        let orden = prompt("Elegí el tipo de orden deseado \n1 - Nombre de los Items (A a Z) \n2 - Nombre de los Items (Z a A) \n3 - Menor a mayor duración \n4 - Mayor a menor experiencia. \n5 - Mayor eficiencia de experiencia por segundo. \nIngrese cualquier otro caracter si no quiere ingresar un item nuevo.");

        function ordenar(orden , array) {
            let arrayOrdenado = array.slice(0);
            
        
            switch (orden) {
                case "1":
                    let nombreItemAscendente = arrayOrdenado.sort((a,b)=>a.nombreItem.localeCompare(b.nombreItem));
                    return nombreItemAscendente;
        
                case "2":
                    let nombreItemDescendente = arrayOrdenado.sort((b,a)=>b.nombreItem.localeCompare(a.nombreItem));
                    return nombreItemDescendente;
                
                case "3":
                    return arrayOrdenado.sort((a,b)=>b.skillTiempoSeg - a.skillTiempoSeg);
        
                case "4":
                    return arrayOrdenado.sort((a,b)=>a.expItem - b.expItem);

                case "5":
                    return arrayOrdenado.sort((a,b)=>b.expPorSeg - a.expPorSeg);
        
                default:
                    alert("No es una opción válida. Por favor, intente nuevamente.");
                    return arrayOrdenado;
            }
        }
        
        function resultado(array){
            let lista="";
        
            array.forEach(element => {
                lista+= "Item: "+element.nombreItem +"\nValor: "+element.valorItem +" monedas de oro." + "\nExperiencia:" +element.expItem +" de experiencia." + "\nTiempo de utilización: " +element.skillTiempoSeg +" segundos." + "\nMayor experiencia en el tiempo: " +element.expPorSeg +" exp. por segundo.\n\n"
            });
        
            return lista;
        }
        alert(resultado(ordenar(orden,Skills)));
       
    }else{
        alert("Ingresó un caracter inválido.");
    }
}
alert("Adiós.");