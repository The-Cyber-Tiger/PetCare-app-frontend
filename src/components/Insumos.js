import "../styles.css";
import imgAntibiotico from "../img/antibiotico.png"
import imgAntirrabico from "../img/antirrabico.png"
import imgVacuna from "../img/vacuna.png"
import imgCroquetas from "../img/croquetas.png"
import imgGalletas from "../img/galletas.png"
import { useEffect, useState } from "react";
import DataCard from "./DataCard";
import { getAllInsumos } from "../API/api-insumos"

function Insumos(){

    let [vacunas, setVacunas] = useState({})
    let [croquetas, setCroquetas] = useState({})
    let [antirrabicos, setAntirribicos] = useState({})
    let [antibioticos, setAntibioticos] = useState({})
    let [galletas, setGalletas] = useState({})
    let [lote, setLote] = useState({})
    let [reload, setReload] = useState(false)

    useEffect(()=>{

        async function getInsumosData(){
            try {
                let token = localStorage.getItem('token')
                let res = await getAllInsumos(token)
                let response = res.data
                setLote(response[0]._id)
                setVacunas(response[0].vacunas[0])
                setCroquetas(response[0].croquetas[0])
                setAntirribicos(response[0].antirrabicos[0])
                setAntibioticos(response[0].antibioticos[0])
                setGalletas(response[0].galletas[0])
                
            } catch (error) {
                console.log(error)
            }
        }
        getInsumosData()
        

    },[reload])
    
    return(
       
        <div className="main-card">
            <h1>Control de Insumos</h1>
            <div className="h-menu">
                <div className="h-1">
                    <DataCard reload={reload} setReload={setReload} lote={lote} img={imgVacuna} insumo={vacunas} minValue={50} />
                    <DataCard reload={reload} setReload={setReload} lote={lote} img={imgCroquetas} insumo={croquetas} minValue={30} />
                    <DataCard reload={reload} setReload={setReload} lote={lote} img={imgAntirrabico} insumo={antirrabicos} minValue={15}/>
                </div>
                <div className="h-1">
                    <DataCard reload={reload} setReload={setReload} lote={lote} img={imgAntibiotico} insumo={antibioticos} minValue={15} />
                    <div className="d-mini">
                        <div className="d-note">
                            <h5>Aviso</h5>
                            <p>Verificar que el color del indicador se mantenga en Verde, el color rojo indica que es necesario añadir más producto al inventario.</p>
                        </div>
                    </div>
                    <DataCard reload={reload} setReload={setReload} lote={lote} img={imgGalletas} insumo={galletas} minValue={30} />

                </div>

            </div>
        </div>
    
    )
}

export default Insumos