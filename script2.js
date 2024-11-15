addEventListener("DOMContentLoaded",()=>{
    const nomerecebido = localStorage.getItem("name")
   document.getElementById("nomes").innerHTML = nomerecebido

   const endrecebido=localStorage.getItem("end")
   document.getElementById("ema").innerHTML=endrecebido

   const ceprecebido=localStorage.getItem("cep")
   document.getElementById("senha").innerHTML=ceprecebido

   const cpfrecebido=localStorage.getItem("cpf")
   document.getElementById("CPF").innerHTML=cpfrecebido

   const telrecebido=localStorage.getItem("tel")
   document.getElementById("tel").innerHTML=telrecebido

})
