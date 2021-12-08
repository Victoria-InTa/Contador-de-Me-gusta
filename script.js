let btn = document.querySelector('#btn')
let btn_no = document.querySelector('#btn-no')
let count = document.querySelector('#count')
let count2 = document.querySelector('#count2')


clicks = 0
btn.addEventListener('click', ()=>{
    clicks ++
    count.innerHTML = clicks
    
    
})


clicks1 = 0
btn_no.addEventListener('click', ()=>{
    clicks1 ++
    count2.innerHTML = clicks1
})

