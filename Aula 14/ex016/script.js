const contar = document.querySelector('#btn')
const inicio = document.querySelector('#texti')
const fim = document.querySelector('#textf')
const passo = document.querySelector('#textp')
const res = document.querySelector('#res')

contar.addEventListener('click', () => {
    if (inicio.value.length === 0 || fim.value.length === 0 || passo.value.length === 0){
        alert('[ERRO] Faltam dados')
        res.innerHTML = 'Preparando Contagem...'   
    }else{
        res.innerHTML = 'Contando: <br><br>'
        let i = Number(inicio.value)
        let f = Number(fim.value)
        let p = Number(passo.value)

        if (p === 0){
            alert('Passo inválido! Considerando o passo como 1...')

            p = 1
        }

        if (i < f) {
            for (index = i; index <= f; index += p){
                res.innerHTML += `${index} \u{1F449} `
            }  
        }else{
            for(let index = i; index >= f; index -= p){
                res.innerHTML += `${index} \u{1F449} `
            }
        }res.innerHTML += ` \u{1F3C1}`     
    } 
        
})