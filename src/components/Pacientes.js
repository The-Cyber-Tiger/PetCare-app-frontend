import "../styles.css";
import React, { useState, useEffect } from 'react'
// import {useState,useEffect} from 'react'
import Pet from "./Pet";
import Pagination from "./Pagination";
import { getAllPets } from "../API/api-client";


const Pacientes =  (petSearch={})=> {
    
    console.log(petSearch)
    const [petList, setpetList] = useState([])
    const [paginaActual,setpaginaActual] = useState(1);
    const TotalxPagina = 4;
 
   useEffect(() => {
      getPetList(petSearch)
   }, [petSearch])

    async function getPetList(input){

        try {
            let token = localStorage.getItem('token')
            let res = await getAllPets(token)
            let data = res.data
            let petName = input.petSearch.toLowerCase()
            
            if(input.petSearch.length > 1 ){
                let search = data => data.filter(i=>{return i.nombre.toLowerCase().includes(petName)})
                let petList =  search(data)
                setpetList(petList)
            }else{ 
                let petList = data
                setpetList(petList)
            }

        } catch (error) {
            console.error(error)
        }
        
    }

    
    function getTotalPaginas(){
        let totalPets = petList.length
        return Math.ceil(totalPets/TotalxPagina)
    }

    let petsXpagina = petList.slice((paginaActual-1)*TotalxPagina, paginaActual * TotalxPagina);
    
    return(
        <div className="main-card">
                    <h1>Pacientes</h1>

        <div className="box-card">
            <div className="box-wall">
            {petsXpagina.length > 1 ? <Pet petSize={"pets-box"} pets={{petsXpagina}}/> : <Pet className={"pet-solo"} pets={{petsXpagina}}/> }

            </div>
                    
                    
         <Pagination pagina={paginaActual} total={getTotalPaginas()} onChange={(page)=>{setpaginaActual(page)} }/>
     
        </div>
         
         
     </div>
        
    
    )
}

export default Pacientes