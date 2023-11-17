const Academia = [
    {id:1, nombre: "General", descripcion: "Descripción de General", precio: "$1000", categoria:"Cursos", imagen:"../../src/assets/imagen1.png"},
    {id:2, nombre: "Pastelería", descripcion: "Descripción de Pasteleria", precio: "$1500", categoria:"Cursos",imagen:"../../src/assets/imagen2.png"},
    {id:3, nombre: "Panes", descripcion: "Descripción de Panes", precio: "$2000", categoria:"Cursos", imagen:"../../src/assets/imagen3.png"},
    {id:4, nombre: "Gastronomia", descripcion: "Descripción de Gastronomia", precio: "$1000", categoria:"Carreras", imagen:"../../src/assets/imagen4.png"},
    {id:5, nombre: "Pasteleria profesional", descripcion: "Descripción de Pasteleria profesional", precio: "$1500", categoria:"Carreras", imagen:"../../src/assets/imagen5.png"},
    ]
export const getAcademia =() => {
    return new Promise ((resolve) => {
        setTimeout(() => {
            resolve (Academia)
        }, 1)
    }) }

export const getAcademiaByCategory = (categoria) => {
     return new Promise ((res) => {
        const Academia1 = Academia.filter(academ => academ.categoria === categoria)
        setTimeout(() => {
            res (Academia1)
        },2000)
     })
}

export const getAcademia1 = (id) =>{
    return new Promise ((resolv) =>{
        const aca = Academia.find (p => p.id === parseInt(id))
        setTimeout (() => {
            resolv(aca)
        },1000)
    })
}