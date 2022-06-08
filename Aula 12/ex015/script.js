const btn = document.querySelector('#button')

btn.addEventListener('click', () => {
    const data = new Date()
    const ano = data.getFullYear()
    const fAno = document.querySelector('#text-ano')
    const res = document.querySelector('#res')
    const img = document.querySelector('#foto')
    const fotoC = document.querySelector('.foto-container')
    
    
    if (fAno.value.length === 0 || Number(fAno.value) > ano){
        alert(`[ERRO] Verifique os dados e tente novamente!`)
    }else{
        const fSex = document.getElementsByName('radio-sex')
        const idade = ano - Number(fAno.value)

        let genero = ''

        if (fSex[0].checked){
            document.body.style.background ='skyblue'
            genero = 'masculino'
            if (idade >= 0 && idade < 10){
               img.src = 'imagens/bebe-menino.jpg'
               fotoC.style.display = 'block'
               img.style.display = 'block'   
            }else if (idade < 21){
                img.src = 'imagens/jovem-menino.jpg'
                fotoC.style.display = 'block'
               img.style.display = 'block'  
            }else if (idade < 50){
                img.src = 'imagens/adulto-homem.jpg'
                fotoC.style.display = 'block'
                img.style.display = 'block' 
            }else {
                img.src = 'imagens/idoso-homem.jpg'
                fotoC.style.display = 'block'
                img.style.display = 'block'
            }
        }else {
            document.body.style.background = 'pink' 
            genero = 'feminino'
            if (idade >= 0 && idade < 10){
                img.src = 'imagens/bebe-menina.jpg'
                fotoC.style.display = 'block'
                img.style.display = 'block'
            }else if (idade < 21){
                img.src = 'imagens/jovem-menina.jpg'
                fotoC.style.display = 'block'
                img.style.display = 'block' 
            }else if (idade < 50){
                img.src = 'imagens/adulto-mulher.jpg'
                fotoC.style.display = 'block'
                img.style.display = 'block'
            }else {
                img.src = 'imagens/idosa-mulher.jpg'
                fotoC.style.display = 'block'
                img.style.display = 'block'
            }
        }
        res.innerHTML = `Você é do gênero ${genero} e tem ${idade} anos de idade.`
        res.appendChild(fotoC)
        fotoC.appendChild(img)
    }
})
