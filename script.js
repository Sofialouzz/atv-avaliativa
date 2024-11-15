function gravarnome(){
    const nome = document.getElementById("nome").value
    console.log(nome)
    localStorage.setItem("name", nome)
}
function gravaremail(){
    const end = document.getElementById("ema").value
    console.log(end)
    localStorage.setItem("end", end)
}
function gravarsenha(){
    const cep = document.getElementById("senha").value
    console.log(cep)
    localStorage.setItem("cep", cep)
}
function gravarcpf()
    { var cpf = document.getElementById("CPF").value
    if (cpf[3]!=".")
    {
        if (cpf[3]!=undefined)
        {
            document.getElementById("CPF").value=cpf.slice(0,3)+"."+cpf[3];
        }
    }

    if (cpf[7]!=".")
    {
        if(cpf[7]!=undefined)
        {
            document.getElementById("CPF").value=cpf.slice(0,7)+"."+cpf[7]
        }
    }
    if (cpf[11]!="-")
    {
        if(cpf[11]!=undefined)
        {
            document.getElementById("CPF").value=cpf.slice(0,11)+"-"+cpf[11]
        }
    }
    localStorage.setItem("cpf", cpf)
}
function gravartel(){
    var tel = document.getElementById("tel").value
    console.log(tel)
    tel = tel.slice(0, 14)
    console.log(tel)
    document.getElementById("tel").value = tel
    tel = document.getElementById("tel").value.slice(0, 10)
    console.log(tel)


    var tel_formato = document.getElementById("tel").value
    if (tel_formato[0] != "(") {
        if (tel_formato[0] != undefined) {
            document.getElementById("tel").value = "(" + tel_formato[0];
        }
    }

    if (tel_formato[3] != ")") {
        if (tel_formato[3] != undefined) {
            document.getElementById("tel").value = tel_formato.slice(0, 3) + ")" + tel_formato[3]
        }
    }

    if (tel_formato[9] != "-") {
        if (tel_formato[9] != undefined) {
            document.getElementById("tel").value = tel_formato.slice(0, 9) + "-" + tel_formato[9]
        }
    }
    localStorage.setItem("el", tel_formato)
}

    




  const abrirmodal = document.querySelector("#open-modal");

const fecharmodal = document.querySelector("#fechar");

const modal = document.querySelector("#modal");

const fade = document.querySelector("#modal-fade");




function abrirFechar(){


    modal.showModal()
    alert("Itens enviados");

}

fecharmodal.addEventListener("click", () => {
  modal.close();
    })
    function abrirFecha(){


        modal.showModal()}














