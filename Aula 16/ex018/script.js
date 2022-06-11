const inputNumero = document.querySelector('#numero')
const btnAdicionar = document
.querySelector('#adicionar-btn')
const valores = document.querySelector('#valores')
const btnFinalizar = document.querySelector('#finalizar-btn')
const btnResetar = document
.querySelector('#reset-btn')
const res = document.querySelector('#res')

let array = []

function numeroValido (n){
    if (Number(n) < 1 || Number(n) > 100) return false
    else return true 
}

function contidoNaLista (n, l){
    if (l.indexOf(Number(n)) != -1){
        return true
    }else {
        return false
    } 
}

btnAdicionar.addEventListener('click', () => {
    if (numeroValido(inputNumero.value) && !contidoNaLista(inputNumero.value, array)){
        array.push(Number(inputNumero.value))
        let item = document.createElement('option')
        item.text = `O valor ${Number(inputNumero.value)} foi adicionado`
        inputNumero.value = ''
        valores.appendChild(item)
        res.innerHTML = ''
    } else {
        alert('Valor inválido ou já encontrado na lista')
        inputNumero.value = ''    
    }
    inputNumero.focus()         
})

btnFinalizar.addEventListener('click', () => {
    if (valores.length === 0){
        alert('Adicione valores antes de finalizar')
    }else{
        let totalElementos = valores.length
        let maior = array[0]
        let menor = array[0]
        let soma = 0
        let media = 0

        for (let index in array){
            soma += array[index]
            if (array[index] > maior)
                maior = array[index]
            if (array[index] < menor)
                menor = array[index]                                
        }

        media = soma / totalElementos


        res.innerHTML = ''
        res.innerHTML += `<p>Ao todo, temos ${totalElementos} números cadastrados.</p>`
        res.innerHTML += `<p>O menor valor informado foi ${menor}.</p>`
        res.innerHTML += `<p>O maior valor informado foi ${maior}.</p>`
        res.innerHTML += `<p>Somando todos os valores temos ${soma}.</p>`
        res.innerHTML += `<p>A média dos valores informados é ${media}.</p>`
    }

})


btnResetar.addEventListener('click', () => {
    array = []
    res.innerHTML = ''
    inputNumero.value = ''
    valores.innerHTML = ''
})