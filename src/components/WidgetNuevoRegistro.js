import "../styles.css";
import imgHuella from '../img/huellita-white.png'
import { Link } from "react-router-dom";

const WidgetNuevoRegistro = () =>{
//Este widget solo redirecciona al usuario a la página de nuevo registro.
    return (
        <div className="h-registro">
                <h2>Nuevo Registro</h2>
                    <div className="h-box">
                        <div className="h-pet">
                         <Link to="/nuevo-registro">
                            <img src={imgHuella} alt="huella"/>
                         </Link>
                        </div>
                    </div>
                       
        </div>
    )
}

export default WidgetNuevoRegistro