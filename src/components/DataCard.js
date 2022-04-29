import {  useEffect, useState } from "react"
import { updateInsumo } from "../API/api-insumos"
import "../styles.css"

const DataCard = ({ reload, setReload, lote, img, insumo, minValue}) =>{

    let state = insumo.status
    let value = insumo.cantidad
    let [ count, setCount ] = useState(Number)

    useEffect(()=>{
        setCount(value)
    },[value])
    
    let handleCounter = async (e) =>{

        let keyProduct = insumo.nombre.toLowerCase()
        let token = localStorage.getItem('token')

        if (e.target.name === 'resta') {

            setCount(count--)
            if(count < minValue){
                try {
                    await updateInsumo(token, lote, {  [keyProduct] : [{cantidad: count --, status: false}]} )
                    } catch (error) {
                        console.error(error)
                    }
            } else {
                try {
                    await updateInsumo(token, lote, {  [keyProduct] : [{cantidad: count --, status: true}]} )
                    } catch (error) {
                        console.error(error)
                    }
            }
            
        }else{

            setCount(count++)
            if(count >= minValue){
                try {
                    await updateInsumo(token, lote, {  [keyProduct] : [{cantidad: count ++, status: true}]} )
                    } catch (error) {
                        console.error(error)
                    }
            } else{
                try {
            
                await updateInsumo(token, lote, {  [keyProduct] : [{cantidad: count ++, status: false}]} )
               
                } catch (error) {
                    console.error(error)
                }
            }
            
        }

        setTimeout(() => {
        setReload(!reload)
            
        }, 3000)

    }

    let statusOk = (<div className="d-status-green">
                    <span class="material-icons-outlined">
                        check_circle
                    </span>
                </div>
        )

    
    let statusWarning = (<div className="d-status-red">
                    <span class="material-icons-outlined">
                        error_outline
                    </span>
                </div>)
        

    

    let stateAlert = () => {
        return state ? statusOk : statusWarning
    }

    return(
        <div className="d-mini">
                    <img  src={img} alt="vacuna pic"/>
                    <div className="d-detail">
                    <h5>{insumo.nombre}</h5>
                    <p className="d-numb">{count}</p>
                    <div className="d-ctrl">
                    <button name="resta" onClick={handleCounter} className="material-icons d-flex fake-btn">remove_circle</button>
                    <button name="suma" onClick={handleCounter} className="material-icons d-flex fake-btn">add_circle</button>
                    </div>
                    </div>
                    {stateAlert()}
        </div>
    )
}

export default DataCard