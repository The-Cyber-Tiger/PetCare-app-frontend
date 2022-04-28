import "../styles.css";
import { useState } from "react";
import PetRegit from "./PetRegit";
import UserRegit from "./UserRegit";
import ConfirmRegit from "./ConfirmRegit";

function NuevoRegistro(){
    const [ pet, setPet] = useState({
        nombre: '',
        raza: '',
        edad: '',
        especie: '',
        sexo: '',
        descripcion: ''
    });
    const [ owner, setOwner] = useState({
        nombre: '',
        domicilio: '',
        telefono: '',
        email: ''
    });

    const [regitStatus, setRegitStatus] = useState({"state": "pet-regit-1"})
    // console.log(regitInfo)

    if(regitStatus.state ==="pet-regit-1" ){
        return(
            <div className="main-card">
            <h1>Nuevo Registro</h1>
            <PetRegit pet={pet} setPet={setPet} regitStatus={setRegitStatus}/>


            </div>

        )
    }else if(regitStatus.state ==="pet-regit-2" ){
        return(
            <div className="main-card">
            <h1>Nuevo Registro</h1>
            <UserRegit owner={owner} setOwner={setOwner} regitStatus={setRegitStatus}/>
            
            </div>

        )
    }else{
        return(
            <div className="main-card">
            <h1>Nuevo Registro</h1>

            <ConfirmRegit pet={pet} owner={owner}  regitStatus={setRegitStatus} />
            </div>

        )
    }

   
}

export default NuevoRegistro