const listaItemsRunescape = JSON.parse(localStorage.getItem("itemsRunescape"));

let contenidoTabla = "";
let tablaInfo = document.getElementById("tablaInfo");
const tierList = ["Sin rango", "T10", "T20", "T30", "T40", "T50", "T60", "T65", "T70", "T75", "T80", "T85", "T90","T95"];
const tipoItem = [null,"Armadura","Cuerpo a cuerpo","Mágica","A distancia"];
for (let key of Object.keys(listaItemsRunescape)) {
    tablaInfo.innerHTML += `<tr>
    <td>${listaItemsRunescape[key]["nombre"]}</td>
    <td>${listaItemsRunescape[key]["tipo"]}</td>
    <td>${listaItemsRunescape[key]["tier"][0] == 0 ? tierList[listaItemsRunescape[key]["tier"][0]] : 
    tierList[listaItemsRunescape[key]["tier"][0]] + " - " + tierList[listaItemsRunescape[key]["tier"][1]]} </td>
    <td>${listaItemsRunescape[key]["valor"]}</td>
    <td>${tipoItem[listaItemsRunescape[key]["tipoItem"]]}</td>
    </tr>`;
}

document.getElementById("infoVolver").onclick = () => {
    location.assign("../index.html");
}