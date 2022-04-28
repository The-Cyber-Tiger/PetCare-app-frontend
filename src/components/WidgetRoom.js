import "../styles.css"
import imgRoom from "../img/petroom.jpg"
import imgPet from "../img/blueheeler.jpg"
import { Link } from "react-router-dom"

const WidgetRoom = ({nombre, numero, status}) => {

    let huesped = nombre ? nombre : 'FREE'
    let indicador = status ? 'free' : 'taken'
    let img2show = status ? imgRoom : imgPet

    return (
<div className="h-room">
    <Link to="/hotel">
    <img src={img2show} alt='room'/>
    </Link>
    <h3>{huesped}</h3>
    <div className="d-flex">
        <div className={indicador}></div>
        <p>Room: {numero}</p>
    </div> 
</div>
    )
}
export default WidgetRoom