import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { getPet, removePet } from "../API/api-client"
import imgPet from '../img/blueheeler.jpg'
import "../styles.css"


const MainPet = () => {

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

    async function handleDel(){
        try {
            let token = localStorage.getItem('token')
            let del = await removePet(token, pet._id)
            if(del.message){
                window.alert(del.message)
            }
        } catch (error) {
            console.error(error)
        }
    }
    
    console.log(owner.nombre)


    return(
        <div className="main-card">
            <div className="box-card">
                <div className="mascota-regit">
                <div className="confirm-box d-flex-column">
                <div className="confirm-pet-card d-flex">
                    <div className="pet-pic-box">
                        <img alt="pet" src={imgPet} className="pet-pic"/>
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
                </div>
                </div>
                <div className="btn-container">
                <Link to="/home">
                    <button onClick={handleDel} className="mdc-button mdc-button--raised">
                            
                    <span class="mdc-button__label">Eliminar</span>
                    </button>
                    </Link>

                    <Link to={`/edit-pet?id=${pet._id}`} className="mdc-button mdc-button--raised">
                            <span class="mdc-button__label">Editar</span>
                    </Link>
                    
                </div>
                </div>
            </div>
            
            
        </div>
    )
}

export default MainPet