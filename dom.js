/*1. Crea una página web con al menos tres párrafos de texto y dentro de ellos un número
indeterminado de enlaces (al menos uno debe enlazar a google). Haciendo tan sólo
uso del DOM muestra los siguientes datos:
• Número de enlaces de la página

• Dirección a la que enlaza el penúltimo enlace

• Numero de enlaces que enlazan a google

• Número de enlaces del tercer párrafo

document.getElementsByTagName("p")[2] tercer párrafo
*/

window.onload = () => {
	//a
	console.log(document.getElementsByTagName("a").length);
	//b
	console.log(document.getElementsByTagName("a")[document.links.length-2]);
	//c
	var n = 0;
	for (i=0;i<document.getElementsByTagName("a").length;i++){
		if (document.getElementsByTagName("a")[i] == "https://www.google.es/"){
			n++;
		}
	}
	console.log(n);
	//d
	console.log(document.getElementsByTagName("p")[2].getElementsByTagName("a").length);

	
}