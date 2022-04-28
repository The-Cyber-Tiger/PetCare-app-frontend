import "../styles.css"
import { useState, useEffect } from "react"
import { getPet } from "../API/api-client"
import PetRegit from "./PetRegit"
import UserRegit from "./UserRegit"
import ConfirmRegit from "./ConfirmRegit"

function EditarRegistro(){

    const [ pet, setPet] = useState({})
    const [ owner, setOwner] = useState({})


    useEffect(()=>{

        let id = getURLID()

        async function getData(){

            try {
                let token = localStorage.getItem('token')
                let res = await getPet(token, id)
                let response = res.data

                setPet(response)
                setOwner(response.owner[0])

            } catch (error) {
                console.error(error)
            }
        }
        getData()
    },[])

    
    const getURLID = ()=>{
        const params = new URLSearchParams(document.location.search)
        const id = params.get("id")
       return id
    }

    const [regitStatus, setRegitStatus] = useState({"state": "pet-regit-1"})
    console.log(pet)

    if(regitStatus.state ==="pet-regit-1" ){
        return(
            <div className="main-card">
            <h1>Editar Registro</h1>
            <PetRegit pet={pet} setPet={setPet} regitStatus={setRegitStatus}/>


            </div>

        )
    }else if(regitStatus.state ==="pet-regit-2" ){
        return(
            <div className="main-card">
            <h1>Editar Registro</h1>
            <UserRegit owner={owner} setOwner={setOwner} regitStatus={setRegitStatus}/>
            
            </div>

        )
    }else{
        return(
            <div className="main-card">
            <h1>Editar Registro</h1>

            <ConfirmRegit pet={pet} owner={owner} edit={true}  regitStatus={setRegitStatus} />
            </div>

        )
    }

   
}

export default EditarRegistro