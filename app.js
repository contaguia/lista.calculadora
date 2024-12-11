
    const tarea=document.getElementById("miLista")
    const fecha=document.getElementById("fecha")
    const tareas=document.getElementById("tareas")
    let boton = document.getElementById("miBoton");
    const caja=document.getElementById("contenedor");
    // let listaTarea=[]

    caja.addEventListener("mouseover", function() {
    caja.style.backgroundColor = "blue";
});

caja.addEventListener("mouseout", function() {
    caja.style.backgroundColor = "white";
});

document.addEventListener("keydown", function(evento) {
    console.log("Tecla presionada: " + evento.key);
if(evento.key=="eEnter"){
    guardarTarea()
}
});
//Agregar un evento de clic
boton.addEventListener("click",guardarTarea);
let listaTareas = JSON.parse(localStorage.getItem('tareas'));

function guardarTarea(){
    let txtTarea=tarea.value 
    let txtFecha=fecha.value 

    console.log(txtFecha)
    console.log(txtTarea)

    const nuevaTarea=document.createElement('li');
    nuevaTarea.innerHTML="<h1>" + txtTarea + "</h1><p>"+ txtFecha + "</p>"
    tareas.appendChild(nuevaTarea)
    let tareaGuardar={"tarea":txtTarea, "fecha":txtFecha}
    listaTarea.push(tareaGuardar)
    localStorage.setItem("tareas", JSON.stringify(listaTarea));
}

// Accedemos al elemento select
var lista = document.getElementById("miLista");

// Añadimos un evento para cuando cambie la selección
lista.addEventListener("change", function() {
  var opcionSeleccionada = lista.value;  // Obtenemos el valor de la opción seleccionada
  console.log("Seleccionaste: " + opcionSeleccionada);
});



function cargarTareas(){
    let listaTarea=JSON.parse(localStorage.getItem('tareas'));
  
  for(let i=0; i<listaTareas.length;i++){
    const nuevaTarea=document.createElement('li');
    nuevaTarea.innerHTML="<h1>"+listaTareas[i].tarea+"</h1><p>"+listaTareas[i].fecha+"</p>"
    tareas.appendChild(nuevaTarea)
  }
  
        console.log(listaTareas) 
    };