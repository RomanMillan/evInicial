const nombre = document.querySelector(".nombre");


let listName = ["Manuel", "Enrique", "Susana"];

nombre.addEventListener("change",(value)=>{
   const data = value.target.value;
   if(data){
    listName.push(data);
   }
})

