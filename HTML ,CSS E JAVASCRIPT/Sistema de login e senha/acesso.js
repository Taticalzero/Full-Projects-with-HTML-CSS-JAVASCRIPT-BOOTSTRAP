function acesso(form){
	form.nome.value = form.nome.value.toLowerCase()
	form.senha.value = form.senha.value.toLowerCase()
	
	if(form.nome.value == "arata" && form.senha.value == "123" ||form.nome.value == "matheus" && form.senha.value == "456" ||
	form.nome.value == "ramon" && form.senha.value == "678" ||form.nome.value == "get" && form.senha.value == "555" ||
	form.nome.value == "flamenguista" && form.senha.value == "859" ||form.nome.value == "angelo" && form.senha.value == "987" ||
	form.nome.value == "ferreira" && form.senha.value == "236" ||form.nome.value == "pinaple" && form.senha.value == "745")
	{
	location = "acesso.html"
	}else{
		form.nome.value=""
		form.senha.value=""
		alert("Dados Incorretos")
		}
		}