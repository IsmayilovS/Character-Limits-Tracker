const input = document.querySelector('#input')
const p1 = document.querySelector('#p1')


input.addEventListener('keypress', (e) =>{
    if (e.target.value.length === 100) {
        e.preventDefault();
        input.style.borderColor = 'red'
        p1.style.color = 'red'
    }
    else if (e.target.value.length < 100){
        input.style.borderColor = ''
        p1.style.color = ''
    }
})

input.addEventListener('input', function (e){
    const givenValue = e.target.value
    p1.textContent = givenValue.length + '/100'
    p1.style.color = ''
    input.style.borderColor = ''
})

// funksiyasiz input.value-ni todo (var)-na nece menimsede bilerik ?

// input.addEventListener('keypress', function(){
//     p1.textContent = keypress.length
//     nece ede bilerem bu funksiya ile ??
// }
// )
// let text3 = `${p1.textContent} /100`




