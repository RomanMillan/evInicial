const fontside = document.querySelector('.fontside');
const growFont = document.querySelector('.growFont');
const diminishFont = document.querySelector('.diminishFont');
const text = document.querySelector('p');
const sizeFont = document.querySelector('.sizeFont');
const sizeH3 = document.querySelector('#sizeH3');

window.addEventListener("load", ()=>{
    let elementStyle = window.getComputedStyle(text);
    let elementSize = elementStyle.getPropertyValue('font-size');
    let sizeF = document.createTextNode(elementSize)
    sizeH3.appendChild(sizeF);
    sizeFont.appendChild(sizeH3);
})

growFont.addEventListener('click',()=>{
     let elementStyle = window.getComputedStyle(text);
     let elementSize = elementStyle.getPropertyValue('font-size');

    document.getElementById('sizeH3').innerHTML = '';

     let regex = /(\d+)/g; 
     let num = elementSize.match(regex);
     let newSize = text.style.fontSize = (parseInt(num) + 1 + "px");
     
     let valueH3 = document.createTextNode(newSize);
     sizeH3.appendChild(valueH3);
     sizeFont.appendChild(sizeH3)
     

})



diminishFont.addEventListener('click', ()=>{
    let elementStyle = window.getComputedStyle(text);
    let elementSize = elementStyle.getPropertyValue('font-size');
    
    let regex = /(\d+)/g;
    let num = elementSize.match(regex);
    text.style.fontSize =  (parseInt(num) - 1) + "px"

})
