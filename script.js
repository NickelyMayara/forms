function validaForms(){

    const nome = document.getElementById("nome").value;
    const email = document.getElementById("email").value;
    const senha = document.getElementById("senha").value;

    // validação inicial: campos vazios

    if(nome === '' || email === '' || senha === ''){
        alert(" Por favor, preencha o campo vazio!")
    }

    // validação campo de email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/  // Regex: expressão regular, pode buscar, validar e alterar qualquer padrão de caracteres em qualquer texto
    
    if(!emailRegex.test(email)){
        alert("Digite um email válido")
        return
    }

    //validação tamanho da senha
    if( senha.length > 8 ){
        alert("Por favor, preencha o campo da senha com até 8 caracteres!")
        return
    }

    else{alert("Cadastro realizado com sucesso!")}

}