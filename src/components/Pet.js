import "../styles.css"
import { Link } from "react-router-dom"
import imgPet from '../img/blueheeler.jpg'
const Pet = ({pets,petSize}) =>{
    
        return(
            <div className={`${petSize}`}>
                {pets.petsXpagina.map(pet=>{
                    return(
                        <div className="pet-card border-r">
                            <Link to={`/pet?id=${pet._id}`}>
                            
                            <div className="d-flex">
                                <img src={imgPet} alt="pet"/>
                                <div className="d-flex-column">
                                <h2>{pet.nombre}</h2>
                                <div className="d-flex">
                                <p>raza: </p> <p>{pet.raza}</p>
                                </div>
                                <div className="d-flex">
                                    <div className="d-flex">
                                        <p>Sexo: </p> <p>{pet.sexo}</p>
                                    </div>
                                    <div className="d-flex">
                                        <p>Edad: </p> <p>{pet.edad} Años</p>
                                    </div>
                                </div>
                                </div>
                            </div>
                            </Link>
                            
                        </div>
                    )
                })}
                
            </div>
            
        )
   

}

export default Pet;