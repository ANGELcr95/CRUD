/* eslint-disable */

                // Variables globales
let formulario = document.getElementById('formulario')
let inputs = document.querySelectorAll('#formulario input')
let users = document.getElementById('users');
let editOrCreate = true
let array = []
let values = document.createElement("div")
let nombre = document.createElement("h2")
let correo = document.createElement("h2")
let editar = document.createElement("button")
let eliminar = document.createElement("button")
let number2 = null

//Funcion crear ususario 1era vez
document.addEventListener('DOMContentLoaded', () => {
    array = JSON.parse(localStorage.getItem('key'))
    if(array == null){
        array = []
    }
    for (let i = 0; i < array.length; i++) {
        if(array[i] != null){
        values = document.createElement("div")
        nombre = document.createElement("h2")
        correo = document.createElement("h2")
        editar = document.createElement("button")
        eliminar = document.createElement("button")
        users.appendChild(values)
        values.appendChild(nombre)
        values.appendChild(correo)
        values.appendChild(editar)
        values.appendChild(eliminar)
        eliminar.setAttribute('class','eliminar')
        editar.setAttribute('class','editar')
        editar.innerText = 'Editar'
        eliminar.innerText = 'Eliminar'
        nombre.innerText = array[i].nombre
        correo.innerText = array[i].correo
        values.setAttribute('id',array[i].id)
        nombre.setAttribute('class',array[i].id)
        correo.setAttribute('class',array[i].id)
        eliminar.setAttribute('id',array[i].id)
        editar.setAttribute('id',array[i].id)
        }
    
    // SEGUNDA OPCION CON FOR ECCH DE PINTAR EL DOM
    // array.forEach((elemento, index) => {
    //     if(array[index] != null){
    //         values = document.createElement("div")
    //         nombre = document.createElement("h2")
    //         correo = document.createElement("h2")
    //         editar = document.createElement("button")
    //         eliminar = document.createElement("button")
    //         users.appendChild(values)
    //         values.appendChild(nombre)
    //         values.appendChild(correo)
    //         values.appendChild(editar)
    //         values.appendChild(eliminar)
    //         eliminar.setAttribute('class','eliminar')
    //         editar.setAttribute('class','editar')
    //         editar.innerText = 'Editar'
    //         eliminar.innerText = 'Eliminar'
    //         nombre.innerText = array[index].nombre
    //         correo.innerText = array[index].correo
    //         values.setAttribute('id',array[index].id)
    //         nombre.setAttribute('class',array[index].id)
    //         correo.setAttribute('class',array[index].id)
    //         eliminar.setAttribute('id',array[index].id)
    //         editar.setAttribute('id',array[index].id)
    //     }

        eliminar.addEventListener('click',(e) => {
            console.log('hola')
            number =parseInt(e.target.id)
            array.forEach((elemento, index) => {
                if(number == index){
                    users.removeChild(document.getElementById(e.target.id))
                    delete array[number]
                }
                local()
            })
        })
        //Editar usuario ARRAY
        editar.addEventListener('click', (e) => {
        inputs[3].classList.add('orange')
        editOrCreate = false
        number2 = parseInt(e.target.id)
        array.forEach((elemento, index) => {
            if(number2 == index){
                inputs[0].value = array[number2].nombre
                inputs[1].value = array[number2].correo
                inputs[2].value = array[number2].password
            }
        })
    })
    // Recargar usuario creado
        if(!editOrCreate){
        
        let usuarioEdit = {
            nombre: inputs[0].value,
            correo: inputs[1].value,
            password: inputs[2].value,
            id: number2
        }
        array[number2] = usuarioEdit
        let cambiarnombre = document.getElementsByClassName(number2)
        cambiarnombre[0].innerText =  usuarioEdit.nombre
        cambiarnombre[1].innerText =  usuarioEdit.correo
        editOrCreate = true
        
        }
    local()
    formulario.reset()
    
}
    
})

let createData = () => {
    
    values = document.createElement("div")
    nombre = document.createElement("h2")
    correo = document.createElement("h2")
    editar = document.createElement("button")
    eliminar = document.createElement("button")
    
    inputs[3].classList.remove('orange')
    array = JSON.parse(localStorage.getItem('key'))
    if(array == null){
        array = []
    }
    
    if(editOrCreate){
        users.appendChild(values)
        values.appendChild(nombre)
        values.appendChild(correo)
        values.appendChild(editar)
        values.appendChild(eliminar)
        eliminar.setAttribute('class','eliminar')
        editar.setAttribute('class','editar')
        editar.innerText = 'Editar'
        eliminar.innerText = 'Eliminar'
        let usuario = {
            nombre: inputs[0].value,
            correo: inputs[1].value,
            password: inputs[2].value,
            id: array.length,
        }
        nombre.innerText = usuario.nombre
        correo.innerText = usuario.correo
        array[array.length] = usuario
        values.setAttribute('id',usuario.id)
        nombre.setAttribute('class',usuario.id)
        correo.setAttribute('class',usuario.id)
        eliminar.setAttribute('id',usuario.id)
        editar.setAttribute('id',usuario.id)
        
    }
    
    // Eliminar usuario
    eliminar.addEventListener('click',(e) => {
        
        number =parseInt(e.target.id)
        array.forEach((elemento, index) => {
            if(number == index){
                users.removeChild(document.getElementById(e.target.id))
                delete array[number]
            }
        })
        
        local()
    })
    //Editar usuario ARRAY
    editar.addEventListener('click', (e) => {
        inputs[3].classList.add('orange')
        editOrCreate = false
        number2 = parseInt(e.target.id)
        array.forEach((elemento, index) => {
            if(number2 == index){
                inputs[0].value = array[number2].nombre
                inputs[1].value = array[number2].correo
                inputs[2].value = array[number2].password
            }
        })
    })
    //Recargar usuario creado

    if(!editOrCreate){
        
        let usuarioEdit = {
            nombre: inputs[0].value,
            correo: inputs[1].value,
            password: inputs[2].value,
            id: number2
        }
        array[number2] = usuarioEdit
        let cambiarnombre = document.getElementsByClassName(number2)
        cambiarnombre[0].innerText =  usuarioEdit.nombre
        cambiarnombre[1].innerText =  usuarioEdit.correo
        editOrCreate = true
        
    }
    local()
    formulario.reset()
}


inputs[3].addEventListener('click',createData)


let local = () =>{
    if (typeof(Storage) !== "undefined") {
        localStorage.setItem("key",JSON.stringify(array))
    } else {
        alert('no soporta navegador')
    }
}







