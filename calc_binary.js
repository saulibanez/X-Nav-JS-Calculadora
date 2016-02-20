x="0"; //guardar número en pantalla
ni=0; //número oculto o en espera.
op="no"; //operación en curso; "no" =  sin operación.

function numero(xx) { //recoge el número pulsado en el argumento.
	document.getElementById("textoPantalla").innerHTML=xx; //mostrar en pantalla
	x=xx; //guardar número;
}

function operar(s) {
	ni=x //ponemos el 1º número en "numero en espera" para poder escribir el segundo.
	op=s; //guardamos tipo de operación.
}

function igualar() {
	if (op=="no") { //no hay ninguna operación pendiente.
		document.getElementById("textoPantalla").innerHTML=0;	//mostramos el mismo número
	}else {	//con operación pendiente resolvemos
		sl=ni+op+x;	// escribimos la operación en una cadena
		sol=eval(sl);	//convertimos la cadena a código y resolvemos
		if(sol>1){
			document.getElementById("textoPantalla").innerHTML=x;
		}else{
			document.getElementById("textoPantalla").innerHTML=sol;	//mostramos la solución
			x=sol;	//guardamos la solución
		}
		op="no";	//ya no hay operaciones pendientes
	}
}

function reset() {
	document.getElementById("textoPantalla").innerHTML=0; //poner pantalla a 0
	x="0"; 	//reiniciar número en pantalla
	ni=0 	//indicador de número oculto a 0;
	op="no" //borrar operación en curso.
}