function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('foto')
    var data = new Date()
    var hora =  data.getHours()
   //var saldacao = 'Bom dia!'
    msg.innerHTML=`Agora são ${hora} horas.`

    if (hora >=0 && hora < 12){
        img.src = './imagens/dia.png'
        document.body.style.background = '#549CC2'
    }else if(hora >= 12 && hora < 18){
        img.src = './imagens/tarde.png'
        document.body.style.background = '#B69023'
    }else{
        img.src ='./imagens/noite.png'
        document.body.style.background = '#1D2E46'
    }
}
