const fontside = document.querySelector('.fontside');
const growFont = document.querySelector('.growFont');
const diminishFont = document.querySelector('.diminishFont');
const text = document.querySelector('p');
const sizeFont = document.querySelector('.sizeFont');
const sizeH4 = document.querySelector('#sizeH4');
const colorText = document.querySelector('.colorText');
const blue = document.querySelector('.blue');
const green = document.querySelector('.green');
const random = document.querySelector('.random');

// muestra el tamaño de la fuente actual al cargar la página
window.addEventListener("load", ()=>{
    let elementStyle = window.getComputedStyle(text);
    let elementSize = elementStyle.getPropertyValue('font-size');
    let sizeF = document.createTextNode(`Tamaño de fuente: ${elementSize}`);
    sizeH4.appendChild(sizeF);
    sizeFont.appendChild(sizeH4);
})

// aumenta en +1px el tamaño de la fuente
growFont.addEventListener('click',()=>{
    document.getElementById('sizeH4').innerHTML = '';
     
    let elementStyle = window.getComputedStyle(text);
    let elementSize = elementStyle.getPropertyValue('font-size');

    let regex = /(\d+)/g; 
    let num = elementSize.match(regex);
    let newSize = text.style.fontSize = (parseInt(num) + 1 + "px");
    
    let valueH4 = document.createTextNode(`Tamaño de fuente: ${newSize}`);
    sizeH4.appendChild(valueH4);
    sizeFont.appendChild(sizeH4);
})


// disminuye el -1 el tamaño de la fuente
diminishFont.addEventListener('click', ()=>{
    document.getElementById('sizeH4').innerHTML = '';
    
    let elementStyle = window.getComputedStyle(text);
    let elementSize = elementStyle.getPropertyValue('font-size');
    
    let regex = /(\d+)/g;
    let num = elementSize.match(regex);
    let newSize = text.style.fontSize =  (parseInt(num) - 1) + "px";

    let valueH4 = document.createTextNode(`Tamaño de fuente: ${newSize}`);
    sizeH4.appendChild(valueH4);
    sizeFont.appendChild(sizeH4);
})

// cambia el color del parrafo a azul
blue.addEventListener('click',()=>{
    colorText.style.color = 'blue';
})

// cambia el color del parrafo a verde
green.addEventListener('click',()=>{
    colorText.style.color = 'green';
})

// cambia un color aleatorio al parrafo
random.addEventListener('click', ()=>{
    let r, g, b;
    /* aleatoriza cada numero entre 0 y 255 de cada color rgb */
    min = Math.ceil(0);
    max = Math.floor(255);

    r = Math.floor(Math.random() * (max - min + 1) + min);
    g = Math.floor(Math.random() * (max - min + 1) + min);
    b = Math.floor(Math.random() * (max - min + 1) + min);

    colorText.style.color = 'rgb(' + r + ',' + g + ',' + b + ')';
})