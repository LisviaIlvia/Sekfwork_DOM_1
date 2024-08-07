

let paragrafo1 = document.querySelector('#p1');
let paragrafo2 = document.querySelector('#p2');
let paragrafo3 = document.querySelector('#p3');

let changeColorText = document.querySelector('#changeColorText');
let bolder = document.querySelector('#bolder');
let nascondi = document.querySelector('#nascondi');



changeColorText.addEventListener('click', ()=>{
     paragrafo1.style.color = randomColor();
     paragrafo2.style.color = randomColor();
     paragrafo3.style.color = randomColor();
    })

bolder.addEventListener('click', ()=>{
    paragrafo1.classList.toggle('bolder');
    paragrafo2.classList.toggle('bolder');
    paragrafo3.classList.toggle('bolder');
    
})

nascondi.addEventListener('click', ()=>{
    paragrafo1.classList.toggle('none');
    paragrafo2.classList.toggle('none');
    paragrafo3.classList.toggle('none');
    
})


function randomColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
}

 