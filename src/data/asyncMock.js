const Academia = [
    {id:1, nombre: "General", descripcion: "Descripción de General", precio: "$1000", categoria:"Curso"},
    {id:2, nombre: "Pastelería", descripcion: "Descripción de Pasteleria", precio: "$1500", categoria:"Curso"},
    {id:3, nombre: "Panes", descripcion: "Descripción de Panes", precio: "$2000", categoria:"Curso"},
    {id:4, nombre: "Gastronomia", descripcion: "Descripción de Gastronomia", precio: "$1000", categoria:"Carrera"},
    {id:5, nombre: "Pasteleria profesional", descripcion: "Descripción de Pasteleria profesional", precio: "$1500", categoria:"Carrera"},
    ]
export const getAcademia =() => {
    return new Promise ((resolve) => {
        setTimeout(() => {
            resolve (Academia)
        }, 1)
    }) }

export const getAcademiaByCategory = (categoria) => {
     return new Promise ((res) => {
        const Academia1 = Academia1.filter(academ => academ.categoria === categoria)
        setTimeout(() => {
            res (Academia1)
        },2000)
     })
}

export const getAcademia1 = (id) =>{
    return new Promise ((resolve) =>{
        const aca = Academia1.find (p => p.id === parseInt(id))
        setTimeout (() => {
            resolve(aca)
        },1000)
    })
}