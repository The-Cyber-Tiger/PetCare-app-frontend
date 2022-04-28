
const iDate = () =>{
const MESES = ['Enero del ','Febrero del ','Marzo del ','Abril del ','Mayo del ','Junio del ','Julio del ','Agosto del ','Septiembre del ','Octubre del ','Noviembre del ','Diciembre del ']

    let rawdate =  new Date().toLocaleString()
    let splitdate = rawdate.split('/')
    let day = splitdate[0] + ' de ';
    let nmes = splitdate[1]
    let mes = MESES[nmes-1]
    let fecha = day + mes + splitdate[2].split(' ').join(' | ')
   
return fecha
 
}

export default iDate;