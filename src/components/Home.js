import "../styles.css";
import WidgetUltimosPacientes from "./WidgetUltimosPacientes"
import WidgetNuevoRegistro from "./WidgetNuevoRegistro"
import WidgetStatusInsumos from "./WidgetStatusInsumos"
import WidgetHotel from "./WidgetHotel"


function Home(){
//Panel principal para consulta de las principales variables del sistema y acceso a sus funcionalidades.

    return(
       
            <div className="main-card">
                <h1>Home</h1>
                <div className="h-menu">
                    <div className="h-1">
                        <WidgetUltimosPacientes/>
                        <WidgetNuevoRegistro/>
                    </div>
                    <div className="h-1">
                        <WidgetHotel/>
                        <WidgetStatusInsumos/>
                    </div>
                </div>
            </div>
        
    
    )
}

export default Home