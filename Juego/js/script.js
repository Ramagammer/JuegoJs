

window.onload;


document.getElementById('player').addEventListener("click",sumarPuntos);

let puntos = 0;
let tiempo = 60;
let necesarios = 30;

function sumarPuntos() {
	puntos++;
	document.getElementById("puntos").innerHTML = "Puntos: <b>" + puntos + "/" + necesarios + "  <b>";
	randNum = Math.round(Math.random()*600);
	randNum2 = Math.round(Math.random()*600);
	document.getElementById("player").style.marginTop = randNum + "px";
	document.getElementById("player").style.marginLeft = randNum2 + "px";
	if (puntos == 30) {
		alert("Ganaste maestro");
	}
}


function restarTiempo() {
	tiempo--
	document.getElementById("tiempo").innerHTML = "&nbsp;&nbsp;&nbsp;Tiempo: " + tiempo;
	if (tiempo == 0) {
		alert("Perdiste crack");
		tiempo = 0;
		puntos = 0;
	}
 }

setInterval(restarTiempo,1000);

  