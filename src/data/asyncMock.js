const Productos = [
    {id:1, nombre: "Amateur", descripcion: "Descripción de Amateur", precio: "$1000"},
    {id:2, nombre: "Pastelería", descripcion: "Descripción de Pasteleria", precio: "$1500"},
    {id:3, nombre: "Panes", descripcion: "Descripción de Panes", precio: "$2000"}
    ]
export const getProducts =() => {
    return new Promise ((resolve) => {
        setTimeout(() => {
            resolve (Productos)
        }, 2000)
    }) }