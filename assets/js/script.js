const btnAgregar = document.getElementById("btn_agregar")
const tareaInput = document.getElementById("agregarTarea")
const tbody = document.querySelector("tbody")
const total = document.getElementById("total_tareas")
const realizadas = document.getElementById("realizadas_tareas")

// arreglo vacio
const tareas = [
    {id: 234, nombre:"Compras supermercado", notificado: false},
    {id: 232, nombre:"limpieza casa", notificado: false},
    {id: 254, nombre:"Reparar auto", notificado: false},
]


// FUNCION QUE CREA EL RENDER
const renderTareas = () =>{
    let html = ""

    tareas.forEach( tarea => {
        html +=`
            <tr>
            <th>${tarea.id}</th>
            <th>${tarea.nombre}</th>
            <th>
                <input type="checkbox" onclick="actualizar(${tarea.id})" ${tarea.notificado === true ? "checked" : null} >
            </th>
            <th><button onclick="borrar(${tarea.id})">X</button></th>
            </tr>
        `
    })
    tbody.innerHTML = html
    total.innerHTML = tareas.length  
} 


// FUNCION QUE VE SI EL CHECK BOX ESTA SELECCIONADO O NO
const actualizar = (id) =>{
    const index = tareas.findIndex( tarea => tarea.id === id)
    // condicional que deja en true o false el check box
    tareas[index].notificado = !tareas[index].notificado
    // se crea un uevo arreglo filtrando  solo las que tengan la condicion true
    let tareasListas = tareas.filter((tarea) => tarea.notificado == true)
    realizadas.innerHTML = tareasListas.length
}

// FUNCION QUE BORRA TAREA
const borrar = (id) => {
    const index = tareas.findIndex( tarea => tarea.id === id)
    tareas.splice(index, 1)
    renderTareas()
    
}


// EVENTO CLICK QUE CREA UNA NUEVA TAREA
btnAgregar.addEventListener( "click", () => {
    const nuevaTarea = tareaInput.value
    tareas.push({id: Date.now(), nombre: nuevaTarea, notificado: false,})
    tareaInput.value = ""
    renderTareas()

})

renderTareas()







