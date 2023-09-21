const nombre = document.querySelector(".nombre");
const listNames = document.querySelector(".listNames > ul");
const addName = document.querySelector('.addName');
const deleteNameInput = document.querySelector('.deleteNameInput');
const deleteName = document.querySelector('.deleteName');

// lista de nombres (Simulación de una DB)
let listName = ["Elsa Galán Tejedor", 
                  "Álvaro Alguacil Santana", "Juan David Arnal Carvallo", 
                  "Laura Sofía Sancho Martínez", "Rolando Freixa Narvaez", 
                  "Samanta Mendez Gonzalez", "Ernesto Maroto Rodríguez", 
                  "María Vera Escribano"
];
    
// carga la lista de nombres al cargar la ventana del navegador
window.addEventListener("load", ()=>{
   loadList();
})

// agrega un nombre a la lista
addName.addEventListener("submit",(e)=>{
   e.preventDefault();
   const data = nombre.value;
   if(data && listName.indexOf(data)=== -1){
      listName.push(data);
      addList(data);
   }
})

// borra un nombre de la lista
deleteName.addEventListener('submit',(e)=>{
   e.preventDefault();
   const data = deleteNameInput.value;
   if(data){
    if(listName.indexOf(data)>= 0){
      deleteList(data);
    }  
   }
})

// añade una lista con los nombres del array (listNames) al documento HTML
function loadList(){
   listName.forEach(name => {
      let li = document.createElement('li');
      let textli = document.createTextNode(name);
      li.setAttribute('class','list-group-item');
      li.appendChild(textli);
      listNames.appendChild(li);
   });
}

// añade un nombre a la lista al documento HTML
function addList(data){
   const lastName = data;
   let li = document.createElement('li');
   let textli = document.createTextNode(lastName);
   li.setAttribute('class','list-group-item');
   li.appendChild(textli);
   listNames.appendChild(li);
}

// borra un nombre de la lista listName (DB) y documento HTML
function deleteList(data){
   let indice = listName.indexOf(data);
   listName.splice(indice, 1);

   let child = listNames.children[indice];
   listNames.removeChild(child);
}