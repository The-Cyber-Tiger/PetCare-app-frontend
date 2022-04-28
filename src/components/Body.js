import "../styles.css";
import { Route} from "react-router-dom";
import NuevoRegistro from "./NuevoRegistro";
import Pacientes from "./Pacientes";
import Home from "./Home";
import Hotel from "./Hotel";
import Insumos from "./Insumos";
import Configuracion from "./Configuracion";
import MainPet from "./MainPet";
import EditarRegistro from "./EditarRegistro";


function Body({perfil, setPerfil, inputValue}) {
    
    return(

        <div className="card">
        <Route path="/nuevo-registro">
            <NuevoRegistro/>
        </Route>
        <Route path="/pacientes">
            <Pacientes petSearch={inputValue}/>
        </Route>
        <Route path="/home">
            <Home/>
        </Route>
        <Route path="/hotel">
            <Hotel/>
        </Route>
        <Route path="/insumos">
            <Insumos/>
        </Route>
        <Route path="/configuracion">
            <Configuracion perfil={perfil} setPerfil={setPerfil} />
        </Route>
        <Route path="/pet">
            <MainPet/>
        </Route>
        <Route path="/edit-pet">
            <EditarRegistro/>
        </Route>
        </div>
      
    )
}
export default Body;