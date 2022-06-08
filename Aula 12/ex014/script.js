function carregar (){
    const msg = document.querySelector('#msg')
    const img = document.querySelector('.imagem')
    const data = new Date()
    const hora = data.getHours()
    
    msg.innerHTML = `Agora são ${hora} horas.`

    if (hora >= 0 && hora < 12){
        img.src = 'imagens/manha.jpg'
        document.body.style.background = '#e2cd9f'  
    }else if (hora >= 12 && hora < 18){
        img.src = 'imagens/tarde.jpg'
        document.body.style.background = '#b9846f'
    }else {
        img.src = 'imagens/noite.jpg'
        document.body.style.background = '#202020'
    }
}
