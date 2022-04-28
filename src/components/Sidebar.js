import "../styles.css";
import img from "../img/PetCare-logo-colors.svg"
import {Link} from "react-router-dom";

function Sidebar({perfil}){
    

    return(
        

       <aside className="mdc-drawer sidebar">
        <div className="mdc-drawer__content">

        <div className="logo-div">
            <img alt="petcare-logo" src={img} className="logo-img"/>
        </div>
       <nav className="mdc-list">
            <Link to="/nuevo-registro" aria-current="page" className="mdc-list-item mdc-list-item border-r">
                <span className="mdc-list-item__ripple"></span>
                <i className="material-icons"><span class="material-icons">pets</span></i>
                <span className="mdc-list-item">Nuevo Registro</span>
            </Link>
            <Link to="/pacientes" aria-current="page" className="mdc-list-item mdc-list-item border-r m-2">
                <span className="mdc-list-item__ripple"></span>
                <i className="material-icons"><span class="material-icons">health_and_safety</span></i>
                <span className="mdc-list-item">Pacientes</span>
            </Link>
            <Link to="/hotel" aria-current="page" className="mdc-list-item mdc-list-item border-r m-2">
                <span className="mdc-list-item__ripple"></span>
                <i className="material-icons"><span class="material-icons">star</span></i>
                <span className="mdc-list-item">PetCare Hotel</span>
            </Link>
            <Link to="/insumos" aria-current="page" className="mdc-list-item mdc-list-item border-r m-2">
                <span className="mdc-list-item__ripple"></span>
                <i className="material-icons"><span class="material-icons">vaccines</span></i>
                <span className="mdc-list-item">Control de Insumos</span>
            </Link>
            <Link to="/configuracion" aria-current="page" className="mdc-list-item mdc-list-item border-r m-2">
                <span className="mdc-list-item__ripple"></span>
                <i className="material-icons"><span class="material-icons">settings</span></i>
                <span className="mdc-list-item">Configuración</span>
            </Link> 
       </nav>
       <div className="vet-info">
            <img className="vet-pic" alt="vet" src="https://www.sadenir.com.uy/wp-content/uploads/2020/11/veterinarian-check-ing-puppy-s-health-2.jpg"/>
            <h4>Mv. {perfil.nombre}</h4>
            <div className="d-flex">
                <i className="material-icons">phone</i>
                <p>{perfil.telefono}</p>
            </div>
            <div className="d-flex">
                <i className="material-icons">mail</i>
                <p>{perfil.email}</p>
            </div>
          
        </div>
       </div>
       
       </aside>
 
      
       
      

    )
}

export default Sidebar;