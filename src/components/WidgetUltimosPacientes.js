import "../styles.css";
import HomePet from '../components/HomePet'
import { useEffect, useState } from 'react'
import { getLast } from '../API/api-client'

const UltimosPacientes = () =>{

    //Este Widget muestra los 3 últimos pacientes que han sido modificados o añadidos

    const [ pets, setPets] = useState([])

    useEffect(()=>{
        async function getPets(){
            try {
                let token = localStorage.getItem('token')
                let res = await getLast(token)
                let response = res.data

                setPets(response)

            } catch (error) {
                console.error(error)
            }
        }
        getPets()
        

    },[])


    return (
        <div className="h-pacientes">
            <h2>Últimos Pacientes</h2>
            <div className="h-box">
                {pets.map(pet=>{
                    return(
                        <HomePet nombre={pet.nombre} raza={pet.raza} ingreso={pet.createdAt} petId={pet._id} />
                    )
                })}
                
                
            </div>
        </div>
    )
}

export default UltimosPacientes