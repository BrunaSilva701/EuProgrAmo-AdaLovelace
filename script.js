document.getElementById("enviar").addEventListener("click", validaFormulario)

function validaFormulario(){
   if (document.getElementById("user-name").value != "" && 
      document.getElementById("user-email").value != "" && 
      document.getElementById("user-phone").value != ""){
         alert("Você receberá as novidades por email.")
   } else {
         alert("Preencha os campos de nome, email e telefone")
   }
}

