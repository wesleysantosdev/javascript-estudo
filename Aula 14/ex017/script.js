const num = document.querySelector('#txtn')
const tab = document.querySelector('#seltab')
const btn = document.querySelector('#btn')

btn.addEventListener('click', () => {
    if (num.value.length === 0){
        alert ('Por favor, digite um número')
    }else{
        let n = Number(num.value)
        tab.innerHTML = ''

        for (index = 1; index <= 10; index++){
            let item = document.createElement('option')
            item.text = `${n} x ${index} = ${n*index}`
            item.value = `tab${index}`
            tab.appendChild(item)
        }
    }
})