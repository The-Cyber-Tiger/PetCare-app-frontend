import "../styles.css";
import { Link } from "react-router-dom"
import blueheeler from "../img/blueheeler.jpg"
import { addPet, updatePet } from "../API/api-client";

const ConfirmRegit = ({pet, owner, regitStatus, edit}) =>{



    function handleUser(){
        regitStatus({state: "pet-regit-2"})
    }
    function handlePet(){
        regitStatus({state: "pet-regit-1"})
    }
    async function handleSubmit(){

        let petregit = JSON.stringify({...pet, owner: owner})
        let token = localStorage.getItem('token')
        
        if(edit){
            try {
                await updatePet(token, pet._id, JSON.parse(petregit))
              
           } catch (error) {
               console.error(error)
           }
        }else{
            try {
                await addPet(token, JSON.parse(petregit))
              
           } catch (error) {
               console.error(error)
           }
        }

        

    }
    let petCard = () =>{
            return (
            <div className="confirm-box d-flex-column">
                <div className="confirm-pet-card d-flex">
                    <div className="pet-pic-box">
                        <img alt="pet" src={blueheeler} className="pet-pic"/>
                    </div>
                    <div className="d-flex-column">
                        <div className="d-flex-column">
                            <div className="d-flex-bet">
                                <span className="material-icons">pets</span>
                                <h2>{pet.nombre}</h2>
                            </div>
                            
                            <div className="d-flex">
                                <p><small>Raza: </small><b>{pet.raza}</b></p>
                                <p><small>Edad: </small><b>{pet.edad}</b></p>
                            </div>
                            <div className="d-flex">
                            <p><small>Especie: </small><b>{pet.especie}</b></p>
                            <p><small>Sexo: </small><b>{pet.sexo}</b></p>
                            </div>
                            <div className="d-flex">
                            <p><small>Descripción: </small><small>{pet.descripcion}</small></p>
                            <button onClick={handlePet} className="material-icons d-flex fake-btn">edit_note</button>
                            </div>
                        </div>
                    </div>

                    
                </div>
                <div className="d-flex-bet user-box">
                        <div className="d-flex">
                        <span className="material-icons">person</span>
                        <p><small>{owner.nombre}</small></p>
                        </div>
                        <div className="d-flex">
                        <span className="material-icons">home</span>
                        <p><small>{owner.domicilio}</small></p>
                        </div>
                        <div className="d-flex">
                        <span className="material-icons">phone</span>
                        <p><small>{owner.telefono}</small></p>
                        </div>
                        <div className="d-flex">
                        <span className="material-icons">email</span>
                        <p><small>{owner.email}</small></p>
                        </div>
                        <button onClick={handleUser} className="material-icons d-flex fake-btn">edit_note</button>
                </div>
            </div>
            )
    }
    
   
    return(
        <div className="box-card">
            <div className="mascota-regit mdc-card">
                <div>
                {petCard()}
                </div>
                <div className="btn-container">
                    <Link to="/home"  onClick={handleSubmit} class="mdc-button mdc-button--raised">
                            <span class="mdc-button__label">Confirmar</span>
                    </Link>
                    
                </div>
            </div>
            
        </div>
    )
}

export default ConfirmRegit