$(document).ready(function(){

	// Esconde a div com icone Z-A
	$("#za").hide();
	$("#az").hide();

	// Ordena os nomes em ordem alfabética
	$(function(){
		$("#contatos").tablesorter();
	});
	
	$("#ordem").click(function(){

		// Esconde a div com o icone desordenado
		$("#sort").hide();

		// Div do icone A-Z
		var ordemCrescente = document.querySelector("#az");

		// Esconde Z-A e mostra A-Z  OU  mostra Z-A e esconde A-Z
		if (ordemCrescente.style.display == "none"){
			$("#az").show();
			$("#za").hide();
		} else {
			$("#az").hide();
			$("#za").show();
		}

	});
});

