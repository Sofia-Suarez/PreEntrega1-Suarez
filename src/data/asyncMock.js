const Academia = [
    {id:1, nombre: "General", descripcion: "Sushi, pastas, pannacotta, paella, causa limeña",duracion:"3 meses" ,precio: "$1000", categoria:"cursos", imagen:"../../src/assets/imagen1.png"},
    {id:2, nombre: "Pastelería", descripcion: "Tortas, cheescake, galletas",duracion:"5 meses", precio: "$1500", categoria:"cursos",imagen:"../../src/assets/imagen2.png"},
    {id:3, nombre: "Panes", descripcion: "Pan de molde, minion, frances, masa madre",duracion:"2 meses", precio: "$2000", categoria:"cursos", imagen:"../../src/assets/imagen3.png"},
    {id:4, nombre: "Gastronomia", descripcion: "Todo relacionado a la gastronomía, marketing, nutricion, etc.",duracion:"3 años", precio: "$1000", categoria:"carreras", imagen:"../../src/assets/imagen4.png"},
    {id:5, nombre: "Pasteleria profesional", descripcion: "Todo relacionado a la pastelería, marketing, nutricion, etc.",duracion:"1 año", precio: "$1500", categoria:"carreras", imagen:"../../src/assets/imagen5.png"},
    {id:6, nombre: "Pasteleria amateur", descripcion: "Todo relacionado a la pastelería, marketing, nutricion, etc.",duracion:"1 año", precio: "$1500", categoria:"carreras", imagen:"../../src/assets/imagen6.png"},
    {id:7, nombre: "España", descripcion: "Comidas tipicas de España",duracion:"4 meses", precio: "$1000", categoria:"cursos", imagen:"../../src/assets/imagen7.png"},
    {id:8, nombre: "Italia", descripcion: "Comidas tipicas de Italia",duracion:"4 meses", precio: "$1000", categoria:"cursos", imagen:"../../src/assets/imagen8.png"},
    {id:9, nombre: "Bartender", descripcion: "Todo lo relacionado a los tragos",duracion:"1/2 año", precio: "$3000", categoria:"carreras", imagen:"../../src/assets/imagen9.png"},
    {id:10, nombre: "Sommelier", descripcion: "Todo relacionado a los vinos",duracion:"1 año", precio: "$3000", categoria:"carreras", imagen:"../../src/assets/imagen10.png"},
    {id:11, nombre: "Brasil", descripcion: "Comidas tipicas de Brasil",duracion:"4 meses", precio: "$1000", categoria:"cursos", imagen:"../../src/assets/imagen11.png"},
    {id:12, nombre: "Estados unidos", descripcion: "Comidas tipicas de Estados Unidos",duracion:"4 meses", precio: "$1000", categoria:"cursos", imagen:"../../src/assets/imagen12.png"},

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