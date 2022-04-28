import "../styles.css";
import imgPet from '../img/blueheeler.jpg'
import { Link } from "react-router-dom"

const homePet = ({nombre, raza, ingreso, petId}) =>{
    return (
        <div className="h-pet">
            <Link to={`/pet?id=${petId}`}>
            <img src={imgPet} alt="pet"/>
            <div>
                <h3>{nombre}</h3>
                <p>{raza}</p>
                <p><small>{ingreso.substring(0, 10)}</small></p>
            </div>
            </Link>

        </div>
    )
}

export default homePet