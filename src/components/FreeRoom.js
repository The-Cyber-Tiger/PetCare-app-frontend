import "../styles.css"
import petroompic from "../img/petroom.jpg"

const FreeRoom = ({setRegister,register, roomNumber}) => {


    return(
        <div className="d-flex-column">
        <div className="room d-flex-column">
            <div className="pet-pic-box">
                <img alt="pet" src={petroompic} className="pet-pic-room"/>

            </div>
        
        <button onClick={()=>{setRegister(!register)}} class="mdc-button mdc-button--raised mdc-button--leading">
            <i class="material-icons mdc-button__icon" aria-hidden="true">pets</i>
            <span class="mdc-button__label">Nuevo Huésped</span>
        </button>

        </div>
        <div className="d-flex">
        <div className="free"></div>
        <p>Room: {roomNumber}</p>
    </div>
    
    
   
    </div>
    )
}

export default FreeRoom